(this.webpackJsonpblogger=this.webpackJsonpblogger||[]).push([[6],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return V}));var a,c,n,o,i=r(3),l=r.n(i),s=r(7),b=r(16),d=r(0),j=r.n(d),u=r(25),O=r(104),x=r.n(O),f=r(109),h=r(103),m=r(111),p=r(112),g=r(130),v=(r(32),r(129)),y=r(2),k=j.a.forwardRef((function(e,t){var r=e.className,c=e.active,n=e.reversed,o=Object(g.a)(e,["className","active","reversed"]);return Object(y.jsx)("span",Object(u.a)(Object(u.a)({},o),{},{ref:t,className:Object(v.b)(r,Object(v.a)(a||(a=Object(p.a)(["\n          cursor: pointer;\n          color: ",";\n        "])),n?c?"white":"#aaa":c?"black":"#ccc"))}))})),w=j.a.forwardRef((function(e,t){var r=e.className,a=Object(g.a)(e,["className"]);return Object(y.jsx)("span",Object(u.a)(Object(u.a)({},a),{},{ref:t,className:Object(v.b)("material-icons",r,Object(v.a)(c||(c=Object(p.a)(["\n        font-size: 18px;\n        vertical-align: text-bottom;\n      "]))))}))})),N=j.a.forwardRef((function(e,t){var r=e.className,a=Object(g.a)(e,["className"]);return Object(y.jsx)("div",Object(u.a)(Object(u.a)({},a),{},{ref:t,className:Object(v.b)(r,Object(v.a)(n||(n=Object(p.a)(["\n        & > * {\n          display: inline-block;\n        }\n\n        & > * + * {\n          margin-left: 15px;\n        }\n      "]))))}))})),C=j.a.forwardRef((function(e,t){var r=e.className,a=Object(g.a)(e,["className"]);return Object(y.jsx)(N,Object(u.a)(Object(u.a)({},a),{},{ref:t,className:Object(v.b)(r,Object(v.a)(o||(o=Object(p.a)(["\n        position: relative;\n        padding: 1px 18px 17px;\n        margin: 0 -20px;\n        border-bottom: 2px solid #eee;\n        margin-bottom: 20px;\n      "]))))}))})),F={"mod+b":"bold","mod+i":"italic","mod+u":"underline","mod+`":"code"},A=["numbered-list","bulleted-list"],q=function(e,t){D(e,t)?h.a.removeMark(e,t):h.a.addMark(e,t,!0)},_=function(e,t){var r=h.a.nodes(e,{match:function(e){return e.type===t}});return!!Object(b.a)(r,1)[0]},D=function(e,t){var r=h.a.marks(e);return!!r&&!0===r[t]},S=function(e){var t=e.attributes,r=e.children;switch(e.element.type){case"block-quote":return Object(y.jsx)("blockquote",Object(u.a)(Object(u.a)({},t),{},{children:r}));case"bulleted-list":return Object(y.jsx)("ul",Object(u.a)(Object(u.a)({},t),{},{children:r}));case"heading-one":return Object(y.jsx)("h1",Object(u.a)(Object(u.a)({},t),{},{children:r}));case"heading-two":return Object(y.jsx)("h2",Object(u.a)(Object(u.a)({},t),{},{children:r}));case"list-item":return Object(y.jsx)("li",Object(u.a)(Object(u.a)({},t),{},{children:r}));case"numbered-list":return Object(y.jsx)("ol",Object(u.a)(Object(u.a)({},t),{},{children:r}));default:return Object(y.jsx)("p",Object(u.a)(Object(u.a)({},t),{},{children:r}))}},M=function(e){var t=e.attributes,r=e.children,a=e.leaf;return a.bold&&(r=Object(y.jsx)("strong",{children:r})),a.code&&(r=Object(y.jsx)("code",{children:r})),a.italic&&(r=Object(y.jsx)("em",{children:r})),a.underline&&(r=Object(y.jsx)("u",{children:r})),Object(y.jsx)("span",Object(u.a)(Object(u.a)({},t),{},{children:r}))},R=function(e){var t=e.format,r=e.icon,a=Object(f.c)();return Object(y.jsx)(k,{active:_(a,t),onMouseDown:function(e){e.preventDefault(),function(e,t){var r=_(e,t),a=A.includes(t);if(h.h.unwrapNodes(e,{match:function(e){return A.includes(e.type)},split:!0}),h.h.setNodes(e,{type:r?"paragraph":a?"list-item":t}),!r&&a){var c={type:t,children:[]};h.h.wrapNodes(e,c)}}(a,t)},children:Object(y.jsx)(w,{children:r})})},T=function(e){var t=e.format,r=e.icon,a=Object(f.c)();return Object(y.jsx)(k,{active:D(a,t),onMouseDown:function(e){e.preventDefault(),q(a,t)},children:Object(y.jsx)(w,{children:r})})},E=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}],L=function(e){var t=Object(d.useCallback)((function(e){return Object(y.jsx)(S,Object(u.a)({},e))}),[]),r=Object(d.useCallback)((function(e){return Object(y.jsx)(M,Object(u.a)({},e))}),[]),a=Object(d.useMemo)((function(){return Object(m.a)(Object(f.d)(Object(h.i)()))}),[]);return Object(y.jsxs)(f.b,{editor:a,value:e.value||E,onChange:function(t){return e.setValue(t)},children:[Object(y.jsxs)(C,{children:[Object(y.jsx)(T,{format:"bold",icon:"format_bold"}),Object(y.jsx)(T,{format:"italic",icon:"format_italic"}),Object(y.jsx)(T,{format:"underline",icon:"format_underlined"}),Object(y.jsx)(T,{format:"code",icon:"code"}),Object(y.jsx)(R,{format:"heading-one",icon:"looks_one"}),Object(y.jsx)(R,{format:"heading-two",icon:"looks_two"}),Object(y.jsx)(R,{format:"block-quote",icon:"format_quote"}),Object(y.jsx)(R,{format:"numbered-list",icon:"format_list_numbered"}),Object(y.jsx)(R,{format:"bulleted-list",icon:"format_list_bulleted"})]}),Object(y.jsx)(f.a,{renderElement:t,renderLeaf:r,placeholder:"Create your blog here!",spellCheck:!0,autoFocus:!0,onKeyDown:function(e){for(var t in F){if(x()(t,e))e.preventDefault(),q(a,F[t])}}})]})},B=r(21),J={container:{display:"flex",flexDirection:"column"},row:{display:"flex",alignItems:"center",marginBottom:"1rem",backgroundColor:"#FAFAFA",width:"max-content",padding:"1rem"},blogName:{width:"20em",marginLeft:"1rem",outline:"none",border:"solid thin #acacac",padding:"0.4rem",borderRadius:"2px",backgroundColor:"#FAFAFA"},createButton:{padding:"1rem 2rem",cursor:"pointer",border:"none",marginLeft:"auto"},errorCode:{padding:"0.7rem 0",color:"#FE4747",marginLeft:"auto"},titleError:{padding:"0 1rem",color:"#FE4747"}};function V(e){var t=Object(d.useState)(z),r=Object(b.a)(t,2),a=r[0],c=r[1],n=Object(d.useState)(""),o=Object(b.a)(n,2),i=o[0],j=o[1],u=Object(d.useState)(""),O=Object(b.a)(u,2),x=O[0],f=O[1],h=function(){var e=Object(s.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.stringify(t),e.next=4,Object(B.a)(a,r);case 4:window.location.href="/",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{style:J.container,children:[Object(y.jsxs)("div",{style:J.row,children:[Object(y.jsx)("label",{children:"Title"}),Object(y.jsx)("input",{type:"text",style:J.blogName,onChange:function(e){return j(e.target.value)},className:"font"})]}),Object(y.jsx)("div",{style:{backgroundColor:"#FAFAFA",padding:"1rem 3rem"},children:Object(y.jsx)(L,{value:a,setValue:c})}),Object(y.jsx)("label",{style:J.errorCode,children:x}),Object(y.jsx)("button",{className:"font",style:J.createButton,onClick:function(){a[0].children[0].text.length>0&&h(a,i)},children:"Create"})]})}var z=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}]}}]);
//# sourceMappingURL=6.0f64bd3a.chunk.js.map