# Guía de Deployment - HeroBudget Website
## Despliegue en VPS Ubuntu con Nginx + Node.js

### Información del Proyecto
- **Dominio**: herobudgetapp.jaimedigitalstudio.com  
- **Framework**: Next.js 14
- **Tipo**: Configuración Híbrida (SSG + API Routes)
- **Servidor Web**: Nginx (proxy) + Node.js (PM2)
- **Funcionalidades**: Sitio estático + API para envío de emails

---

## 📋 Prerrequisitos

### En el VPS Ubuntu:
```bash
# Node.js 18+ (requerido para runtime y build)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Nginx
sudo apt-get update
sudo apt-get install nginx

# Certbot para SSL
sudo apt-get install certbot python3-certbot-nginx

# PM2 (requerido para mantener Node.js corriendo)
sudo npm install -g pm2

# Variables de entorno para email
sudo apt-get install -y git curl
```

---

## 🚀 Proceso de Deployment

### Paso 1: Preparar el Directorio
```bash
# Crear directorio para la aplicación
sudo mkdir -p /var/www/website-herobudget
sudo chown -R $USER:$USER /var/www/website-herobudget
sudo chmod -R 755 /var/www/website-herobudget
```

### Paso 2: Subir Código Fuente
```bash
# Opción A: Git Clone (recomendado)
cd /var/www/website-herobudget
git clone [URL-DEL-REPOSITORIO] .

# Opción B: SCP desde local
scp -r ./herobudget-nextjs/* root@178.16.130.178:/var/www/website-herobudget/
```

### Paso 3: Configurar Variables de Entorno
```bash
cd /var/www/website-herobudget

# Crear archivo de variables de entorno
sudo nano .env.production

# Añadir las siguientes variables:
PORT=3001
NODE_ENV=production

# Gmail SMTP Configuration
GMAIL_USER=jaimebillanueba99@gmail.com
GMAIL_APP_PASSWORD=jofq ozie zrrw cmgr

# Email Recipients
ADMIN_EMAIL=jaimebillanueba99@gmail.com

# Application Info
APP_NAME=Hero Budget
APP_URL=https://herobudgetapp.jaimedigitalstudio.com
```

### Paso 4: Instalar Dependencias y Build
```bash
cd /var/www/website-herobudget

# Instalar dependencias (incluyendo producción para APIs)
npm ci

# Ejecutar build de producción
npm run build

# El output estará en .next/ con archivos estáticos + servidor para APIs
```

### Paso 5: Configurar PM2 para Node.js
```bash
cd /var/www/website-herobudget

# Crear archivo de configuración PM2
sudo nano ecosystem.config.js
```

**Contenido del archivo ecosystem.config.js:**
```javascript
module.exports = {
  apps: [{
    name: 'herobudget-website',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/website-herobudget',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    env_file: '.env.production',
    error_file: '/var/log/pm2/herobudget-error.log',
    out_file: '/var/log/pm2/herobudget-out.log',
    log_file: '/var/log/pm2/herobudget-combined.log'
  }]
};
```

```bash
# Crear directorio de logs
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# Iniciar aplicación con PM2
pm2 start ecosystem.config.js

# Guardar configuración PM2
pm2 save

# Configurar PM2 para iniciar con el sistema
pm2 startup
# Ejecutar el comando que PM2 te proporcione (sudo env PATH=...)
```

### Paso 6: Configurar Nginx (Configuración Híbrida)

#### Crear archivo de configuración:
```bash
sudo nano /etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com
```

