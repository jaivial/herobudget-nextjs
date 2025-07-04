# Configuración Nginx Corregida para HeroBudget Static Website
# Subdominio: herobudgetapp.jaimedigitalstudio.com
# Evita conflictos con configuración SSL existente

# Redirección HTTP a HTTPS
server {
    listen 80;
    server_name herobudgetapp.jaimedigitalstudio.com;
    return 301 https://$server_name$request_uri;
}

# Configuración HTTPS para sitio estático
server {
    listen 443 ssl http2;
    server_name herobudgetapp.jaimedigitalstudio.com;

    # SSL Configuration (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/herobudgetapp.jaimedigitalstudio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/herobudgetapp.jaimedigitalstudio.com/privkey.pem;
    
    # SSL Settings (compatibles con configuración existente)
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Directorio raíz para archivos estáticos
    root /var/www/website-herobudget;
    index index.html;

    # Página principal
    location = / {
        try_files /index.html =404;
        add_header Cache-Control "public, max-age=3600";
    }

    # Archivos HTML directos (con parámetros de idioma)
    location ~ ^/(index|privacidad|soporte)\.html$ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=3600";
    }

    # Política de privacidad - redirección a .html para compatibilidad
    location = /privacidad {
        return 301 $scheme://$server_name/privacidad.html$is_args$args;
    }

    # Soporte/FAQ - redirección a .html para compatibilidad  
    location = /soporte {
        return 301 $scheme://$server_name/soporte.html$is_args$args;
    }

    # Archivos estáticos (CSS, JS, imágenes, fuentes)
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|pdf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary Accept-Encoding;
        
        # Habilitar compresión
        gzip on;
        gzip_vary on;
        gzip_types text/css application/javascript image/svg+xml;
    }

    # Protección para archivos sensibles
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    location ~ ~$ {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Logs específicos para el subdominio
    access_log /var/log/nginx/herobudgetapp_access.log;
    error_log /var/log/nginx/herobudgetapp_error.log;

    # Error pages personalizadas
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    
    location = /404.html {
        internal;
    }
    
    location = /50x.html {
        internal;
    }