(this.webpackJsonpblogger=this.webpackJsonpblogger||[]).push([[8],{131:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(7),l=n(16),i=n(0),c=n(35),s=n(19),u=n(2),d={container:{flexDirection:"column",display:"flex",width:"60%",margin:"auto"},infoText:{fontSize:"18px",color:"grey"},labelText:{fontSize:"18px",marginTop:"2rem",color:"#002868"},inputBox:{padding:"1rem",borderRadius:"10px",outline:"none",border:"solid thin #D6D6D6"},createButton:{marginTop:"1rem",padding:"1rem",backgroundColor:"#0364FF",color:"white",outline:"none",borderRadius:"10px",border:"none",cursor:"pointer"},googleButton:{marginTop:"0.5rem",padding:"1rem",outline:"none",borderRadius:"10px",border:"none",cursor:"pointer"},errorCode:{margin:"1rem auto 0 auto",color:"#FE4747",userSelect:"none",height:"1.5rem",fontSize:"13px"}};t.default=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],b=Object(i.useState)(""),p=Object(l.a)(b,2),j=p[0],x=p[1],g=Object(i.useState)(""),h=Object(l.a)(g,2),m=h[0],f=h[1],O=function(){var e=Object(a.a)(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(""),e.next=4,Object(c.a)(t,n);case 4:r=e.sent,a=r.data.token,Object(s.c)("auth",a),window.location.href="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),401===e.t0.response.status&&f("Invalid email or password");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{style:d.container,children:[Object(u.jsx)("label",{style:d.infoText,children:"Hello User !"}),Object(u.jsx)("h1",{style:{color:"#424242"},children:"Sign in to Bloggr"}),Object(u.jsx)("label",{style:d.infoText,children:"Sign in to create your blog"}),Object(u.jsx)("label",{style:d.labelText,children:"Email"}),Object(u.jsx)("input",{type:"email",style:d.inputBox,placeholder:"name@email.com",className:"font",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("label",{style:d.labelText,children:"Password"}),Object(u.jsx)("input",{type:"password",style:d.inputBox,className:"font",placeholder:"Your password",onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("label",{style:d.errorCode,children:m}),Object(u.jsx)("button",{style:d.createButton,className:"font",onClick:function(){return O(n,j)},children:"Sign in"})]})})}}}]);
//# sourceMappingURL=8.12858311.chunk.js.map