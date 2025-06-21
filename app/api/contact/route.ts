/**
 * Contact API Route
 * Endpoint para manejar el envío de emails del formulario de contacto
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, ContactFormData } from '@/lib/email';
import { createContactEmailTemplate } from '@/lib/emailTemplates';
import { createContactConfirmationTemplate } from '@/lib/emailTemplatesPart2';

/**
 * Función para validar los datos del formulario de contacto
 * @param data - Datos recibidos del formulario
 * @returns boolean - true si los datos son válidos
 */
function validateContactData(data: any): data is ContactFormData {
  return (
    typeof data.name === 'string' && data.name.trim().length > 0 &&
    typeof data.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.subject === 'string' && data.subject.trim().length > 0 &&
    typeof data.message === 'string' && data.message.trim().length > 0
  );
}

/**
 * Función para sanitizar los datos de entrada
 * @param data - Datos a sanitizar
 * @returns ContactFormData - Datos sanitizados
 */
function sanitizeContactData(data: ContactFormData): ContactFormData {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    subject: data.subject.trim(),
    message: data.message.trim()
  };
}

/**
 * Handler para requests POST al endpoint de contacto
 * Procesa el formulario y envía emails tanto al admin como de confirmación al usuario
 */
export async function POST(request: NextRequest) {
  try {
    // Obtener datos del request
    const body = await request.json();
    
    // Validar datos
    if (!validateContactData(body)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Datos inválidos. Verifica que todos los campos estén completos y el email sea válido.' 
        },
        { status: 400 }
      );
    }

    // Sanitizar datos
    const contactData = sanitizeContactData(body);
    
    // Crear templates de email
    const adminEmailHtml = createContactEmailTemplate(contactData);
    const userConfirmationHtml = createContactConfirmationTemplate(contactData);
    
    // Enviar email al admin
    const adminEmailSent = await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `[Hero Budget] Nuevo mensaje de contacto: ${contactData.subject}`,
      html: adminEmailHtml
    });

    // Enviar email de confirmación al usuario
    const userEmailSent = await sendEmail({
      to: contactData.email,
      subject: '✅ Hemos recibido tu mensaje - Hero Budget',
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
        message: 'Mensaje enviado correctamente. Te responderemos pronto.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en /api/contact:', error);
    
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