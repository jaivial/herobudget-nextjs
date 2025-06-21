/**
 * Email Templates
 * Plantillas HTML estéticas para emails de Hero Budget
 */

import { ContactFormData, TicketFormData } from './email';

/**
 * Estilo base para todos los emails
 * Incluye CSS inline para máxima compatibilidad con clientes de email
 */
const baseEmailStyles = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f8f9fa;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .header {
      background: linear-gradient(135deg, #e91e63 0%, #4caf50 100%);
      padding: 40px 30px;
      text-align: center;
      color: white;
    }
    
    .logo {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    .tagline {
      font-size: 14px;
      opacity: 0.9;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .title {
      font-size: 24px;
      font-weight: 600;
      color: #333333;
      margin-bottom: 20px;
    }
    
    .subtitle {
      font-size: 16px;
      color: #666666;
      margin-bottom: 30px;
    }
    
    .info-card {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
      border-left: 4px solid #e91e63;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .info-row:last-child {
      border-bottom: none;
    }
    
    .info-label {
      font-weight: 600;
      color: #333333;
      min-width: 120px;
    }
    
    .info-value {
      color: #666666;
      flex: 1;
      text-align: right;
    }
    
    .priority-high {
      background: #ffebee;
      border-left-color: #f44336;
    }
    
    .priority-medium {
      background: #fff3e0;
      border-left-color: #ff9800;
    }
    
    .priority-low {
      background: #e8f5e8;
      border-left-color: #4caf50;
    }
    
    .message-box {
      background: #ffffff;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
      white-space: pre-line;
      line-height: 1.6;
    }
    
    .footer {
      background: #f8f9fa;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    
    .footer-text {
      font-size: 14px;
      color: #666666;
      margin-bottom: 15px;
    }
    
    .social-links {
      margin: 20px 0;
    }
    
    .social-link {
      display: inline-block;
      margin: 0 10px;
      padding: 8px 16px;
      background: #e91e63;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #e91e63, #4caf50);
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      margin: 20px 0;
    }
  </style>
`;

/**
 * Plantilla de email para nuevo mensaje de contacto (Admin)
 */
export const createContactEmailTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Mensaje de Contacto - Hero Budget</title>
      ${baseEmailStyles}
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🦸 Hero Budget</div>
          <div class="tagline">Tu Héroe Financiero Personal</div>
        </div>
        
        <div class="content">
          <h1 class="title">📧 Nuevo Mensaje de Contacto</h1>
          <p class="subtitle">Has recibido un nuevo mensaje desde el formulario de contacto del sitio web.</p>
          
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">👤 Nombre:</span>
              <span class="info-value">${data.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">✉️ Email:</span>
              <span class="info-value">${data.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📋 Asunto:</span>
              <span class="info-value">${data.subject}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📅 Fecha:</span>
              <span class="info-value">${new Date().toLocaleString('es-ES')}</span>
            </div>
          </div>
          
          <h3 style="margin-bottom: 15px; color: #333;">💬 Mensaje:</h3>
          <div class="message-box">${data.message}</div>
          
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            <strong>Acción requerida:</strong> Responde a este mensaje contactando directamente a ${data.email}
          </p>
        </div>
        
        <div class="footer">
          <p class="footer-text">
            Este email fue generado automáticamente desde el sistema de contacto de Hero Budget.
          </p>
          <p style="font-size: 12px; color: #999;">
            🦸 Hero Budget - Gestiona tus finanzas como un héroe
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};