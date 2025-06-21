# Guía de Deployment - HeroBudget Website
## Despliegue en VPS Ubuntu con Nginx

### Información del Proyecto
- **Dominio**: herobudgetapp.jaimedigitalstudio.com  
- **Framework**: Next.js 14
- **Tipo**: Static Site Generation (SSG)
- **Servidor Web**: Nginx

---

## 📋 Prerrequisitos

### En el VPS Ubuntu:
```bash
# Node.js 18+ (requerido para el build)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Nginx
sudo apt-get update
sudo apt-get install nginx

# Certbot para SSL
sudo apt-get install certbot python3-certbot-nginx

# PM2 (opcional, para proceso de build)
sudo npm install -g pm2
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
scp -r ./herobudget-nextjs/* usuario@servidor:/var/www/website-herobudget/
```

### Paso 3: Instalar Dependencias y Build
```bash
cd /var/www/website-herobudget

# Instalar dependencias
npm ci --production=false

# Ejecutar build de producción
npm run build

# El output estará en .next/ con los archivos estáticos exportados
```

### Paso 4: Configurar Nginx

#### Crear archivo de configuración:
```bash
sudo nano /etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com
```

#### Contenido del archivo:
```nginx
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

    # Directorio raíz - servir archivos estáticos desde .next/static
    root /var/www/website-herobudget/.next;
    index index.html;

    # Página principal
    location = / {
        try_files /server/app/index.html /static/index.html =404;
        add_header Cache-Control "public, max-age=3600";
    }

    # Páginas HTML estáticas
    location ~ ^/(privacidad|soporte)$ {
        try_files /server/app/$1.html =404;
        add_header Cache-Control "public, max-age=3600";
    }

    # Archivos estáticos (_next/static/*)
    location /_next/static/ {
        alias /var/www/website-herobudget/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary Accept-Encoding;
    }

    # Archivos de assets (imágenes, etc.)
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|pdf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary Accept-Encoding;
        
        # Compresión
        gzip on;
        gzip_vary on;
        gzip_types text/css application/javascript image/svg+xml;
    }

    # Protección archivos sensibles
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Logs específicos
    access_log /var/log/nginx/herobudgetapp_access.log;
    error_log /var/log/nginx/herobudgetapp_error.log;

    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
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

### Paso 5: Configurar SSL con Let's Encrypt
```bash
# Obtener certificado SSL
sudo certbot --nginx -d herobudgetapp.jaimedigitalstudio.com

# Verificar renovación automática
sudo certbot renew --dry-run
```

### Paso 6: Configurar DNS
En tu proveedor de DNS (Cloudflare, etc.):
```
Tipo: A
Nombre: herobudgetapp
Valor: [IP-DE-TU-VPS]
TTL: Auto o 300
```

---

## 🔄 Script de Actualización

### Crear script de deployment automático:
```bash
sudo nano /var/www/website-herobudget/deploy.sh
```

```bash
#!/bin/bash
# Script de deployment para HeroBudget Website

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
npm ci --production=false

# Ejecutar build
echo "🏗️ Ejecutando build de producción..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d ".next" ]; then
    echo "❌ Error: Build falló, restaurando backup..."
    if [ -d ".next.backup.$(date +%Y%m%d_%H%M%S)" ]; then
        mv .next.backup.$(date +%Y%m%d_%H%M%S) .next
    fi
    exit 1
fi

# Limpiar backups antiguos (mantener solo los últimos 3)
echo "🧹 Limpiando backups antiguos..."
ls -t .next.backup.* 2>/dev/null | tail -n +4 | xargs -r rm -rf

# Recargar Nginx
echo "🔄 Recargando Nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Deployment completado exitosamente!"
echo "🌐 Sitio disponible en: https://herobudgetapp.jaimedigitalstudio.com"
```

```bash
# Hacer ejecutable
chmod +x /var/www/website-herobudget/deploy.sh
```

---

## 📊 Monitoreo y Logs

### Verificar estado del sitio:
```bash
# Estado de Nginx
sudo systemctl status nginx

# Logs en tiempo real
sudo tail -f /var/log/nginx/herobudgetapp_access.log
sudo tail -f /var/log/nginx/herobudgetapp_error.log

# Verificar SSL
curl -I https://herobudgetapp.jaimedigitalstudio.com
```

### Comandos de troubleshooting:
```bash
# Verificar configuración Nginx
sudo nginx -t

# Recargar configuración
sudo systemctl reload nginx

# Verificar puertos
sudo netstat -tlnp | grep nginx

# Verificar DNS
nslookup herobudgetapp.jaimedigitalstudio.com
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

## ✅ Checklist Final

- [ ] VPS configurado con Node.js 18+ y Nginx
- [ ] Código fuente subido y build ejecutado
- [ ] Configuración Nginx creada y habilitada
- [ ] SSL configurado con Let's Encrypt
- [ ] DNS apuntando al VPS
- [ ] Script de deployment creado
- [ ] Logs funcionando correctamente
- [ ] Sitio accesible en https://herobudgetapp.jaimedigitalstudio.com

---

## 🆘 Troubleshooting Común

**Error: "502 Bad Gateway"**
- Verificar que el build se ejecutó correctamente
- Revisar permisos del directorio `/var/www/website-herobudget`

**Error: "SSL Certificate not found"**
- Ejecutar nuevamente `sudo certbot --nginx -d herobudgetapp.jaimedigitalstudio.com`

**Error: "Site not loading"**
- Verificar DNS con `nslookup herobudgetapp.jaimedigitalstudio.com`
- Revisar logs de Nginx: `sudo tail -f /var/log/nginx/error.log`

---

*Última actualización: Enero 2025*