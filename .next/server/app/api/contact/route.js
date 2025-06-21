"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},665:e=>{e.exports=require("dns")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},2615:e=>{e.exports=require("http")},8791:e=>{e.exports=require("https")},8216:e=>{e.exports=require("net")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},2452:e=>{e.exports=require("tls")},7360:e=>{e.exports=require("url")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},4039:(e,o,t)=>{t.r(o),t.d(o,{originalPathname:()=>v,patchFetch:()=>h,requestAsyncStorage:()=>x,routeModule:()=>u,serverHooks:()=>b,staticGenerationAsyncStorage:()=>m});var i={};t.r(i),t.d(i,{GET:()=>g,POST:()=>f});var r=t(9303),a=t(8716),s=t(670),n=t(7070),d=t(6119);let p=`
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
`,l=e=>`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Mensaje de Contacto - Hero Budget</title>
      ${p}
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🦸 Hero Budget</div>
          <div class="tagline">Tu H\xe9roe Financiero Personal</div>
        </div>
        
        <div class="content">
          <h1 class="title">📧 Nuevo Mensaje de Contacto</h1>
          <p class="subtitle">Has recibido un nuevo mensaje desde el formulario de contacto del sitio web.</p>
          
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">👤 Nombre:</span>
              <span class="info-value">${e.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">✉️ Email:</span>
              <span class="info-value">${e.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📋 Asunto:</span>
              <span class="info-value">${e.subject}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📅 Fecha:</span>
              <span class="info-value">${new Date().toLocaleString("es-ES")}</span>
            </div>
          </div>
          
          <h3 style="margin-bottom: 15px; color: #333;">💬 Mensaje:</h3>
          <div class="message-box">${e.message}</div>
          
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            <strong>Acci\xf3n requerida:</strong> Responde a este mensaje contactando directamente a ${e.email}
          </p>
        </div>
        
        <div class="footer">
          <p class="footer-text">
            Este email fue generado autom\xe1ticamente desde el sistema de contacto de Hero Budget.
          </p>
          <p style="font-size: 12px; color: #999;">
            🦸 Hero Budget - Gestiona tus finanzas como un h\xe9roe
          </p>
        </div>
      </div>
    </body>
    </html>
  `;var c=t(5718);async function f(e){try{let o=await e.json();if(!("string"==typeof o.name&&o.name.trim().length>0&&"string"==typeof o.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email))||"string"!=typeof o.subject||!(o.subject.trim().length>0)||"string"!=typeof o.message||!(o.message.trim().length>0))return n.NextResponse.json({success:!1,error:"Datos inv\xe1lidos. Verifica que todos los campos est\xe9n completos y el email sea v\xe1lido."},{status:400});let t={name:o.name.trim(),email:o.email.trim().toLowerCase(),subject:o.subject.trim(),message:o.message.trim()},i=l(t),r=(0,c._)(t),a=await (0,d.C)({to:process.env.ADMIN_EMAIL,subject:`[Hero Budget] Nuevo mensaje de contacto: ${t.subject}`,html:i}),s=await (0,d.C)({to:t.email,subject:"✅ Hemos recibido tu mensaje - Hero Budget",html:r});if(!a||!s)return n.NextResponse.json({success:!1,error:"Error interno del servidor. Por favor, intenta de nuevo m\xe1s tarde."},{status:500});return n.NextResponse.json({success:!0,message:"Mensaje enviado correctamente. Te responderemos pronto."},{status:200})}catch(e){return n.NextResponse.json({success:!1,error:"Error interno del servidor. Por favor, intenta de nuevo m\xe1s tarde."},{status:500})}}async function g(){return n.NextResponse.json({error:"M\xe9todo no permitido"},{status:405})}let u=new r.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"/Users/usuario/Documents/PROYECTOS/herobudgetflutter/hero_budget/herobudget-nextjs/app/api/contact/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:x,staticGenerationAsyncStorage:m,serverHooks:b}=u,v="/api/contact/route";function h(){return(0,s.patchFetch)({serverHooks:b,staticGenerationAsyncStorage:m})}},6119:(e,o,t)=>{t.d(o,{C:()=>a});var i=t(5245);let r=()=>{if(!process.env.GMAIL_USER||!process.env.GMAIL_APP_PASSWORD)throw Error("Gmail credentials not configured in environment variables");let e={host:"smtp.gmail.com",port:587,secure:!1,auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD},tls:{rejectUnauthorized:!1}};return i.createTransport(e)},a=async e=>{try{let o;o=r();let t={from:`"${process.env.APP_NAME}" <${process.env.GMAIL_USER}>`,to:e.to,subject:e.subject,html:e.html,text:e.text||""};return await o.sendMail(t),!0}catch(e){return!1}}},5718:(e,o,t)=>{t.d(o,{A:()=>r,_:()=>i});let i=e=>`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmaci\xf3n de Mensaje - Hero Budget</title>
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
          <div class="tagline">Tu H\xe9roe Financiero Personal</div>
        </div>
        
        <div class="content">
          <div class="success-icon">✅</div>
          <h1 class="title">\xa1Mensaje Recibido!</h1>
          <p style="font-size: 16px; color: #666; margin-bottom: 30px;">
            Hola <strong>${e.name}</strong>, hemos recibido tu mensaje correctamente.
          </p>
          
          <div class="info-card">
            <p style="margin-bottom: 15px;"><strong>📋 Resumen de tu consulta:</strong></p>
            <p style="margin-bottom: 10px;"><strong>Asunto:</strong> ${e.subject}</p>
            <p style="margin-bottom: 10px;"><strong>Fecha:</strong> ${new Date().toLocaleString("es-ES")}</p>
            <p><strong>Email de contacto:</strong> ${e.email}</p>
          </div>
          
          <p style="margin: 20px 0; color: #666;">
            Nuestro equipo de soporte revisar\xe1 tu mensaje y te responderemos en un plazo m\xe1ximo de 24 horas.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://herobudget.com/soporte" class="cta-button">
              🎯 Visitar Centro de Ayuda
            </a>
          </div>
          
          <div style="background: #fff3e0; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="font-size: 14px; color: #f57c00; margin: 0;">
              <strong>💡 Tip:</strong> Mientras esperas nuestra respuesta, puedes consultar nuestras FAQ donde resolvemos las dudas m\xe1s comunes.
            </p>
          </div>
        </div>
        
        <div class="footer">
          <p class="footer-text">
            Gracias por confiar en Hero Budget para gestionar tus finanzas.
          </p>
          <p style="font-size: 12px; color: #999;">
            🦸 Hero Budget - Tu compa\xf1ero financiero de confianza
          </p>
        </div>
      </div>
    </body>
    </html>
  `,r=e=>{let o="Alta"===e.priority||"Urgente"===e.priority?"priority-high":"Media"===e.priority?"priority-medium":"priority-low";return`
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
            <span class="priority-badge ${o}">Prioridad ${e.priority}</span>
          </div>
          
          <div class="info-card">
            <div class="info-row">
              <span class="info-label">👤 Nombre:</span>
              <span class="info-value">${e.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">✉️ Email:</span>
              <span class="info-value">${e.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📂 Categor\xeda:</span>
              <span class="info-value">${e.category}</span>
            </div>
            <div class="info-row">
              <span class="info-label">⚡ Prioridad:</span>
              <span class="info-value">${e.priority}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📱 Dispositivo:</span>
              <span class="info-value">${e.device||"No especificado"}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📋 Versi\xf3n:</span>
              <span class="info-value">${e.version||"No especificada"}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📅 Fecha:</span>
              <span class="info-value">${new Date().toLocaleString("es-ES")}</span>
            </div>
          </div>
          
          <h3 style="margin-bottom: 15px; color: #333;">📝 Asunto:</h3>
          <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            ${e.subject}
          </div>
          
          <h3 style="margin-bottom: 15px; color: #333;">📄 Descripci\xf3n del Problema:</h3>
          <div class="message-box">${e.description}</div>
          
          ${e.steps?`
            <h3 style="margin-bottom: 15px; color: #333;">🔧 Pasos para Reproducir:</h3>
            <div class="message-box">${e.steps}</div>
          `:""}
        </div>
        
        <div class="footer">
          <p style="font-size: 14px; color: #666; margin-bottom: 15px;">
            <strong>Acci\xf3n requerida:</strong> Revisar y responder al ticket con prioridad ${e.priority}
          </p>
          <p style="font-size: 12px; color: #999;">
            🎫 Sistema de Tickets - Hero Budget Support
          </p>
        </div>
      </div>
    </body>
    </html>
  `}}};var o=require("../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),i=o.X(0,[276,770],()=>t(4039));module.exports=i})();