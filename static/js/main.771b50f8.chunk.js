(this.webpackJsonpexam_4=this.webpackJsonpexam_4||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"Counter_wrapper__1tGyV",counter:"Counter_counter__1nKXm"}},18:function(e,t,n){e.exports={controlPanel:"ControlPanel_controlPanel__c6lXd",button:"ControlPanel_button__1XBCm"}},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(5),r=n.n(s),o=(n(24),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))}),l=n(3),i=n(11),u=n.n(i),b=n(6),j=n(7),m=n.n(j),d=n(45),O=n(1),f=function(e){var t=e.title,n=e.Color,a=e.callback,c=e.isDisabled;Object(b.a)(e,["title","Color","callback","isDisabled"]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.a,{color:n,variant:"contained",onClick:a,disabled:c,children:t})})},x={fontSize:"medium",marginTop:10},C={marginRight:10},g=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(e.minValue),o=Object(l.a)(r,2),i=o[0],u=o[1],b=Object(a.useState)(e.maxValue),j=Object(l.a)(b,2),m=j[0],d=j[1];Object(a.useEffect)((function(){localStorage.setItem("minValue",JSON.stringify(i)),localStorage.setItem("maxValue",JSON.stringify(m))}),[i,m]),Object(a.useEffect)((function(){s(i<0||m<0||i===m||i>m)}),[i,m]);return Object(O.jsxs)("div",{style:x,children:[Object(O.jsx)("input",{type:"number",placeholder:"enter min value...",style:C,onChange:function(e){u(Number(e.currentTarget.value))}}),Object(O.jsx)("input",{type:"number",placeholder:"enter max value...",style:C,onChange:function(e){d(Number(e.currentTarget.value))}}),Object(O.jsx)(f,{title:e.title,Color:"primary",callback:function(){e.callback(i,m)},isDisabled:c}),c&&Object(O.jsx)("div",{style:x,children:"Please enter correct values!"})]})},v=function(e){var t=e.count,n=e.minValue,a=e.maxValue,c=(e.isIncButtonDisable,e.isResetButtonDisable,e.isWarringMessage),s=e.setStartValues,r=(Object(b.a)(e,["count","minValue","maxValue","isIncButtonDisable","isResetButtonDisable","isWarringMessage","setStartValues"]),c?m.a.errorClass:""),o="".concat(m.a.infoTablo," ").concat(r);return Object(O.jsxs)("div",{className:o,children:[Object(O.jsx)("div",{children:t}),Object(O.jsx)("div",{className:m.a.inputBlock,children:0===a?Object(O.jsx)(g,{title:"Set start values",callback:s,minValue:n,maxValue:a}):Object(O.jsxs)("div",{className:m.a.countInfo,children:["min: ",n," max: ",a]})}),Object(O.jsx)("div",{className:m.a.errorMessage,children:0!==t&&c&&"Counter have a max value. Please reset counter!"})]})},S=n(18),p=n.n(S),I=function(e){var t=e.isAuto?"Pause":"Auto Inc";return Object(O.jsx)("div",{className:"s.AutoCounter",children:Object(O.jsx)(f,{title:t,Color:"primary",isDisabled:e.isDisabled,callback:e.callback})})},D=function(e){var t=e.IncrementCountHandler,n=e.autoIncrementCountHandler,a=e.ResetCountHandler,c=e.isIncButtonDisable,s=e.isResetButtonDisable,r=e.isAutoIncButtonDisable,o=Object(b.a)(e,["IncrementCountHandler","autoIncrementCountHandler","ResetCountHandler","isIncButtonDisable","isResetButtonDisable","isAutoIncButtonDisable"]);return Object(O.jsxs)("div",{className:p.a.controlPanel,children:[Object(O.jsx)(f,{title:"INC",Color:"primary",isDisabled:c,callback:t}),Object(O.jsx)(f,{title:"RES",Color:"secondary",isDisabled:s,callback:a}),Object(O.jsx)(I,{callback:n,isDisabled:r,isAuto:o.isAuto})]})},_=function(){var e=Object(a.useState)((function(){var e=localStorage.getItem("minValue");if(e)return JSON.parse(e)})),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)((function(){var e=localStorage.getItem("maxValue");if(e)return JSON.parse(e)})),r=Object(l.a)(s,2),o=r[0],i=r[1],b=Object(a.useState)((function(){var e=localStorage.getItem("currentCount");return e?JSON.parse(e):0})),j=Object(l.a)(b,2),m=j[0],d=j[1];Object(a.useEffect)((function(){localStorage.setItem("currentCount",JSON.stringify(m))}),[m]);var f=Object(a.useState)(null),x=Object(l.a)(f,2),C=x[0],g=x[1],S=Object(a.useState)(!1),p=Object(l.a)(S,2),I=p[0],_=p[1];Object(a.useEffect)((function(){I&&g(setTimeout((function(){m<o&&d(m+1)}),1e3))}),[m,I]);var h=m===o||I,B=m===o,V=m===n,N=m===o;return Object(O.jsxs)("div",{className:u.a.wrapper,children:[Object(O.jsx)("div",{className:u.a.counter}),Object(O.jsx)(v,{count:m,minValue:n,maxValue:o,isResetButtonDisable:V,isIncButtonDisable:h,isWarringMessage:N,setStartValues:function(e,t){c(e),i(t),d(e)}}),Object(O.jsx)(D,{IncrementCountHandler:function(){d(m+1)},autoIncrementCountHandler:function(){C&&clearTimeout(C),_(!I)},ResetCountHandler:function(){C&&clearTimeout(C),c(0),i(0),d(0),_(!1),localStorage.clear()},isIncButtonDisable:h,isResetButtonDisable:V,isAutoIncButtonDisable:B,isAuto:I})]})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),o()},7:function(e,t,n){e.exports={infoTablo:"CounterTablo_infoTablo__1s8oG",errorClass:"CounterTablo_errorClass__1vinB",errorMessage:"CounterTablo_errorMessage__3DEXH",countInfo:"CounterTablo_countInfo__1WDi0"}}},[[30,1,2]]]);
//# sourceMappingURL=main.771b50f8.chunk.js.map