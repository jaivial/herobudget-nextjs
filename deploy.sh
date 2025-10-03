#!/bin/bash
# Script de deployment para HeroBudget Website (Configuración Híbrida)

set -e

echo "🚀 Iniciando deployment de HeroBudget Website..."

# Conectar al servidor remoto y ejecutar deployment
ssh root@178.16.130.178 << 'EOF'
# Directorio del proyecto
PROJECT_DIR="/var/www/website-herobudget"
cd $PROJECT_DIR

echo "📂 Directorio actual: $(pwd)"

# Backup del build anterior
if [ -d ".next" ]; then
    echo "📦 Creando backup del build anterior..."
    mv .next .next.backup.$(date +%Y%m%d_%H%M%S) 2>/dev/null || true
fi

# Actualizar código desde Git
echo "🔄 Actualizando código desde repositorio remoto..."
echo "Ejecutando git clean -fd..."
git clean -fd
echo "Ejecutando git reset --hard HEAD..."
git reset --hard HEAD
echo "Ejecutando git fetch origin..."
git fetch origin
echo "Ejecutando git reset --hard origin/main..."
git reset --hard origin/main

echo "Estado git final:"
git status

# Instalar/actualizar dependencias
echo "📦 Instalando dependencias..."
npm ci

# Ejecutar build
echo "🏗️ Ejecutando build de producción..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d ".next" ]; then
    echo "❌ Error: Build falló, restaurando backup..."
    LATEST_BACKUP=$(ls -t .next.backup.* 2>/dev/null | head -n 1)
    if [ ! -z "$LATEST_BACKUP" ]; then
        mv "$LATEST_BACKUP" .next
    fi
    exit 1
fi

# Reiniciar aplicación con PM2
echo "🔄 Reiniciando aplicación Node.js..."
pm2 restart herobudget-website

# Verificar que la aplicación esté funcionando
echo "🔍 Verificando estado de la aplicación..."
sleep 5
if ! pm2 show herobudget-website | grep -q "online"; then
    echo "❌ Error: La aplicación no se inició correctamente"
    pm2 logs herobudget-website --lines 20
    exit 1
fi

# Verificar que las APIs respondan
echo "🔍 Verificando API endpoints..."
API_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/api/contact)
if [ "$API_RESPONSE" != "405" ]; then
    echo "⚠️ Advertencia: API no responde como se esperaba (código: $API_RESPONSE)"
else
    echo "✅ APIs funcionando correctamente"
fi

# Limpiar backups antiguos (mantener solo los últimos 3)
echo "🧹 Limpiando backups antiguos..."
ls -t .next.backup.* 2>/dev/null | tail -n +4 | xargs -r rm -rf

# Recargar Nginx
echo "🔄 Recargando Nginx..."
sudo nginx -t && sudo systemctl reload nginx

# Verificar que el sitio esté accesible
echo "🔍 Verificando accesibilidad del sitio..."
SITE_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" https://herobudgetapp.jaimedigitalstudio.com)
if [ "$SITE_RESPONSE" = "200" ]; then
    echo "✅ Sitio web accesible correctamente"
else
    echo "⚠️ Advertencia: Sitio no accesible (código: $SITE_RESPONSE)"
fi

echo "✅ Deployment completado exitosamente!"
echo "🌐 Sitio disponible en: https://herobudgetapp.jaimedigitalstudio.com"
pm2 status | grep herobudget-website

EOF

echo "🎉 Deploy script finalizado!"