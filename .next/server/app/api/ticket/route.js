"use strict";(()=>{var e={};e.id=264,e.ids=[264],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},665:e=>{e.exports=require("dns")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},2615:e=>{e.exports=require("http")},8791:e=>{e.exports=require("https")},8216:e=>{e.exports=require("net")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},2452:e=>{e.exports=require("tls")},7360:e=>{e.exports=require("url")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},3992:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>b,patchFetch:()=>v,requestAsyncStorage:()=>m,routeModule:()=>u,serverHooks:()=>f,staticGenerationAsyncStorage:()=>x});var i={};o.r(i),o.d(i,{GET:()=>g,POST:()=>l});var r=o(9303),s=o(8716),a=o(670),n=o(7070),d=o(6119),p=o(5718);let c=e=>{let t=`HB-${Date.now().toString().slice(-6)}`;return`
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
          <div style="font-size: 14px; opacity: 0.9;">Sistema de Soporte T\xe9cnico</div>
        </div>
        
        <div class="content">
          <h1 class="title">✅ Ticket Creado Exitosamente</h1>
          <p style="font-size: 16px; color: #666; margin-bottom: 30px;">
            Hola <strong>${e.name}</strong>, hemos recibido tu solicitud de soporte t\xe9cnico.
          </p>
          
          <div class="ticket-id">
            <div style="font-size: 14px; color: #666; margin-bottom: 10px;">Tu n\xfamero de ticket es:</div>
            <div class="ticket-number">#${t}</div>
            <div style="font-size: 12px; color: #999;">Guarda este n\xfamero para futuras consultas</div>
          </div>
          
          <div class="info-card">
            <p style="margin-bottom: 15px;"><strong>📋 Resumen de tu ticket:</strong></p>
            <p style="margin-bottom: 10px;"><strong>Asunto:</strong> ${e.subject}</p>
            <p style="margin-bottom: 10px;"><strong>Categor\xeda:</strong> ${e.category}</p>
            <p style="margin-bottom: 10px;"><strong>Prioridad:</strong> 
              <span class="priority-${e.priority.toLowerCase()}">${e.priority}</span>
            </p>
            <p style="margin-bottom: 10px;"><strong>Fecha de creaci\xf3n:</strong> ${new Date().toLocaleString("es-ES")}</p>
            <p><strong>Email de contacto:</strong> ${e.email}</p>
          </div>
          
          <div class="timeline">
            <h3 style="margin-bottom: 20px; color: #333;">📍 Estado del Ticket</h3>
            <div class="timeline-item">
              <div class="timeline-icon">✓</div>
              <div class="timeline-text">
                <strong>Ticket recibido</strong> - ${new Date().toLocaleString("es-ES")}
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon" style="background: #ffab00;">⏳</div>
              <div class="timeline-text">
                <strong>En revisi\xf3n</strong> - Nuestro equipo est\xe1 analizando tu solicitud
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
              ${"Urgente"===e.priority?"Menos de 2 horas":"Alta"===e.priority?"2-6 horas":"Media"===e.priority?"6-24 horas":"24-48 horas"}
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
            Recibir\xe1s actualizaciones sobre tu ticket en <strong>${e.email}</strong>
          </p>
          <p style="font-size: 12px; color: #999;">
            🎫 Hero Budget Support - Siempre aqu\xed para ayudarte
          </p>
        </div>
      </div>
    </body>
    </html>
  `};async function l(e){try{let t=await e.json();if(!("string"==typeof t.name&&t.name.trim().length>0&&"string"==typeof t.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)&&"string"==typeof t.priority&&["Baja","Media","Alta","Urgente"].includes(t.priority))||"string"!=typeof t.category||!(t.category.trim().length>0)||"string"!=typeof t.subject||!(t.subject.trim().length>0)||"string"!=typeof t.description||!(t.description.trim().length>0))return n.NextResponse.json({success:!1,error:"Datos inv\xe1lidos. Verifica que todos los campos requeridos est\xe9n completos y sean v\xe1lidos."},{status:400});let o={name:t.name.trim(),email:t.email.trim().toLowerCase(),priority:t.priority,category:t.category.trim(),subject:t.subject.trim(),description:t.description.trim(),device:t.device?.trim()||void 0,version:t.version?.trim()||void 0,steps:t.steps?.trim()||void 0},i=(0,p.A)(o),r=c(o),s="Urgente"===o.priority?"\uD83D\uDEA8 URGENTE":"Alta"===o.priority?"\uD83D\uDD34 ALTA":"Media"===o.priority?"\uD83D\uDFE1 MEDIA":"\uD83D\uDFE2 BAJA",a=await (0,d.C)({to:process.env.ADMIN_EMAIL,subject:`[Hero Budget] ${s} - Nuevo ticket: ${o.subject}`,html:i}),l=await (0,d.C)({to:o.email,subject:"\uD83C\uDFAB Ticket creado correctamente - Hero Budget Support",html:r});if(!a||!l)return n.NextResponse.json({success:!1,error:"Error interno del servidor. Por favor, intenta de nuevo m\xe1s tarde."},{status:500});return n.NextResponse.json({success:!0,message:"Ticket creado correctamente. Hemos enviado una confirmaci\xf3n a tu email."},{status:200})}catch(e){return n.NextResponse.json({success:!1,error:"Error interno del servidor. Por favor, intenta de nuevo m\xe1s tarde."},{status:500})}}async function g(){return n.NextResponse.json({error:"M\xe9todo no permitido"},{status:405})}let u=new r.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/ticket/route",pathname:"/api/ticket",filename:"route",bundlePath:"app/api/ticket/route"},resolvedPagePath:"/Users/usuario/Documents/PROYECTOS/herobudgetflutter/hero_budget/herobudget-nextjs/app/api/ticket/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:m,staticGenerationAsyncStorage:x,serverHooks:f}=u,b="/api/ticket/route";function v(){return(0,a.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:x})}},6119:(e,t,o)=>{o.d(t,{C:()=>s});var i=o(5245);let r=()=>{if(!process.env.GMAIL_USER||!process.env.GMAIL_APP_PASSWORD)throw Error("Gmail credentials not configured in environment variables");let e={host:"smtp.gmail.com",port:587,secure:!1,auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD},tls:{rejectUnauthorized:!1}};return i.createTransport(e)},s=async e=>{try{let t;t=r();let o={from:`"${process.env.APP_NAME}" <${process.env.GMAIL_USER}>`,to:e.to,subject:e.subject,html:e.html,text:e.text||""};return await t.sendMail(o),!0}catch(e){return!1}}},5718:(e,t,o)=>{o.d(t,{A:()=>r,_:()=>i});let i=e=>`
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
  `,r=e=>{let t="Alta"===e.priority||"Urgente"===e.priority?"priority-high":"Media"===e.priority?"priority-medium":"priority-low";return`
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
            <span class="priority-badge ${t}">Prioridad ${e.priority}</span>
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
  `}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),i=t.X(0,[276,770],()=>o(3992));module.exports=i})();