/**
 * Email Configuration and Service
 * Configuración y servicio de correo electrónico usando nodemailer con Gmail
 */

import nodemailer from 'nodemailer';

/**
 * Interface para datos de email genérico
 */
interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Interface para datos de formulario de contacto
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Interface para datos de formulario de ticket
 */
export interface TicketFormData {
  name: string;
  email: string;
  priority: 'Baja' | 'Media' | 'Alta' | 'Urgente';
  category: string;
  subject: string;
  description: string;
  device?: string;
  version?: string;
  steps?: string;
}

/**
 * Configuración del transportador de nodemailer para Gmail
 * Utiliza las credenciales almacenadas en variables de entorno
 * Incluye fallback para modo desarrollo
 */
const createTransporter = () => {
  // Verificar que las variables de entorno estén configuradas
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured in environment variables');
  }

  // Configuración principal para Gmail
  const gmailConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  };

  // En desarrollo, si Gmail falla, usar configuración alternativa
  if (process.env.NODE_ENV === 'development') {
    // Configuración alternativa con Ethereal para pruebas
    try {
      return nodemailer.createTransport(gmailConfig);
    } catch (error) {
      console.warn('Gmail failed, using test configuration');
      // Crear cuenta de prueba temporal para desarrollo
      return nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'ethereal.user@ethereal.email',
          pass: 'ethereal.pass'
        }
      });
    }
  }

  return nodemailer.createTransport(gmailConfig);
};

/**
 * Función genérica para enviar emails
 * @param emailData - Datos del email a enviar
 * @returns Promise<boolean> - true si el envío fue exitoso
 */
const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    let transporter;
    
    // En desarrollo, usar transportador de prueba si Gmail falla
    if (process.env.NODE_ENV === 'development') {
      try {
        transporter = createTransporter();
        // Probar la conexión
        await transporter.verify();
      } catch (gmailError) {
        console.warn('Gmail authentication failed, using test account');
        console.warn('Gmail error:', gmailError instanceof Error ? gmailError.message : gmailError);
        
        // Crear cuenta de prueba
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
      }
    } else {
      transporter = createTransporter();
    }
    
    const mailOptions = {
      from: `"${process.env.APP_NAME}" <${process.env.GMAIL_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text || '',
    };

    const info = await transporter.sendMail(mailOptions);
    
    // En desarrollo, mostrar enlace de previsualización
    if (process.env.NODE_ENV === 'development' && nodemailer.getTestMessageUrl(info)) {
      console.log('📧 Email preview URL:', nodemailer.getTestMessageUrl(info));
    }
    
    console.log('✅ Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error enviando email:', error);
    return false;
  }
};

/**
 * Exportamos la función de envío y las interfaces
 */
export { sendEmail };
export default sendEmail;