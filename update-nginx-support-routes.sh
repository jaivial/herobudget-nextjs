#!/bin/bash

# Update Nginx configuration for Hero Budget support page with all language routes
# This script adds rewrite rules for all 39 supported languages

SERVER_HOST="root@178.16.130.178"
NGINX_CONF="/etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com"
BACKUP_CONF="/etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com.backup.$(date +%Y%m%d_%H%M%S)"

echo "🚀 Updating Nginx configuration for support page language routes..."
echo "📡 Server: $SERVER_HOST"
echo "📄 Config: $NGINX_CONF"
echo ""

# Create the rewrite rules for all 39 language codes
LANGUAGE_CODES=(
    "ar_SA"
    "ca_ES"
    "zh_CN"
    "hr_HR"
    "cs_CZ"
    "da_DK"
    "nl_NL"
    "en_AU"
    "en_CA"
    "en_GB"
    "en_US"
    "fi_FI"
    "fr_CA"
    "fr_FR"
    "de_DE"
    "de_CH"
    "el_GR"
    "he_IL"
    "hi_IN"
    "hu_HU"
    "id_ID"
    "it_IT"
    "ja_JP"
    "ko_KR"
    "ms_MY"
    "no_NO"
    "pl_PL"
    "pt_BR"
    "pt_PT"
    "ro_RO"
    "ru_RU"
    "sk_SK"
    "es_MX"
    "es_ES"
    "sv_SE"
    "th_TH"
    "tr_TR"
    "uk_UA"
    "vi_VN"
)

# Generate the Nginx configuration snippet
NGINX_SNIPPET=""
for locale in "${LANGUAGE_CODES[@]}"; do
    NGINX_SNIPPET+="        # Support page - $locale\n"
    NGINX_SNIPPET+="        location /soporte/$locale {\n"
    NGINX_SNIPPET+="            proxy_pass http://localhost:3000/soporte/$locale;\n"
    NGINX_SNIPPET+="            proxy_http_version 1.1;\n"
    NGINX_SNIPPET+="            proxy_set_header Upgrade \$http_upgrade;\n"
    NGINX_SNIPPET+="            proxy_set_header Connection 'upgrade';\n"
    NGINX_SNIPPET+="            proxy_set_header Host \$host;\n"
    NGINX_SNIPPET+="            proxy_cache_bypass \$http_upgrade;\n"
    NGINX_SNIPPET+="            proxy_set_header X-Real-IP \$remote_addr;\n"
    NGINX_SNIPPET+="            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;\n"
    NGINX_SNIPPET+="            proxy_set_header X-Forwarded-Proto \$scheme;\n"
    NGINX_SNIPPET+="        }\n\n"
done

# Save the snippet to a temporary file
TEMP_SNIPPET="/tmp/nginx_support_routes_snippet.conf"
echo -e "$NGINX_SNIPPET" > "$TEMP_SNIPPET"

echo "📝 Generated Nginx configuration snippet with ${#LANGUAGE_CODES[@]} language routes"
echo ""
echo "🔍 Preview of configuration snippet:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
head -n 30 "$TEMP_SNIPPET"
echo "..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

read -p "⚠️  Do you want to proceed with updating the server? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Aborted by user"
    rm "$TEMP_SNIPPET"
    exit 1
fi

echo ""
echo "📤 Connecting to server and updating configuration..."

# SSH into server and execute the update
ssh "$SERVER_HOST" << 'ENDSSH'
#!/bin/bash

NGINX_CONF="/etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com"
BACKUP_CONF="/etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com.backup.$(date +%Y%m%d_%H%M%S)"

# Check if nginx config exists
if [ ! -f "$NGINX_CONF" ]; then
    echo "❌ Error: Nginx config file not found at $NGINX_CONF"
    exit 1
fi

# Create backup
echo "💾 Creating backup: $BACKUP_CONF"
cp "$NGINX_CONF" "$BACKUP_CONF"

# Check if backup was successful
if [ ! -f "$BACKUP_CONF" ]; then
    echo "❌ Error: Failed to create backup"
    exit 1
fi

echo "✅ Backup created successfully"

ENDSSH

# Copy the snippet to the server
echo "📤 Uploading configuration snippet..."
scp "$TEMP_SNIPPET" "$SERVER_HOST:/tmp/nginx_support_routes_snippet.conf"

# Continue with the update on the server
ssh "$SERVER_HOST" << 'ENDSSH'
#!/bin/bash

NGINX_CONF="/etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com"
TEMP_SNIPPET="/tmp/nginx_support_routes_snippet.conf"
MARKER_START="# BEGIN SUPPORT PAGE LANGUAGE ROUTES - AUTO GENERATED"
MARKER_END="# END SUPPORT PAGE LANGUAGE ROUTES - AUTO GENERATED"

# Remove old support routes if they exist (between markers)
if grep -q "$MARKER_START" "$NGINX_CONF"; then
    echo "🔄 Removing old support routes..."
    sed -i "/$MARKER_START/,/$MARKER_END/d" "$NGINX_CONF"
fi

# Find the location block where we should insert the routes
# We'll insert before the main proxy_pass location / block
echo "📝 Inserting new support routes..."

# Create a temporary file with the new content
TEMP_CONFIG="/tmp/nginx_config_updated.conf"

# Insert the new routes before the main location / block
awk -v snippet="$(cat $TEMP_SNIPPET)" '
/location \/ \{/ && !found {
    print "        '"$MARKER_START"'"
    print snippet
    print "        '"$MARKER_END"'"
    print ""
    found=1
}
{print}
' "$NGINX_CONF" > "$TEMP_CONFIG"

# Replace the original config
mv "$TEMP_CONFIG" "$NGINX_CONF"

# Test nginx configuration
echo "🧪 Testing Nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    echo "🔄 Reloading Nginx..."
    systemctl reload nginx

    if [ $? -eq 0 ]; then
        echo "✅ Nginx reloaded successfully"
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "🎉 SUCCESS! Support page language routes have been configured for all 39 languages"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo "📍 Test URLs:"
        echo "   • https://herobudgetapp.jaimedigitalstudio.com/soporte/es_ES"
        echo "   • https://herobudgetapp.jaimedigitalstudio.com/soporte/en_US"
        echo "   • https://herobudgetapp.jaimedigitalstudio.com/soporte/fr_FR"
        echo "   • https://herobudgetapp.jaimedigitalstudio.com/soporte/de_DE"
        echo "   • (and 35 more languages...)"
    else
        echo "❌ Error reloading Nginx. Check logs: journalctl -xe -u nginx"
        echo "🔄 Rolling back..."
        BACKUP_CONF=$(ls -t /etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com.backup.* | head -1)
        cp "$BACKUP_CONF" "$NGINX_CONF"
        systemctl reload nginx
        exit 1
    fi
else
    echo "❌ Nginx configuration test failed"
    echo "🔄 Rolling back to backup..."
    BACKUP_CONF=$(ls -t /etc/nginx/sites-available/herobudgetapp.jaimedigitalstudio.com.backup.* | head -1)
    cp "$BACKUP_CONF" "$NGINX_CONF"
    exit 1
fi

# Cleanup
rm -f "$TEMP_SNIPPET"

ENDSSH

# Check if the SSH command was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Local cleanup..."
    rm "$TEMP_SNIPPET"
    echo "🎊 Deployment completed successfully!"
else
    echo ""
    echo "❌ Deployment failed. Check the error messages above."
    rm "$TEMP_SNIPPET"
    exit 1
fi
