(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[13],{153:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return c}));var i=a(7),n=function(e){return{type:i.c,payload:e}},l=function(e){return{type:i.A,payload:e}},s=function(e){return{type:i.I,payload:e}},c=function(e){return{type:i.b,payload:e}}},154:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return r})),a.d(t,"i",(function(){return o})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"h",(function(){return m}));var i=a(7),n=function(e){return{type:i.F,payload:e}},l=function(e){return{type:i.o,payload:e}},s=function(e){return{type:i.e,payload:e}},c=function(e){return{type:i.n,payload:e}},r=function(e){return{type:i.p,payload:e}},o=function(e){return{type:i.s,payload:e}},d=function(e){return{type:i.D,payload:e}},u=function(e){return{type:i.E,payload:e}},m=function(e){return{type:i.m,payload:e}}},156:function(e,t,a){"use strict";var i=a(29);t.a=function(e){var t=document.getElementById("modal");return Object(i.createPortal)(e.children,t)}},165:function(e,t,a){"use strict";var i=a(50),n=a(8),l=a(26),s=a(1),c=a(5),r=a(0);t.a=function(e){var t=Object(s.useState)({emailTo:"",emailSubject:"",emailBody:""}),a=Object(l.a)(t,2),o=a[0],d=a[1];Object(s.useEffect)((function(){(null===e||void 0===e?void 0:e.emailTo)&&d((function(t){return Object(n.a)(Object(n.a)({},t),{},{emailTo:e.emailTo})}))}),[null===e||void 0===e?void 0:e.emailTo]);var u=function(e){var t=e.target,a=t.name,l=t.value;d((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(i.a)({},a,l))}))};return Object(r.jsx)("div",{className:"mail-modal",children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=o.emailTo,i=o.emailSubject,n=o.emailBody;if(""===(null===a||void 0===a?void 0:a.trim())||""===(null===i||void 0===i?void 0:i.trim())||""===(null===n||void 0===n?void 0:n.trim())){var l={emailTo:a,emailSubject:i||"Campus Hiring Request",emailBody:n};e.sendMail(l)}else c.a.warning("Please enter all input fields")},children:[Object(r.jsxs)("div",{className:"modal-header d-block",children:[Object(r.jsxs)("span",{className:"modal-title",style:{fontSize:"1.1rem",padding:6},children:["New mail to ",e.universityName," University requesting Campus Placement Drive"]}),Object(r.jsx)("i",{className:"far fa-times-circle close-icon",onClick:e.closeSendModal,"data-dismiss":"modal"})]}),Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("span",{className:"control-label",style:{fontSize:"1rem"},children:"From\xa0:"}),Object(r.jsx)("input",{type:"email",name:"emailFrom",style:{fontSize:"1rem"},defaultValue:e.email,required:!0,readOnly:!0})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("span",{className:"control-label",style:{fontSize:"1rem"},children:"To\xa0:"}),Object(r.jsx)("input",{type:"email",name:"emailTo",style:{fontSize:"1rem"},defaultValue:e.emailTo,onChange:u,required:!0})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("span",{className:"control-label",style:{fontSize:"1rem"},children:"Subject\xa0:"}),Object(r.jsx)("input",{type:"text",name:"emailSubject",style:{fontSize:"1rem"},defaultValue:e.emailSubject,onChange:u,required:!0})]}),Object(r.jsx)("div",{className:"card b-none",children:Object(r.jsx)("textarea",{name:"emailBody",defaultValue:e.emailBody,style:{fontSize:".850rem"},onChange:u,rows:5})}),Object(r.jsx)("div",{className:"card ",children:Object(r.jsxs)("div",{className:"attachment",children:[Object(r.jsx)("i",{className:"fas fa-paperclip"}),Object(r.jsx)("span",{children:"Selected Students list for Campus Hiring (Attachment)"})]})})]}),Object(r.jsxs)("div",{className:"modal-footer",children:[Object(r.jsx)("button",{type:"submit",className:"btn3 ",children:"Send"}),"\xa0",Object(r.jsx)("button",{type:"button",onClick:e.closeSendModal,className:"btn3 ","data-dismiss":"modal",children:"Cancel"})]})]})})}},226:function(e,t,a){"use strict";a.r(t);var i=a(50),n=a(8),l=a(26),s=a(1),c=a(19),r=a(5),o=a(167),d=a(0),u=function(e){var t,a,i,n,l,s,c,r,u,m,j,b,h;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"row single-university-section",children:[Object(d.jsxs)("div",{className:"header d-flex align-items-center w-full",children:[Object(d.jsxs)("div",{className:"backBtn d-flex justify-content-start align-items-center",children:[Object(d.jsx)("i",{className:"fas fa-chevron-left"}),Object(d.jsx)("p",{className:"btnLabel",onClick:e.goBack,children:"Go Back"})]}),Object(d.jsx)("div",{className:"title-container",children:Object(d.jsx)("p",{className:"title",children:"Student List"})})]}),Object(d.jsx)("div",{className:"university-info-widget w-full",children:Object(d.jsxs)("div",{className:"d-flex flex-column",children:[Object(d.jsx)("div",{className:"university-info-plain-stripe"}),Object(d.jsxs)("div",{className:"univ-info d-flex justify-content-between align-items-start",children:[Object(d.jsxs)("div",{className:"univ-header d-flex justify-content-center align-items-center",children:[Object(d.jsx)("div",{className:"univ-logo",children:Object(d.jsx)("img",{src:"/pgk-home/images/univ.png",className:"img img-fluid univ-icon",alt:"univ-logo"})}),Object(d.jsxs)("div",{className:"univ-header-name d-flex flex-column align-items-start",children:[Object(d.jsx)("p",{className:"title",children:null===(t=e.universityInfoList)||void 0===t?void 0:t.universityName}),Object(d.jsxs)("p",{className:"sub-title",children:[Object(d.jsx)("i",{className:"fas fa-map-marker-alt"})," ",null===(a=e.universityInfoList)||void 0===a?void 0:a.universityHQAddressCity]})]})]}),Object(d.jsx)("div",{className:"univ-verticle-border"}),Object(d.jsxs)("div",{className:"d-flex flex-column align-items-center univ-info-widget",children:[Object(d.jsxs)("div",{className:"univ-info-data-list d-flex justify-content-between align-items-start w-full",children:[Object(d.jsxs)("div",{className:"univ-info-data d-flex flex-column align-items-center",children:[Object(d.jsx)("p",{className:"title",children:"University ID"}),Object(d.jsx)("p",{className:"sub-title",children:e.universityId})]}),Object(d.jsx)("div",{className:"univ-verticle-border-3"}),Object(d.jsxs)("div",{className:"univ-info-data d-flex flex-column align-items-center",children:[Object(d.jsx)("p",{className:"title",children:"NIRF Ranking"}),Object(d.jsx)("p",{className:"sub-title",children:null===(i=e.universityInfoList)||void 0===i||null===(n=i.ranking)||void 0===n?void 0:n.rank})]}),Object(d.jsx)("div",{className:"univ-verticle-border-3"}),Object(d.jsxs)("div",{className:"univ-info-data d-flex flex-column align-items-center",children:[Object(d.jsx)("p",{className:"title",children:"Accreditions"}),Object(d.jsx)("p",{className:"sub-title",children:null===(l=e.universityInfoList)||void 0===l||null===(s=l.accredations)||void 0===s?void 0:s.issuingAuthority})]}),Object(d.jsx)("div",{className:"univ-verticle-border-3"}),Object(d.jsxs)("div",{className:"univ-info-data d-flex flex-column align-items-center",children:[Object(d.jsx)("p",{className:"title",children:"Year Of Establishment"}),Object(d.jsx)("p",{className:"sub-title",children:null===(c=e.universityInfoList)||void 0===c?void 0:c.yearOfEstablishment})]})]}),Object(d.jsxs)("div",{className:"univ-course-stripe d-flex justify-content-start align-items-center w-full",children:[Object(d.jsx)("p",{className:"title",children:"Programs Offered"}),Object(d.jsx)("p",{className:"sub-title",children:null===(r=e.universityInfoList)||void 0===r?void 0:r.programsOffered})]})]})]})]})}),Object(d.jsx)("div",{className:"filter-heading w-full",children:Object(d.jsx)("p",{className:"label",children:"Specify your search criteria to display the students list"})}),(null===(u=e.studentSearchList)||void 0===u?void 0:u.studentsData)?null:Object(d.jsxs)("form",{onSubmit:e.searchSubmit,className:"search-filter-container d-flex justify-content-between align-items-center w-full",children:[Object(d.jsxs)("div",{className:"modal-grp",style:{flex:1},children:[Object(d.jsx)("label",{className:"text-white small mb-0",children:" Hiring Criteria"}),Object(d.jsx)(o.a,{closeMenuOnSelect:!1,name:"hiringCriteriaID",label:"By Hiring Criteria",isMulti:!0,options:e.hiringCriteriaOptions,onChange:e.handleChange})]}),Object(d.jsx)("p",{className:"dividerWord",children:"Or"}),Object(d.jsxs)("div",{className:"item four-filters d-flex flex-column justify-content-between align-content-center w-full",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between align-content-center search-filter-grid",children:[Object(d.jsxs)("div",{className:"modal-grp mb-2 w-50",style:{flex:1,zIndex:999},children:[Object(d.jsx)("label",{className:"text-white small mb-0",children:" Program"}),Object(d.jsx)(o.a,{closeMenuOnSelect:!1,label:"Program",name:"programID",isMulti:!0,options:e.programCatalog,onChange:e.handleChange})]}),Object(d.jsxs)("div",{className:"modal-grp mb-2 w-50",style:{flex:1,zIndex:999},children:[Object(d.jsx)("label",{className:"text-white small mb-0",children:" By Tentative Passing month"}),Object(d.jsx)(o.a,{closeMenuOnSelect:!1,label:"By Tentative Passing month",name:"monthOfHiring",isMulti:!0,options:e.months,onChange:e.handleChange})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between align-content-center search-filter-grid",children:[Object(d.jsxs)("div",{className:"modal-grp mb-2 w-50",style:{flex:1},children:[Object(d.jsx)("label",{className:"text-white small mb-0",children:"By Branch"}),Object(d.jsx)(o.a,{closeMenuOnSelect:!1,label:"By Branch",name:"branchID",isMulti:!0,options:e.branchCatalog,onChange:e.handleChange})]}),Object(d.jsxs)("div",{className:"modal-grp mb-2 w-50",style:{flex:1},children:[Object(d.jsx)("label",{className:"text-white small mb-0",children:"By Skills"}),Object(d.jsx)(o.a,{closeMenuOnSelect:!1,label:"By Skills",name:"skills",isMulti:!0,onChange:e.handleChange,options:e.skillsList})]})]})]}),Object(d.jsx)("button",{type:"submit",className:"item students-list-btn",children:"Get the Students List"})]}),e.studentSearchList&&Object(d.jsx)("div",{className:"table-responsive mb-4 mt-4",children:Object(d.jsxs)("table",{className:"table table-data mb-0",children:[Object(d.jsxs)("thead",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",colSpan:"2",children:Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"all"}),Object(d.jsx)("label",{className:"custom-control-label mt-1",htmlFor:"all",children:" Select all"})]})}),Object(d.jsx)("th",{scope:"col",colSpan:"4",children:Object(d.jsx)("button",{className:"btn3 btn-lightgreen","data-toggle":"modal","data-target":"#mailModal",children:"Request for campus drive"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"bg-white",scope:"col"}),Object(d.jsx)("th",{className:"bg-white",scope:"col",children:"Roll No."}),Object(d.jsx)("th",{className:"bg-white",scope:"col",children:"Name of the student"}),Object(d.jsx)("th",{className:"bg-white",scope:"col",children:"Program"}),Object(d.jsx)("th",{className:"bg-white",scope:"col",children:"Branch"}),Object(d.jsx)("th",{className:"bg-white",scope:"col",children:"Aggregate CGPA"})]})]}),Object(d.jsx)("tbody",{children:(null===(m=e.studentSearchList)||void 0===m||null===(j=m.studentsData)||void 0===j?void 0:j.length)>=0?null===(b=e.studentSearchList)||void 0===b||null===(h=b.studentsData)||void 0===h?void 0:h.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",className:"custom-control-input",id:e.studentID+t}),Object(d.jsx)("label",{className:"custom-control-label mt-1",htmlFor:e.studentID+t})]})}),Object(d.jsx)("td",{children:e.studentID}),Object(d.jsx)("td",{children:e.studentName}),Object(d.jsx)("td",{children:e.programID}),Object(d.jsx)("td",{children:e.branchName}),Object(d.jsx)("td",{children:e.avgPercentage})]},t)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:"6",className:"text-center",children:"No data"})})})]})})]})})},m=a(156),j=a(6),b=a(153),h=a(154),v=a(165),f=window.$;t.default=function(e){var t,a,o,O,x,p=Object(s.useState)({}),g=Object(l.a)(p,2),y=g[0],N=g[1],S=Object(s.useState)([]),C=Object(l.a)(S,2),w=C[0],k=C[1],I=Object(s.useState)(!1),D=Object(l.a)(I,2),B=(D[0],D[1],Object(s.useState)([])),T=Object(l.a)(B,2),L=T[0],M=T[1],P=Object(s.useState)({hiringCriteriaID:[],programID:[],branchID:[],monthOfHiring:[],skills:[]}),q=Object(l.a)(P,2),R=q[0],H=q[1],z=Object(s.useState)(null),F=Object(l.a)(z,2),A=F[0],E=F[1],J=Object(s.useState)(""),V=Object(l.a)(J,2),G=V[0],U=(V[1],Object(s.useState)(!1)),Q=Object(l.a)(U,2),W=Q[0],Y=Q[1],$=Object(s.useState)({emailTo:"",emailSubject:"",emailBody:""}),_=Object(l.a)($,2),K=_[0],X=_[1],Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ee=Object(c.a)(),te=null===(t=e.match)||void 0===t||null===(a=t.params)||void 0===a?void 0:a.id,ae=localStorage.getItem("subscriptionID"),ie=localStorage.getItem("email");Object(s.useEffect)((function(){var t=e.location.search;if(f(document).on("click",".dropdown-menu",(function(e){e.stopPropagation()})),ee(Object(h.c)({apiPayloadRequest:te,callback:oe})),le(),ce(),t){var a=null===t||void 0===t?void 0:t.split("=");ne(a[1])}return function(){}}),[]);var ne=function(e){ee(Object(h.h)({apiPayloadRequest:{type:"STUDENTS_LIST",id:e},callback:de}))},le=function(){ee(Object(b.b)({callback:se}))},se=function(e){k(e)},ce=function(){ee(Object(j.b)({apiPayloadRequest:["programCatalog","branchCatalog","skills"],callback:re}))},re=function(e){M(e)},oe=function(e){N(e)},de=function(e){E(e)},ue=function(e){r.a.success(null===e||void 0===e?void 0:e.message),Y(!1),f("#mailSentSuccess").modal("show")},me=w.map((function(e){return{value:e.hiringCriteriaID,label:e.hiringCriteriaName}})),je=null===L||void 0===L||null===(o=L.programCatalog)||void 0===o?void 0:o.map((function(e){return{value:e.programCode,label:e.programName}})),be=null===L||void 0===L||null===(O=L.branchCatalog)||void 0===O?void 0:O.map((function(e){return{value:e.branchID,label:e.branchName}})),he=null===L||void 0===L||null===(x=L.skills)||void 0===x?void 0:x.map((function(e){return{value:e.skillCode,label:e.skillName}})),ve=null===Z||void 0===Z?void 0:Z.map((function(e,t){return{value:e,label:e}}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{hiringCriteriaOptions:me,programCatalog:je,branchCatalog:be,skillsList:he,months:ve,universityId:te,universityInfoList:y,studentSearchList:A,goBack:function(){e.history.goBack()},handleChange:function(e,t){var a=t.name;console.log(e,a),H((function(t){return Object(n.a)(Object(n.a)({},t),{},Object(i.a)({},a,e))}))},searchSubmit:function(e){e.preventDefault();var t=R.hiringCriteriaID,a=R.programID,i=R.branchID,n=R.monthOfHiring,l=R.skills,s={universityID:te,subscriptionID:ae,hiringCriteriaID:null===t||void 0===t?void 0:t.map((function(e){return e.value})),programID:null===a||void 0===a?void 0:a.map((function(e){return e.value})),branchID:null===i||void 0===i?void 0:i.map((function(e){return e.value})),monthOfHiring:null===n||void 0===n?void 0:n.map((function(e){return e.value})),skills:null===l||void 0===l?void 0:l.map((function(e){return e.value}))};ee(Object(h.d)({apiPayloadRequest:s,callback:de}))}}),W&&Object(d.jsx)(m.a,{children:Object(d.jsx)(v.a,{email:ie,emailTo:"jaswanth@gmail.com",emailSubject:"Campus Hiring Request",emailBody:"",universityName:null===y||void 0===y?void 0:y.universityName,handleChange:function(e){var t=e.target,a=t.name,l=t.value;X((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(i.a)({},a,l))}))},closeSendModal:function(){Y(!1)},sendMail:function(e){e.preventDefault();var t=K.emailTo,a=K.emailSubject,i=K.emailBody;if(t||a||i){var n={campusDriveID:G,emailFrom:ie,emailTo:"jaswanth@gmail.com",emailSubject:a||"Campus Hiring Request",emailBody:i};ee(Object(h.e)({apiPayloadRequest:n,callback:ue}))}else r.a.warning("Please enter all inout fields")}})})]})}}}]);
//# sourceMappingURL=13.41c41ca7.chunk.js.map