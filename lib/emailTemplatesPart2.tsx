/**
 * Email Templates Part 2
 * Continuación de plantillas HTML para emails de Hero Budget
 */

import { ContactFormData, TicketFormData } from './email';

/**
 * Plantilla de email de confirmación para usuarios (Contacto)
 */
export const createContactConfirmationTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación de Mensaje - Hero Budget</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; background: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #4caf50 0%, #e91e63 100%); padding: 40px 30px; text-align: center; color: white; }
        .logo { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .tagline { font-size: 14px; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .title { font-size: 24px; font-weight: 600; color: #333; margin-bottom: 20px; }
        .success-icon { font-size: 48px; text-align: center; margin: 20px 0; }
        .info-card { background: #f0f9ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #4caf50; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #4caf50, #e91e63); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0; }
        .footer-text { font-size: 14px; color: #666; margin-bottom: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🦸 Hero Budget</div>
          <div class="tagline">Tu Héroe Financiero Personal</div>
        </div>
        
        <div class="content">
          <div class="success-icon">✅</div>
          <h1 class="title">¡Mensaje Recibido!</h1>
          <p style="font-size: 16px; color: #666; margin-bottom: 30px;">
            Hola <strong>${data.name}</strong>, hemos recibido tu mensaje correctamente.
          </p>
          
          <div class="info-card">
            <p style="margin-bottom: 15px;"><strong>📋 Resumen de tu consulta:</strong></p>
            <p style="margin-bottom: 10px;"><strong>Asunto:</strong> ${data.subject}</p>
            <p style="margin-bottom: 10px;"><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
            <p><strong>Email de contacto:</strong> ${data.email}</p>
          </div>
          
          <p style="margin: 20px 0; color: #666;">
            Nuestro equipo de soporte revisará tu mensaje y te responderemos en un plazo máximo de 24 horas.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://herobudget.com/soporte" class="cta-button">
              🎯 Visitar Centro de Ayuda
            </a>
          </div>
          
          <div style="background: #fff3e0; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="font-size: 14px; color: #f57c00; margin: 0;">
              <strong>💡 Tip:</strong> Mientras esperas nuestra respuesta, puedes consultar nuestras FAQ donde resolvemos las dudas más comunes.
            </p>
          </div>
        </div>
        
        <div class="footer">
          <p class="footer-text">
            Gracias por confiar en Hero Budget para gestionar tus finanzas.
          </p>
          <p style="font-size: 12px; color: #999;">
            🦸 Hero Budget - Tu compañero financiero de confianza
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Plantilla de email para nuevo ticket de soporte (Admin)
 */
export const createTicketEmailTemplate = (data: TicketFormData): string => {
  const priorityClass = data.priority === 'Alta' || data.priority === 'Urgente' ? 'priority-high' : 
                       data.priority === 'Media' ? 'priority-medium' : 'priority-low';
  
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Ticket de Soporte - Hero Budget</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; background: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #f44336 0%, #e91e63 100%); padding: 40px 30px; text-align: center; color: white; }
        .logo { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .content { padding: 40px 30px; }
        .title { font-size: 24px; font-weight: 600; color: #333; margin-bottom: 20px; }
        .priority-badge { display: inline-block; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
        .priority-high { background: #ffebee; color: #d32f2f; border: 1px solid #ffcdd2; }
        .priority-medium { background: #fff3e0; color: #f57c00; border: 1px solid #ffcc02; }
        .priority-low { background: #e8f5e8; color: #388e3c; border: 1px solid #c8e6c9; }
        .info-card { background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0; }
        .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e0e0e0; }
        .info-row:last-child { border-bottom: none; }
        .info-label { font-weight: 600; color: #333; min-width: 120px; }
        .info-value { color: #666; flex: 1; text-align: right; }
        .message-box { background: #fff; border: 2px solid #e0e0e0; border-radius: 12px; padding: 20px; margin: 20px 0; white-space: pre-line; }
        .footer { background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🎫 Hero Budget Support</div>
          <div style="font-size: 14px; opacity: 0.9;">Sistema de Tickets de Soporte</div>
        </div>
        
        <div class="content">
          <h1 class="title">🚨 Nuevo Ticket de Soporte</h1>
          <div style="margin-bottom: 20px;">
            <span class="priority-badge ${priorityClass}">Prioridad ${data.priority}</span>
          </div>
          
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
              <span class="info-label">📂 Categoría:</span>
              <span class="info-value">${data.category}</span>
            </div>
            <div class="info-row">
              <span class="info-label">⚡ Prioridad:</span>
              <span class="info-value">${data.priority}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📱 Dispositivo:</span>
              <span class="info-value">${data.device || 'No especificado'}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📋 Versión:</span>
              <span class="info-value">${data.version || 'No especificada'}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📅 Fecha:</span>
              <span class="info-value">${new Date().toLocaleString('es-ES')}</span>
            </div>
          </div>
          
          <h3 style="margin-bottom: 15px; color: #333;">📝 Asunto:</h3>
          <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            ${data.subject}
          </div>
          
          <h3 style="margin-bottom: 15px; color: #333;">📄 Descripción del Problema:</h3>
          <div class="message-box">${data.description}</div>
          
          ${data.steps ? `
            <h3 style="margin-bottom: 15px; color: #333;">🔧 Pasos para Reproducir:</h3>
            <div class="message-box">${data.steps}</div>
          ` : ''}
        </div>
        
        <div class="footer">
          <p style="font-size: 14px; color: #666; margin-bottom: 15px;">
            <strong>Acción requerida:</strong> Revisar y responder al ticket con prioridad ${data.priority}
          </p>
          <p style="font-size: 12px; color: #999;">
            🎫 Sistema de Tickets - Hero Budget Support
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};