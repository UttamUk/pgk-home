(this.webpackJsonppgk=this.webpackJsonppgk||[]).push([[38],{188:function(e,t,s){"use strict";s.r(t);var i=s(26),c=s(1),n=s(19),l=s(49),a=s.n(l),d=s(37),j=s(0);t.default=function(){var e,t=Object(n.b)((function(e){return e.DashboardReducer.profileInfo})),s=Object(c.useState)(),l=Object(i.a)(s,2),r=l[0],o=l[1],x=Object(n.a)(),b=function(e){console.log("data ",e),o(e)};Object(c.useEffect)((function(){x(Object(d.a)({callback:b}))}),[]);var f=[],m=null!==t&&t?Object.keys(t):[];return["primaryContactFirstName","primaryContactMiddleName","primaryContactLastName"].forEach((function(e){m.includes(e)&&void 0!==t[e]&&""!==t[e].trim()&&f.push(t[e])})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-lg-9",style:{padding:"0px"},children:[Object(j.jsxs)("div",{className:"row welcome-widget d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsxs)("div",{className:"row d-flex flex-row justify-content-start align-items-center",children:[Object(j.jsx)("div",{className:"welcome-avatar d-flex flex-column justify-content-center align-items-center",style:{backgroundColor:"white",border:"4px solid #253AA3",padding:"5px"},children:Object(j.jsx)("img",{src:"".concat(null!==(null===t||void 0===t?void 0:t.profilePicture)&&void 0!==(null===t||void 0===t?void 0:t.profilePicture)&&""!==(null===t||void 0===t||null===(e=t.profilePicture)||void 0===e?void 0:e.trim())?"data:image/png;base64,"+t.profilePicture:"../../../images/logo.png"),alt:"logo",className:"welcome-avatar-logo"})}),Object(j.jsxs)("div",{className:"welcome-content d-flex flex-column justify-content-start align-items-start",children:[Object(j.jsxs)("p",{className:"title",style:{textTransform:"capitalize"},children:["Welcome, ",f.join(" "),"!"]}),Object(j.jsx)("p",{className:"sub-title",children:null===t||void 0===t?void 0:t.primaryContactDesignation}),Object(j.jsx)("p",{className:"content",style:{textTransform:"capitalize"},children:null===t||void 0===t?void 0:t.corporateName})]})]}),Object(j.jsxs)("div",{className:"date-of-joining-widget d-flex flex-column justify-content-center",children:[Object(j.jsx)("p",{className:"sub-label",children:"Date of joining the Platform :"}),Object(j.jsx)("p",{className:"label",children:(null===t||void 0===t?void 0:t.dateOfJoining)?a()(null===t||void 0===t?void 0:t.dateOfJoining).format("DD-MM-YYYY"):"-"})]})]}),Object(j.jsxs)("div",{className:"row d-flex justify-content-between",children:[Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-center quick-widget",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center quick-widget-1",children:[Object(j.jsx)("i",{className:"fas fa-share"}),Object(j.jsx)("p",{children:"Jobs Published"})]}),Object(j.jsx)("p",{className:"quick-widget-value",children:"34"}),Object(j.jsx)("p",{className:"quick-widget-label",children:"8 Published in the recent month"})]}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-center quick-widget",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center quick-widget-2",children:[Object(j.jsx)("i",{className:"fas fa-file"}),Object(j.jsx)("p",{children:"Applications Received"})]}),Object(j.jsx)("p",{className:"quick-widget-value",children:void 0!==(null===r||void 0===r?void 0:r.applicationsReceived)?null===r||void 0===r?void 0:r.applicationsReceived:"-"}),Object(j.jsx)("p",{className:"quick-widget-label",children:"8 Received in the last 2 days"})]}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-center quick-widget",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center quick-widget-3",children:[Object(j.jsx)("i",{className:"fas fa-briefcase"}),Object(j.jsx)("p",{children:"Job Offers Made"})]}),Object(j.jsx)("p",{className:"quick-widget-value",children:void 0!==(null===r||void 0===r?void 0:r.jobOffersMade)?null===r||void 0===r?void 0:r.jobOffersMade:"-"}),Object(j.jsx)("p",{className:"quick-widget-label",children:"10 Made in the recent month"})]})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start feature-widget",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center feature-widget-header",children:[Object(j.jsx)("p",{className:"label",children:"Tentative Passouts & Passing Month"}),Object(j.jsx)("button",{className:"btn btn-secondary",type:"button",children:"Check Analytics"})]}),Object(j.jsxs)("table",{className:"table table-borderless",children:[Object(j.jsx)("thead",{className:"table-header",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"University"}),Object(j.jsx)("td",{children:"Passing Month"}),Object(j.jsx)("td",{children:"Passouts"}),Object(j.jsx)("td",{})]})}),Object(j.jsxs)("tbody",{className:"table-body",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"JNTU"}),Object(j.jsx)("td",{children:"June, 2021"}),Object(j.jsx)("td",{children:"767"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"table-btn",children:"Subscribe"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"JNTU"}),Object(j.jsx)("td",{children:"June, 2021"}),Object(j.jsx)("td",{children:"767"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"table-btn",children:"Subscribe"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"JNTU"}),Object(j.jsx)("td",{children:"June, 2021"}),Object(j.jsx)("td",{children:"767"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"table-btn",children:"Subscribe"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"JNTU"}),Object(j.jsx)("td",{children:"June, 2021"}),Object(j.jsx)("td",{children:"767"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"table-btn",children:"Subscribe"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"JNTU"}),Object(j.jsx)("td",{children:"June, 2021"}),Object(j.jsx)("td",{children:"767"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"table-btn",children:"Subscribe"})})]})]})]})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start feature-widget",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center feature-widget-header",children:[Object(j.jsx)("p",{className:"label",children:"Universities Conversion Ratio Last Year"}),Object(j.jsx)("button",{className:"btn btn-secondary",type:"button",children:"Check Analytics"})]}),Object(j.jsx)("div",{style:{height:"350px"}})]})})]}),Object(j.jsxs)("div",{className:"col-lg-3",style:{padding:"0px"},children:[Object(j.jsxs)("div",{className:"row d-flex flex-row justify-content-between align-items-center account-info-widget",children:[Object(j.jsx)("div",{className:"avatar-circle d-flex flex-column justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-check"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-start account-info-content",children:[Object(j.jsx)("p",{className:"label",children:"Your Account is active"}),Object(j.jsxs)("p",{className:"label",children:["Valid till ",Object(j.jsx)("span",{children:(null===t||void 0===t?void 0:t.accountExpiryDate)?a()(t.accountExpiryDate).format("DD-MM-YYYY"):"-"})]})]})]}),Object(j.jsxs)("div",{className:"row d-flex flex-row justify-content-center align-items-center notifications-widget",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-start align-items-center header w-full",children:[Object(j.jsx)("i",{className:"fas fa-bell"}),Object(j.jsx)("p",{className:"label",children:"Notifications"})]}),Object(j.jsxs)("div",{className:"notification-list d-flex flex-column justify-content-start align-items-start",children:[Object(j.jsxs)("div",{className:"notification-list-item d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("div",{className:"notification-icon d-flex flex-column justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-university"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-start notification-content",children:[Object(j.jsxs)("div",{className:"title-with-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"title",children:"Osmania University"}),Object(j.jsxs)("span",{className:"icon-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("i",{className:"fas fa-clock"})," 5 min ago"]})]}),Object(j.jsx)("p",{className:"sub-title",children:"has requested for Campus Hiring"})]})]}),Object(j.jsxs)("div",{className:"notification-list-item d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("div",{className:"notification-icon d-flex flex-column justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-university"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-start notification-content",children:[Object(j.jsxs)("div",{className:"title-with-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"title",children:"Osmania University"}),Object(j.jsxs)("span",{className:"icon-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("i",{className:"fas fa-clock"})," 5 min ago"]})]}),Object(j.jsx)("p",{className:"sub-title",children:"has requested for Campus Hiring"})]})]}),Object(j.jsxs)("div",{className:"notification-list-item d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("div",{className:"notification-icon d-flex flex-column justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-university"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-start notification-content",children:[Object(j.jsxs)("div",{className:"title-with-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"title",children:"Osmania University"}),Object(j.jsxs)("span",{className:"icon-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("i",{className:"fas fa-clock"})," 5 min ago"]})]}),Object(j.jsx)("p",{className:"sub-title",children:"has requested for Campus Hiring"})]})]}),Object(j.jsxs)("div",{className:"notification-list-item d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("div",{className:"notification-icon d-flex flex-column justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-university"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-start notification-content",children:[Object(j.jsxs)("div",{className:"title-with-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"title",children:"Osmania University"}),Object(j.jsxs)("span",{className:"icon-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("i",{className:"fas fa-clock"})," 5 min ago"]})]}),Object(j.jsx)("p",{className:"sub-title",children:"has requested for Campus Hiring"})]})]}),Object(j.jsxs)("div",{className:"notification-list-item d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("div",{className:"notification-icon d-flex flex-column justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-university"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-start notification-content",children:[Object(j.jsxs)("div",{className:"title-with-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"title",children:"Osmania University"}),Object(j.jsxs)("span",{className:"icon-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("i",{className:"fas fa-clock"})," 5 min ago"]})]}),Object(j.jsx)("p",{className:"sub-title",children:"has requested for Campus Hiring"})]})]}),Object(j.jsxs)("div",{className:"notification-list-item d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("div",{className:"notification-icon d-flex flex-column justify-content-center align-items-center",children:Object(j.jsx)("i",{className:"fas fa-university"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-start align-items-start notification-content",children:[Object(j.jsxs)("div",{className:"title-with-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("p",{className:"title",children:"Osmania University"}),Object(j.jsxs)("span",{className:"icon-badge d-flex flex-row justify-content-between align-items-center",children:[Object(j.jsx)("i",{className:"fas fa-clock"})," 5 min ago"]})]}),Object(j.jsx)("p",{className:"sub-title",children:"has requested for Campus Hiring"})]})]}),Object(j.jsx)("div",{className:"notification-btn",children:"View all notifications"})]})]}),Object(j.jsxs)("div",{className:"row d-flex flex-row justify-content-center align-items-center univ-widget",children:[Object(j.jsx)("div",{className:"d-flex flex-row justify-content-center align-items-center univ-header",children:Object(j.jsx)("p",{className:"label",children:"Top 5 Universities in (2020)"})}),Object(j.jsxs)("div",{className:"univ-table d-flex flex-column justify-content-start align-items-start",children:[Object(j.jsxs)("table",{className:"table table-borderless",children:[Object(j.jsx)("thead",{className:"table-universities-header",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Rank"}),Object(j.jsx)("td",{children:"Name of the University"}),Object(j.jsx)("td",{children:"Hirings"})]})}),Object(j.jsxs)("tbody",{className:"table-universities-body",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"1"}),Object(j.jsx)("td",{children:"JNTU, Hyd"}),Object(j.jsx)("td",{children:"542"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"2"}),Object(j.jsx)("td",{children:"Osmania Univ., Hyd"}),Object(j.jsx)("td",{children:"496"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"3"}),Object(j.jsx)("td",{children:"University of Hyd"}),Object(j.jsx)("td",{children:"401"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"4"}),Object(j.jsx)("td",{children:"IIT, Hyderabad"}),Object(j.jsx)("td",{children:"387"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"5"}),Object(j.jsx)("td",{children:"GITAM, Hyderabad"}),Object(j.jsx)("td",{children:"313"})]})]})]}),Object(j.jsx)("div",{className:"univ-btn",children:"Go to Analytics"})]})]})]})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center w-full px-3",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center flex-fill stat-widget",children:[Object(j.jsx)("p",{className:"statNo",children:void 0!==(null===r||void 0===r?void 0:r.currentlyOnline)?null===r||void 0===r?void 0:r.currentlyOnline:"-"}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center stat-content",children:[Object(j.jsx)("p",{className:"title",children:"Currently"}),Object(j.jsx)("p",{className:"sub-title-1",children:"Online"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center flex-fill stat-widget",children:[Object(j.jsx)("p",{className:"statNo",children:void 0!==(null===r||void 0===r?void 0:r.joinedLastWeek)?null===r||void 0===r?void 0:r.joinedLastWeek:"-"}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center stat-content",children:[Object(j.jsx)("p",{className:"sub-title-1",children:"Joined In"}),Object(j.jsx)("p",{className:"sub-title-1",children:"Last Hour"})]})]}),Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center flex-fill stat-widget",children:[Object(j.jsx)("p",{className:"statNo",children:void 0!==(null===r||void 0===r?void 0:r.gotPlaced)?null===r||void 0===r?void 0:r.gotPlaced:"-"}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center stat-content",children:[Object(j.jsx)("p",{className:"title",children:"Got Placed"}),Object(j.jsx)("p",{className:"sub-title",children:"Through Our"}),Object(j.jsx)("p",{className:"sub-title-1",children:"Platform"})]})]})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center w-full px-3",children:[Object(j.jsx)("div",{className:"d-flex flex-row justify-content-start align-items-center stat-info-widget",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-start stat-info-content",children:[Object(j.jsx)("p",{className:"title",children:"Corporates"}),Object(j.jsx)("p",{className:"sub-title",children:"Registered"}),Object(j.jsx)("p",{className:"stat-info-no",children:void 0!==(null===r||void 0===r?void 0:r.corporatesRegistered)?null===r||void 0===r?void 0:r.corporatesRegistered:"-"})]})}),Object(j.jsx)("div",{className:"d-flex flex-row justify-content-start align-items-center stat-info-widget",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-start stat-info-content",children:[Object(j.jsx)("p",{className:"title",children:"Universities"}),Object(j.jsx)("p",{className:"sub-title",children:"Registered"}),Object(j.jsx)("p",{className:"stat-info-no",children:void 0!==(null===r||void 0===r?void 0:r.universitiesRegistered)?null===r||void 0===r?void 0:r.universitiesRegistered:"-"})]})}),Object(j.jsx)("div",{className:"d-flex flex-row justify-content-start align-items-center stat-info-widget",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-start stat-info-content",children:[Object(j.jsx)("p",{className:"title",children:"Students"}),Object(j.jsx)("p",{className:"sub-title",children:"Registered"}),Object(j.jsx)("p",{className:"stat-info-no",children:void 0!==(null===r||void 0===r?void 0:r.studentsRegistered)?null===r||void 0===r?void 0:r.studentsRegistered:"-"})]})})]})})]})}}}]);
//# sourceMappingURL=38.55303c28.chunk.js.map