#### Contenido del archivo (Configuración Híbrida):
```nginx
# Configuración upstream para Node.js
upstream herobudget_backend {
    server localhost:3001;
    keepalive 64;
}

# Redirección HTTP a HTTPS
server {
    listen 80;
    server_name herobudgetapp.jaimedigitalstudio.com;
    return 301 https://$server_name$request_uri;
}

# Configuración HTTPS principal
server {
    listen 443 ssl http2;
    server_name herobudgetapp.jaimedigitalstudio.com;

    # SSL Configuration (se configura después con certbot)
    ssl_certificate /etc/letsencrypt/live/herobudgetapp.jaimedigitalstudio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/herobudgetapp.jaimedigitalstudio.com/privkey.pem;
    
    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Configuración de proxy para APIs y archivos Next.js
    # IMPORTANTE: Las API routes (/api/*) van a Node.js
    location /api/ {
        proxy_pass http://herobudget_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
    }

    # Directorio raíz para archivos estáticos
    root /var/www/website-herobudget/.next;
    index index.html;

    # Página principal (archivo estático)
    location = / {
        try_files /server/app/index.html =404;
        add_header Cache-Control "public, max-age=3600";
    }

    # Páginas HTML estáticas (privacidad, soporte)
    location ~ ^/(privacidad|soporte)$ {
        try_files /server/app/$1.html =404;
        add_header Cache-Control "public, max-age=3600";
    }

    # IMPORTANTE: Todos los archivos _next/* van a Node.js (CSS, JS, imágenes optimizadas)
    location /_next/ {
        proxy_pass http://herobudget_backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
        
        # Headers de cache para archivos estáticos
        location ~* /_next/static/.*\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|pdf|webp|avif)$ {
            proxy_pass http://herobudget_backend;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Archivos públicos (imágenes, manifest, etc.)
    location ~* \.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|pdf|webp|avif)$ {
        root /var/www/website-herobudget/public;
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary Accept-Encoding;
        
        # Si no existe en public, devolver 404
        try_files $uri =404;
    }

    # Manifest y otros archivos especiales
    location = /manifest.json {
        root /var/www/website-herobudget/public;
        expires 1d;
        add_header Cache-Control "public, max-age=86400";
    }

    # Robots.txt y sitemap
    location = /robots.txt {
        root /var/www/website-herobudget/public;
        expires 1d;
    }

    location = /sitemap.xml {
        root /var/www/website-herobudget/public;
        expires 1d;
    }

    # Protección de archivos sensibles
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Bloquear acceso a archivos de configuración
    location ~ \.(env|config|json)$ {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Logs específicos
    access_log /var/log/nginx/herobudgetapp_access.log;
    error_log /var/log/nginx/herobudgetapp_error.log;

    # Error pages personalizadas
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    
    # Timeouts
    client_max_body_size 10M;
    client_body_timeout 60s;
    client_header_timeout 60s;
}
```

#### Habilitar sitio:
```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Paso 7: Verificar que PM2 y Node.js estén funcionando
```bash
# Verificar estado de PM2
pm2 status

# Verificar logs en tiempo real
pm2 logs herobudget-website

# Verificar que Node.js responde en puerto 3001
curl http://localhost:3001/api/contact

# Debería devolver: {"error":"Método no permitido"}
```

### Paso 8: Configurar SSL con Let's Encrypt
```bash
# Obtener certificado SSL
sudo certbot --nginx -d herobudgetapp.jaimedigitalstudio.com

# Verificar renovación automática
sudo certbot renew --dry-run
```

### Paso 9: Configurar DNS
En tu proveedor de DNS (Cloudflare, etc.):
```
Tipo: A
Nombre: herobudgetapp
Valor: [IP-DE-TU-VPS]
TTL: Auto o 300
```

---

## 🔄 Script de Actualización (Configuración Híbrida)

### Crear script de deployment automático:
```bash
sudo nano /var/www/website-herobudget/deploy.sh
```

```bash
#!/bin/bash
# Script de deployment para HeroBudget Website (Configuración Híbrida)

set -e

echo "🚀 Iniciando deployment de HeroBudget Website..."

# Directorio del proyecto
PROJECT_DIR="/var/www/website-herobudget"
cd $PROJECT_DIR

# Backup del build anterior
if [ -d ".next" ]; then
    echo "📦 Creando backup del build anterior..."
    mv .next .next.backup.$(date +%Y%m%d_%H%M%S)
fi

