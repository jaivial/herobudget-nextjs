/**
 * Ticket API Route
 * Endpoint para manejar el envío de emails del formulario de tickets de soporte
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, TicketFormData } from '@/lib/email';
import { createTicketEmailTemplate } from '@/lib/emailTemplatesPart2';
import { createTicketConfirmationTemplate } from '@/lib/emailTemplatesPart3';

/**
 * Función para validar los datos del formulario de ticket
 * @param data - Datos recibidos del formulario
 * @returns boolean - true si los datos son válidos
 */
function validateTicketData(data: any): data is TicketFormData {
  const validPriorities = ['Baja', 'Media', 'Alta', 'Urgente'];
  
  return (
    typeof data.name === 'string' && data.name.trim().length > 0 &&
    typeof data.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.priority === 'string' && validPriorities.includes(data.priority) &&
    typeof data.category === 'string' && data.category.trim().length > 0 &&
    typeof data.subject === 'string' && data.subject.trim().length > 0 &&
    typeof data.description === 'string' && data.description.trim().length > 0
  );
}

/**
 * Función para sanitizar los datos de entrada
 * @param data - Datos a sanitizar
 * @returns TicketFormData - Datos sanitizados
 */
function sanitizeTicketData(data: TicketFormData): TicketFormData {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    priority: data.priority,
    category: data.category.trim(),
    subject: data.subject.trim(),
    description: data.description.trim(),
    device: data.device?.trim() || undefined,
    version: data.version?.trim() || undefined,
    steps: data.steps?.trim() || undefined
  };
}

/**
 * Handler para requests POST al endpoint de tickets
 * Procesa el formulario y envía emails tanto al admin como de confirmación al usuario
 */
export async function POST(request: NextRequest) {
  try {
    // Obtener datos del request
    const body = await request.json();
    
    // Validar datos
    if (!validateTicketData(body)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Datos inválidos. Verifica que todos los campos requeridos estén completos y sean válidos.' 
        },
        { status: 400 }
      );
    }

    // Sanitizar datos
    const ticketData = sanitizeTicketData(body);
    
    // Crear templates de email
    const adminEmailHtml = createTicketEmailTemplate(ticketData);
    const userConfirmationHtml = createTicketConfirmationTemplate(ticketData);
    
    // Definir asunto basado en prioridad
    const priorityPrefix = ticketData.priority === 'Urgente' ? '🚨 URGENTE' : 
                          ticketData.priority === 'Alta' ? '🔴 ALTA' :
                          ticketData.priority === 'Media' ? '🟡 MEDIA' : '🟢 BAJA';
    
    // Enviar email al admin
    const adminEmailSent = await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `[Hero Budget] ${priorityPrefix} - Nuevo ticket: ${ticketData.subject}`,
      html: adminEmailHtml
    });

    // Enviar email de confirmación al usuario
    const userEmailSent = await sendEmail({
      to: ticketData.email,
      subject: '🎫 Ticket creado correctamente - Hero Budget Support',
      html: userConfirmationHtml
    });

    // Verificar que ambos emails se enviaron correctamente
    if (!adminEmailSent || !userEmailSent) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Error interno del servidor. Por favor, intenta de nuevo más tarde.' 
        },
        { status: 500 }
      );
    }

    // Respuesta exitosa
    return NextResponse.json(
      { 
        success: true, 
        message: 'Ticket creado correctamente. Hemos enviado una confirmación a tu email.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en /api/ticket:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error interno del servidor. Por favor, intenta de nuevo más tarde.' 
      },
      { status: 500 }
    );
  }
}

/**
 * Handler para requests GET - método no permitido
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  );
}