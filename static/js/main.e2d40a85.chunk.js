(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{101:function(e,t,n){e.exports={container:"color-picker_container__2Aslu"}},105:function(e,t,n){e.exports={container:"color-preview_container__1pBgZ"}},106:function(e,t,n){e.exports={container:"App_container__eSJ6i"}},115:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(0),s=n.n(a),r=n(35),o=n.n(r),l=(n(115),n(248),n(214),n(5)),c=n(11),h=n(23),p=n(39),d=Object(p.b)({name:"colorPicker",initialState:{hex:"#ffffff",rgb:{r:255,g:255,b:255,a:1},hsl:{h:250,s:0,l:1,a:1},hsv:{h:250,s:0,v:1,a:1},oldHue:250,source:"hsv"},reducers:{update:function(e,t){return Object(h.a)(Object(h.a)({},e),t.payload)}}}),b=Object(h.a)(Object(h.a)({},d),{},{selectors:{selectColor:function(e){return e.colorPicker}}}),u=n(101),x=n.n(u),g=n(1),f=n.n(g),v=n(60),j=n.n(v),w=n(102),y=n(103),O=n(109),C=n(107),k=n(36),m=n(38),S=n.n(m),A=n(108),E=n(22),I=n.n(E),N=function(e,t){switch(t){case"rgba":var n=e.rgb,i=n.r,a=n.g,s=n.b,r=n.a;return"rgba(".concat(i,",").concat(a,",").concat(s,",").concat(r,")");case"hsla":var o=e.hsl,l=o.h,c=o.s,h=o.l,p=o.a;return"hsla(".concat(l,", ").concat(c,", ").concat(h,", ").concat(p,")");default:return e.hex}},R=function(e){Object(O.a)(n,e);var t=Object(C.a)(n);function n(e){var i;return Object(w.a)(this,n),(i=t.call(this)).toggleViews=function(){"hex"===i.state.view?i.setState({view:"rgb"}):"rgb"===i.state.view?i.setState({view:"hsl"}):"hsl"===i.state.view&&(1===i.props.hsl.a?i.setState({view:"hex"}):i.setState({view:"rgb"}))},i.handleChange=function(e,t){e.hex?k.isValidHex(e.hex)&&i.props.onChange({hex:e.hex,source:"hex"},t):e.r||e.g||e.b?i.props.onChange({r:e.r||i.props.rgb.r,g:e.g||i.props.rgb.g,b:e.b||i.props.rgb.b,source:"rgb"},t):e.a?(e.a<0?e.a=0:e.a>1&&(e.a=1),i.props.onChange({h:i.props.hsl.h,s:i.props.hsl.s,l:i.props.hsl.l,a:Math.round(100*e.a)/100,source:"rgb"},t)):(e.h||e.s||e.l)&&("string"===typeof e.s&&e.s.includes("%")&&(e.s=e.s.replace("%","")),"string"===typeof e.l&&e.l.includes("%")&&(e.l=e.l.replace("%","")),1==e.s?e.s=.01:1==e.l&&(e.l=.01),i.props.onChange({h:e.h||i.props.hsl.h,s:Number(S()(e.s)?i.props.hsl.s:e.s),l:Number(S()(e.l)?i.props.hsl.l:e.l),source:"hsl"},t))},i.showHighlight=function(e){e.currentTarget.style.background="#eee"},i.hideHighlight=function(e){e.currentTarget.style.background="transparent"},i.copy=function(){switch(i.state.view){case"hex":return i.props.copy(N(i.props,"hex"));case"rgb":return i.props.copy(N(i.props,"rgba"));default:return i.props.copy(N(i.props,"hsla"))}},1!==e.hsl.a&&"hex"===e.view?i.state={view:"rgb"}:i.state={view:e.view},i}return Object(y.a)(n,[{key:"render",value:function(){var e,t=this,n=f()({default:{wrap:{paddingTop:"16px",display:"flex"},fields:{flex:"1",display:"flex"},field:{paddingLeft:"6px",width:"100%"},alpha:{paddingLeft:"6px",width:"100%"},toggle:{alignItems:"center",justifyContent:"flex-end",width:"80px",position:"relative",display:"flex"},icon:{marginLeft:"4px",marginTop:"12px",cursor:"pointer",position:"relative"},iconHighlight:{position:"absolute",width:"24px",height:"28px",background:"#eee",borderRadius:"4px",top:"10px",left:"12px",display:"none"},input:{fontSize:"11px",color:"#333",width:"100%",borderRadius:"2px",border:"none",boxShadow:"inset 0 0 0 1px #dadada",height:"21px",textAlign:"center"},label:{textTransform:"uppercase",fontSize:"11px",lineHeight:"11px",color:"#969696",textAlign:"center",display:"block",marginTop:"12px"},svg:{fill:"#333",width:"30px",height:"30px",border:"1px transparent solid",borderRadius:"5px"}},disableAlpha:{alpha:{display:"none"}}},this.props,this.state);return"hex"===this.state.view?e=Object(i.jsx)("div",{style:n.fields,className:"flexbox-fix",children:Object(i.jsx)("div",{style:n.field,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"hex",value:this.props.hex,onChange:this.handleChange})})}):"rgb"===this.state.view?e=Object(i.jsxs)("div",{style:n.fields,className:"flexbox-fix",children:[Object(i.jsx)("div",{style:n.field,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"r",value:this.props.rgb.r,onChange:this.handleChange})}),Object(i.jsx)("div",{style:n.field,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"g",value:this.props.rgb.g,onChange:this.handleChange})}),Object(i.jsx)("div",{style:n.field,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"b",value:this.props.rgb.b,onChange:this.handleChange})}),Object(i.jsx)("div",{style:n.alpha,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"a",value:this.props.rgb.a,arrowOffset:.01,onChange:this.handleChange})})]}):"hsl"===this.state.view&&(e=Object(i.jsxs)("div",{style:n.fields,className:"flexbox-fix",children:[Object(i.jsx)("div",{style:n.field,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"h",value:Math.round(this.props.hsl.h),onChange:this.handleChange})}),Object(i.jsx)("div",{style:n.field,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"s",value:"".concat(Math.round(100*this.props.hsl.s),"%"),onChange:this.handleChange})}),Object(i.jsx)("div",{style:n.field,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"l",value:"".concat(Math.round(100*this.props.hsl.l),"%"),onChange:this.handleChange})}),Object(i.jsx)("div",{style:n.alpha,children:Object(i.jsx)(l.EditableInput,{style:{input:n.input,label:n.label},label:"a",value:this.props.hsl.a,arrowOffset:.01,onChange:this.handleChange})})]})),Object(i.jsxs)("div",{style:n.wrap,className:"flexbox-fix",children:[e,Object(i.jsxs)("div",{style:n.toggle,children:[Object(i.jsx)(A.a,{size:22,onClick:this.copy}),Object(i.jsx)("div",{style:n.icon,onClick:this.toggleViews,ref:function(e){return t.icon=e},children:Object(i.jsx)(I.a,{style:n.svg,onMouseOver:this.showHighlight,onMouseEnter:this.showHighlight,onMouseOut:this.hideHighlight})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 1!==e.hsl.a&&"hex"===t.view?{view:"rgb"}:null}}]),n}(s.a.Component);R.defaultProps={view:"hex"};var H=R,T=function(){var e=f()({default:{picker:{width:"18px",height:"18px",borderRadius:"9px",transform:"translate(-6px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}}});return Object(i.jsx)("div",{style:e.picker})},P=function(){var e=f()({default:{picker:{width:"22px",height:"22px",borderRadius:"11px",boxShadow:"inset 0 0 0 1px #fff",transform:"translate(-6px, -6px)"}}});return Object(i.jsx)("div",{style:e.picker})},W=function(e){var t=e.width,n=e.onChange,a=e.disableAlpha,s=e.rgb,r=e.hsl,o=e.hsv,c=e.hex,h=e.renderers,p=e.styles,d=void 0===p?{}:p,b=e.copy,u=e.className,x=void 0===u?"":u,g=e.defaultView,v=f()(j()({default:{picker:{width:t,background:"#fff",borderRadius:"2px",boxShadow:"0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",boxSizing:"initial",minWidth:"330px",fontFamily:"Menlo"},saturation:{width:"100%",paddingBottom:"55%",position:"relative",borderRadius:"2px 2px 0 0",overflow:"hidden"},Saturation:{radius:"2px 2px 0 0"},body:{padding:"16px 16px 12px"},controls:{display:"flex"},color:{width:"32px"},swatch:{marginTop:"6px",width:"30px",height:"30px",borderRadius:"15px",position:"relative",overflow:"hidden"},active:{absolute:"0px 0px 0px 0px",borderRadius:"8px",boxShadow:"inset 0 0 0 1px rgba(0,0,0,.1)",background:"rgba(".concat(s.r,", ").concat(s.g,", ").concat(s.b,", ").concat(s.a,")"),zIndex:"2"},toggles:{flex:"1"},hue:{height:"10px",position:"relative",marginBottom:"8px"},Hue:{radius:"2px"},alpha:{height:"10px",position:"relative"},Alpha:{radius:"2px"}},disableAlpha:{color:{width:"22px"},alpha:{display:"none"},hue:{marginBottom:"0px"},swatch:{width:"10px",height:"10px",marginTop:"0px"}}},d),{disableAlpha:a});return Object(i.jsxs)("div",{style:v.picker,className:"chrome-picker ".concat(x),children:[Object(i.jsx)("div",{style:v.saturation,children:Object(i.jsx)(l.Saturation,{style:v.Saturation,hsl:r,hsv:o,pointer:P,onChange:n})}),Object(i.jsxs)("div",{style:v.body,children:[Object(i.jsx)("div",{style:v.controls,className:"flexbox-fix",children:Object(i.jsxs)("div",{style:v.toggles,children:[Object(i.jsx)("div",{style:v.hue,children:Object(i.jsx)(l.Hue,{style:v.Hue,hsl:r,pointer:T,onChange:n})}),Object(i.jsx)("div",{style:v.alpha,children:Object(i.jsx)(l.Alpha,{style:v.Alpha,rgb:s,hsl:r,pointer:T,renderers:h,onChange:n})})]})}),Object(i.jsx)(H,{rgb:s,hsl:r,hex:c,view:g,onChange:n,disableAlpha:a,copy:b})]})]})};W.defaultProps={width:225,disableAlpha:!1,styles:{}};var M=Object(l.ColorWrap)(W),_=n(104),B=b.selectors,L=b.actions,F=function(e){var t=Object(c.b)(),n=Object(c.c)(B.selectColor),a=Object(_.useClipboard)();return Object(i.jsx)("div",{className:x.a.container,children:Object(i.jsx)(M,{width:"50vw",styles:{default:{picker:{borderRadius:"8px",overflow:"hidden"},hue:{height:"18px",borderRadius:"100px",overflow:"hidden"},alpha:{height:"18px",borderRadius:"100px",overflow:"hidden"}}},color:n.rgb,onChange:function(e){return t(L.update(e))},copy:a.copy})})},z=(n(105),n(106)),V=n.n(z);var J=function(){var e=Object(c.c)(b.selectors.selectColor);return Object(i.jsx)("div",{className:V.a.container,style:{background:N(e,"rgba")},children:Object(i.jsx)(F,{})})},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))},$=Object(p.a)({reducer:{colorPicker:b.reducer}});o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(c.a,{store:$,children:Object(i.jsx)(J,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):D(t,e)}))}}(),Z()}},[[249,1,2]]]);
//# sourceMappingURL=main.e2d40a85.chunk.js.map