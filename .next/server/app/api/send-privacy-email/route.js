"use strict";(()=>{var e={};e.id=767,e.ids=[767],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},665:e=>{e.exports=require("dns")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},2615:e=>{e.exports=require("http")},8791:e=>{e.exports=require("https")},8216:e=>{e.exports=require("net")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},2452:e=>{e.exports=require("tls")},7360:e=>{e.exports=require("url")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},5025:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>v,patchFetch:()=>h,requestAsyncStorage:()=>c,routeModule:()=>m,serverHooks:()=>x,staticGenerationAsyncStorage:()=>g});var i={};t.r(i),t.d(i,{POST:()=>l});var s=t(9303),o=t(8716),a=t(670),n=t(7070),d=t(5245);let p=()=>d.createTransport({service:"gmail",auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD}}),u=e=>{let r={low:"\uD83D\uDFE2",medium:"\uD83D\uDFE1",high:"\uD83D\uDD34"},t={low:"Baja",medium:"Media",high:"Alta"};return{subject:`[PRIVACIDAD ${r[e.priority]}] ${e.topic} - ${e.name}`,html:`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #8b5cf6, #3b82f6); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">Hero Budget - Consulta de Privacidad</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #374151; margin-top: 0;">Informaci\xf3n del Contacto</h2>
          <p><strong>Nombre:</strong> ${e.name}</p>
          <p><strong>Email:</strong> ${e.email}</p>
          <p><strong>Tema:</strong> ${e.topic}</p>
          <p><strong>Prioridad:</strong> ${r[e.priority]} ${t[e.priority]}</p>
        </div>
        
        <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
          <div style="white-space: pre-wrap; line-height: 1.6; color: #4b5563;">
${e.message}
          </div>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e;">
            <strong>Recordatorio:</strong> Esta es una consulta de privacidad y debe ser respondida dentro del tiempo establecido seg\xfan la prioridad (Alta: 24h, Media: 48h, Baja: 72h).
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
          <p>Hero Budget - Sistema de Gesti\xf3n de Privacidad</p>
          <p>Este email fue generado autom\xe1ticamente desde ${process.env.APP_URL}</p>
        </div>
      </div>
    `,text:`
Hero Budget - Consulta de Privacidad

Informaci\xf3n del Contacto:
- Nombre: ${e.name}
- Email: ${e.email}
- Tema: ${e.topic}
- Prioridad: ${t[e.priority]}

Mensaje:
${e.message}

---
Este email fue generado autom\xe1ticamente desde Hero Budget.
    `}};async function l(e){try{if(!process.env.GMAIL_USER||!process.env.GMAIL_APP_PASSWORD||!process.env.ADMIN_EMAIL)return n.NextResponse.json({error:"Configuraci\xf3n de email no disponible"},{status:500});let r=await e.json();if(!r.name||!r.email||!r.topic||!r.message)return n.NextResponse.json({error:"Faltan campos requeridos"},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email))return n.NextResponse.json({error:"Formato de email inv\xe1lido"},{status:400});let t=p();await t.verify();let i=u(r),s={from:`"${process.env.APP_NAME}" <${process.env.GMAIL_USER}>`,to:process.env.ADMIN_EMAIL,replyTo:r.email,subject:i.subject,html:i.html,text:i.text},o=await t.sendMail(s);return n.NextResponse.json({success:!0,message:"Consulta de privacidad enviada exitosamente",messageId:o.messageId})}catch(e){return n.NextResponse.json({error:"Error interno del servidor al enviar email",details:void 0},{status:500})}}let m=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/send-privacy-email/route",pathname:"/api/send-privacy-email",filename:"route",bundlePath:"app/api/send-privacy-email/route"},resolvedPagePath:"/Users/usuario/Documents/PROYECTOS/herobudgetflutter/hero_budget/herobudget-nextjs/app/api/send-privacy-email/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:x}=m,v="/api/send-privacy-email/route";function h(){return(0,a.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:g})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[276,770],()=>t(5025));module.exports=i})();