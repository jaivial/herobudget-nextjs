/**
 * Email Templates Part 3
 * Plantilla de confirmación para tickets de soporte
 */

import { TicketFormData } from './email';

/**
 * Plantilla de email de confirmación para usuarios (Ticket)
 */
export const createTicketConfirmationTemplate = (data: TicketFormData): string => {
  const ticketId = `HB-${Date.now().toString().slice(-6)}`;
  
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ticket Creado - Hero Budget</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; background: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #2196f3 0%, #4caf50 100%); padding: 40px 30px; text-align: center; color: white; }
        .logo { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .content { padding: 40px 30px; }
        .title { font-size: 24px; font-weight: 600; color: #333; margin-bottom: 20px; }
        .ticket-id { background: linear-gradient(135deg, #e3f2fd, #f3e5f5); border-radius: 12px; padding: 20px; text-align: center; margin: 25px 0; }
        .ticket-number { font-size: 32px; font-weight: 700; color: #1976d2; margin-bottom: 8px; }
        .info-card { background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #2196f3; }
        .timeline { background: #fff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 20px; margin: 20px 0; }
        .timeline-item { display: flex; align-items: center; margin: 15px 0; }
        .timeline-icon { width: 24px; height: 24px; border-radius: 50%; background: #4caf50; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; margin-right: 15px; }
        .timeline-text { flex: 1; color: #666; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #2196f3, #4caf50); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0; }
        .priority-high { color: #f44336; font-weight: 600; }
        .priority-medium { color: #ff9800; font-weight: 600; }
        .priority-low { color: #4caf50; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🎫 Hero Budget</div>
          <div style="font-size: 14px; opacity: 0.9;">Sistema de Soporte Técnico</div>
        </div>
        
        <div class="content">
          <h1 class="title">✅ Ticket Creado Exitosamente</h1>
          <p style="font-size: 16px; color: #666; margin-bottom: 30px;">
            Hola <strong>${data.name}</strong>, hemos recibido tu solicitud de soporte técnico.
          </p>
          
          <div class="ticket-id">
            <div style="font-size: 14px; color: #666; margin-bottom: 10px;">Tu número de ticket es:</div>
            <div class="ticket-number">#${ticketId}</div>
            <div style="font-size: 12px; color: #999;">Guarda este número para futuras consultas</div>
          </div>
          
          <div class="info-card">
            <p style="margin-bottom: 15px;"><strong>📋 Resumen de tu ticket:</strong></p>
            <p style="margin-bottom: 10px;"><strong>Asunto:</strong> ${data.subject}</p>
            <p style="margin-bottom: 10px;"><strong>Categoría:</strong> ${data.category}</p>
            <p style="margin-bottom: 10px;"><strong>Prioridad:</strong> 
              <span class="priority-${data.priority.toLowerCase()}">${data.priority}</span>
            </p>
            <p style="margin-bottom: 10px;"><strong>Fecha de creación:</strong> ${new Date().toLocaleString('es-ES')}</p>
            <p><strong>Email de contacto:</strong> ${data.email}</p>
          </div>
          
          <div class="timeline">
            <h3 style="margin-bottom: 20px; color: #333;">📍 Estado del Ticket</h3>
            <div class="timeline-item">
              <div class="timeline-icon">✓</div>
              <div class="timeline-text">
                <strong>Ticket recibido</strong> - ${new Date().toLocaleString('es-ES')}
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon" style="background: #ffab00;">⏳</div>
              <div class="timeline-text">
                <strong>En revisión</strong> - Nuestro equipo está analizando tu solicitud
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon" style="background: #e0e0e0;">📧</div>
              <div class="timeline-text">
                <strong>Respuesta pendiente</strong> - Te contactaremos pronto
              </div>
            </div>
          </div>
          
          <div style="background: #e8f5e8; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h4 style="color: #2e7d32; margin-bottom: 10px;">⏰ Tiempo de Respuesta Estimado</h4>
            <p style="color: #388e3c; margin: 0;">
              ${data.priority === 'Urgente' ? 'Menos de 2 horas' : 
                data.priority === 'Alta' ? '2-6 horas' : 
                data.priority === 'Media' ? '6-24 horas' : '24-48 horas'}
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://herobudget.com/soporte" class="cta-button">
              📚 Consultar FAQ Mientras Tanto
            </a>
          </div>
        </div>
        
        <div class="footer">
          <p style="font-size: 14px; color: #666; margin-bottom: 15px;">
            Recibirás actualizaciones sobre tu ticket en <strong>${data.email}</strong>
          </p>
          <p style="font-size: 12px; color: #999;">
            🎫 Hero Budget Support - Siempre aquí para ayudarte
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};