# Actualizar código desde Git
echo "📥 Actualizando código fuente..."
git pull origin main

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
echo "📊 Estado PM2: $(pm2 status | grep herobudget-website)"
```

```bash
# Hacer ejecutable
chmod +x /var/www/website-herobudget/deploy.sh
```

### Script de rollback en caso de problemas:
```bash
sudo nano /var/www/website-herobudget/rollback.sh
```

```bash
#!/bin/bash
# Script de rollback para HeroBudget Website

set -e

echo "🔄 Iniciando rollback..."

PROJECT_DIR="/var/www/website-herobudget"
cd $PROJECT_DIR

# Buscar el backup más reciente
LATEST_BACKUP=$(ls -t .next.backup.* 2>/dev/null | head -n 1)

if [ -z "$LATEST_BACKUP" ]; then
    echo "❌ Error: No se encontraron backups disponibles"
    exit 1
fi

echo "📦 Restaurando desde backup: $LATEST_BACKUP"

# Hacer backup del estado actual problemático
if [ -d ".next" ]; then
    mv .next .next.failed.$(date +%Y%m%d_%H%M%S)
fi

# Restaurar el backup
mv "$LATEST_BACKUP" .next

# Reiniciar PM2
echo "🔄 Reiniciando aplicación..."
pm2 restart herobudget-website

# Recargar Nginx
echo "🔄 Recargando Nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Rollback completado exitosamente!"
```

```bash
# Hacer ejecutable
chmod +x /var/www/website-herobudget/rollback.sh
```

---

## 📊 Monitoreo y Logs (Configuración Híbrida)

### Verificar estado completo del sitio:
```bash
# Estado de Nginx
sudo systemctl status nginx

# Estado de PM2 y aplicación Node.js
pm2 status
pm2 show herobudget-website
pm2 monit

# Logs en tiempo real - Nginx
sudo tail -f /var/log/nginx/herobudgetapp_access.log
sudo tail -f /var/log/nginx/herobudgetapp_error.log

# Logs en tiempo real - PM2/Node.js
pm2 logs herobudget-website
pm2 logs herobudget-website --lines 100

# Verificar SSL
curl -I https://herobudgetapp.jaimedigitalstudio.com

# Verificar API endpoints
curl -X GET https://herobudgetapp.jaimedigitalstudio.com/api/contact
curl -X GET https://herobudgetapp.jaimedigitalstudio.com/api/ticket
```

### Comandos de troubleshooting específicos:
```bash
# Verificar configuración Nginx
sudo nginx -t

# Recargar configuración
sudo systemctl reload nginx

# Verificar puertos y procesos
sudo netstat -tlnp | grep nginx
sudo netstat -tlnp | grep :3001
ps aux | grep node

# Verificar espacio en disco
df -h
du -sh /var/www/website-herobudget/.next*

# Verificar memoria y CPU
free -h
top -p $(pgrep -f "herobudget-website")

# Verificar DNS
nslookup herobudgetapp.jaimedigitalstudio.com

# Reiniciar servicios en caso de problemas
sudo systemctl restart nginx
pm2 restart herobudget-website
```

### Monitoreo avanzado con PM2:
```bash
# Configurar monitoreo de PM2
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7

# Configurar alertas básicas
pm2 install pm2-auto-pull  # Para auto-updates desde Git

# Ver métricas en tiempo real
pm2 monit

# Generar dump de logs para análisis
pm2 flush  # Limpiar logs antiguos
pm2 logs herobudget-website --timestamp
```

---

## 🔒 Seguridad Adicional

### Configurar firewall:
```bash
# UFW básico
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable
```

### Fail2ban para protección SSH:
```bash
sudo apt-get install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

---

## 📈 Optimizaciones de Performance

### En Nginx:
```bash
# Editar configuración principal
sudo nano /etc/nginx/nginx.conf
```

Añadir en `http {}`:
```nginx
# Compresión global
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

# Cache de archivos abiertos
open_file_cache max=1000 inactive=20s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;
open_file_cache_errors on;
```

---

## ✅ Checklist Final (Configuración Híbrida)

### Infraestructura Base:
- [ ] VPS configurado con Node.js 18+ y Nginx
- [ ] PM2 instalado globalmente
- [ ] Código fuente subido desde Git

