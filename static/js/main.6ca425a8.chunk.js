(this.webpackJsonplab08=this.webpackJsonplab08||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(7),n=c.n(s),l=(c(12),c(2)),i=c(3),o=c(5),b=c(4),j=c(0),d=function(e){Object(o.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(l.a)(this,c);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onClick=function(){var t=e.props,c=t.label;(0,t.onClick)(c)},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props,c=t.activeTab,r=t.label,a="tab-list-item";return c===r&&(a+=" tab-list-active"),Object(j.jsx)("li",{className:a,onClick:e,children:r})}}]),c}(r.Component),h=function(e){Object(o.a)(c,e);var t=Object(b.a)(c);function c(e){var r;return Object(l.a)(this,c),(r=t.call(this,e)).onClickTabItem=function(e){r.setState({activeTab:e})},r.state={activeTab:r.props.children[0].props.label},r}return Object(i.a)(c,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,c=this.state.activeTab;return Object(j.jsxs)("div",{className:"tabs",children:[Object(j.jsx)("ol",{className:"tab-list",children:t.map((function(t){var r=t.props.label;return Object(j.jsx)(d,{activeTab:c,label:r,onClick:e},r)}))}),Object(j.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===c)return e.props.children}))})]})}}]),c}(r.Component),m=function(){return Object(j.jsxs)("div",{className:"contact-us",children:[Object(j.jsx)("h1",{children:"Contact Us"}),Object(j.jsxs)("p",{children:["Telephone: ",Object(j.jsxs)("a",{href:"tel: 0",children:["(613) 420-6969",Object(j.jsx)("br",{})]}),"Fax: ",Object(j.jsxs)("a",{href:"tel: 0",children:["(613) 420-9696",Object(j.jsx)("br",{})]}),"Email: ",Object(j.jsx)("a",{href:"mailto:#",children:"613pools@ottawa.com"}),Object(j.jsx)("br",{}),"Mon-Fri: ",Object(j.jsx)("strong",{children:"9:30-16:30"})]}),Object(j.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.0746414587697!2d-75.74687818444714!3d45.32711517909952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce07762014c8d1%3A0xcbe3e5300c2decc!2sNepean%20Sportsplex!5e0!3m2!1sen!2sca!4v1625851093842!5m2!1sen!2sca",width:"100%",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy"})]})},x=function(){return Object(j.jsxs)("div",{id:"reserve-a-spot",className:"tabcontent",children:[Object(j.jsx)("h1",{children:"Reserve a Spot"}),Object(j.jsx)("div",{className:"form-row",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("label",{for:"enterFirstName",children:"First Name"}),Object(j.jsx)("input",{type:"text",class:"form-control",placeholder:"John",required:!0}),Object(j.jsx)("label",{for:"enterLastName",children:"Last Name"}),Object(j.jsx)("input",{type:"text",class:"form-control",placeholder:"Last name",required:!0}),Object(j.jsx)("label",{for:"enterEmailAddress",children:"Email"}),Object(j.jsx)("input",{type:"email",class:"form-control",id:"userEmail",placeholder:"abc@gmail.com",required:!0}),Object(j.jsx)("label",{for:"enterNumber",children:"Phone Number"}),Object(j.jsx)("input",{type:"phoneNumber",class:"form-control",id:"userPhoneNumber",placeholder:"1 (xxx) xxx-xxxx",required:!0}),Object(j.jsx)("label",{for:"date",children:"Date"}),Object(j.jsx)("input",{type:"text",placeholder:"mm/dd/yyyy"})]})})]})};var p=function(){return Object(j.jsxs)("div",{className:"content-area",children:[Object(j.jsx)("div",{className:"company-name",children:Object(j.jsx)("h1",{style:{fontSize:"70px"},children:"613 Pools"})}),Object(j.jsxs)(h,{children:[Object(j.jsx)("div",{label:"Reserve a Spot",children:Object(j.jsx)(x,{})}),Object(j.jsx)("div",{label:"Contact Us",children:Object(j.jsx)(m,{})})]})]})};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6ca425a8.chunk.js.map