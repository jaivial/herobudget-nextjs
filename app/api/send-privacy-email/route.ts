import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * API Route para envío de emails de consultas de privacidad
 * Utiliza la configuración de Gmail proporcionada en .env.local
 */

interface PrivacyEmailRequest {
  name: string;
  email: string;
  topic: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
}

// Configuración del transporter de nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Función para generar el contenido del email
const generateEmailContent = (data: PrivacyEmailRequest) => {
  const priorityEmoji = {
    low: '🟢',
    medium: '🟡', 
    high: '🔴'
  };

  const priorityText = {
    low: 'Baja',
    medium: 'Media',
    high: 'Alta'
  };

  return {
    subject: `[PRIVACIDAD ${priorityEmoji[data.priority]}] ${data.topic} - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #8b5cf6, #3b82f6); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">Hero Budget - Consulta de Privacidad</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #374151; margin-top: 0;">Información del Contacto</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Tema:</strong> ${data.topic}</p>
          <p><strong>Prioridad:</strong> ${priorityEmoji[data.priority]} ${priorityText[data.priority]}</p>
        </div>
        
        <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
          <div style="white-space: pre-wrap; line-height: 1.6; color: #4b5563;">
${data.message}
          </div>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e;">
            <strong>Recordatorio:</strong> Esta es una consulta de privacidad y debe ser respondida dentro del tiempo establecido según la prioridad (Alta: 24h, Media: 48h, Baja: 72h).
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
          <p>Hero Budget - Sistema de Gestión de Privacidad</p>
          <p>Este email fue generado automáticamente desde ${process.env.APP_URL}</p>
        </div>
      </div>
    `,
    text: `
Hero Budget - Consulta de Privacidad

Información del Contacto:
- Nombre: ${data.name}
- Email: ${data.email}
- Tema: ${data.topic}
- Prioridad: ${priorityText[data.priority]}

Mensaje:
${data.message}

---
Este email fue generado automáticamente desde Hero Budget.
    `
  };
};

export async function POST(request: NextRequest) {
  try {
    // Validar que las variables de entorno estén configuradas
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.ADMIN_EMAIL) {
      console.error('Variables de entorno de email no configuradas');
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      );
    }

    // Parsear y validar el cuerpo de la petición
    const body: PrivacyEmailRequest = await request.json();
    
    // Validaciones básicas
    if (!body.name || !body.email || !body.topic || !body.message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Crear transporter
    const transporter = createTransporter();

    // Verificar conexión
    await transporter.verify();

    // Generar contenido del email
    const emailContent = generateEmailContent(body);

    // Configurar opciones del email
    const mailOptions = {
      from: `"${process.env.APP_NAME}" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: body.email,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    };

    // Enviar email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email de privacidad enviado:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Consulta de privacidad enviada exitosamente',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error al enviar email de privacidad:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor al enviar email',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}