### Configuración de Aplicación:
- [ ] Variables de entorno configuradas (.env.production)
- [ ] Dependencias instaladas con `npm ci`
- [ ] Build ejecutado correctamente (`npm run build`)
- [ ] PM2 configurado con ecosystem.config.js
- [ ] Aplicación Node.js funcionando en puerto 3000

### Configuración de Nginx:
- [ ] Configuración híbrida creada y habilitada
- [ ] Proxy a Node.js funcionando (/api/*)
- [ ] Archivos estáticos servidos directamente
- [ ] SSL configurado con Let's Encrypt

### Verificaciones Finales:
- [ ] DNS apuntando al VPS
- [ ] Scripts de deployment y rollback creados
- [ ] Logs funcionando correctamente (Nginx + PM2)
- [ ] Sitio accesible en https://herobudgetapp.jaimedigitalstudio.com
- [ ] APIs funcionando: `/api/contact`, `/api/ticket`, `/api/send-privacy-email`
- [ ] Emails enviándose correctamente

---

## 🆘 Troubleshooting Común (Configuración Híbrida)

**Error: "502 Bad Gateway"**
- Verificar que PM2 esté corriendo: `pm2 status`
- Revisar logs de PM2: `pm2 logs herobudget-website`
- Verificar que Node.js responda en puerto 3001: `curl http://localhost:3001/api/contact`
- Revisar permisos del directorio `/var/www/website-herobudget`

**Error: "API not working" o emails no se envían**
- Verificar variables de entorno: `cat .env.production`
- Revisar logs de PM2: `pm2 logs herobudget-website --lines 50`
- Verificar que las API routes respondan: `curl -X POST http://localhost:3001/api/contact`
- Comprobar configuración de email (SMTP)

**Error: "SSL Certificate not found"**
- Ejecutar nuevamente `sudo certbot --nginx -d herobudgetapp.jaimedigitalstudio.com`
- Verificar que Nginx se reinició después de obtener el certificado

**Error: "Site not loading" o archivos estáticos no cargan**
- Verificar DNS con `nslookup herobudgetapp.jaimedigitalstudio.com`
- Revisar logs de Nginx: `sudo tail -f /var/log/nginx/herobudgetapp_error.log`
- Verificar que la estructura de .next/ existe: `ls -la /var/www/website-herobudget/.next/`
- Comprobar permisos: `sudo chown -R www-data:www-data /var/www/website-herobudget/.next/`

**Error: "PM2 app not starting"**
- Verificar que Node.js puede ejecutar la app: `cd /var/www/website-herobudget && npm start`
- Revisar ecosystem.config.js
- Verificar espacio en disco: `df -h`
- Comprobar memoria disponible: `free -h`

**Error: "Build fails"**
- Verificar que todas las dependencias están instaladas: `npm ci`
- Revisar logs del build: `npm run build`
- Verificar espacio en disco suficiente
- Comprobar versión de Node.js: `node --version` (debe ser 18+)

### Comandos de diagnóstico rápido:
```bash
# Script de diagnóstico completo
#!/bin/bash
echo "=== DIAGNÓSTICO HEROBUDGET WEBSITE ==="
echo "1. Estado de servicios:"
sudo systemctl status nginx --no-pager -l
pm2 status

echo "2. Puertos en uso:"
sudo netstat -tlnp | grep -E "(80|443|3001)"

echo "3. Espacio en disco:"
df -h | grep -E "(/$|/var)"

echo "4. Memoria:"
free -h

echo "5. Procesos Node.js:"
ps aux | grep node

echo "6. Última actividad en logs:"
sudo tail -n 5 /var/log/nginx/herobudgetapp_error.log
pm2 logs herobudget-website --lines 5

echo "7. Test de conectividad:"
curl -s -o /dev/null -w "Status: %{http_code}\n" http://localhost:3001/api/contact
curl -s -o /dev/null -w "Status: %{http_code}\n" https://herobudgetapp.jaimedigitalstudio.com
```

---

*Última actualización: Enero 2025*