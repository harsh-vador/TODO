(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{16:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o(2),i=o.n(c),r=o(7),u=o.n(r),a=(o(16),o(10)),d=o(3);var s=function(t){var e=Object(c.useState)(t.edit?t.edit.value:""),o=Object(d.a)(e,2),i=o[0],r=o[1],u=Object(c.useRef)(null);Object(c.useEffect)((function(){u.current.focus()}));var a=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e3*Math.random()),text:i}),r("")};return Object(n.jsxs)("form",{className:"todo-form",onSubmit:a,children:[Object(n.jsx)("input",{type:"text",placeholder:t.edit?"Update Your Item":"Add a Todo",value:i,name:"text",className:t.edit?"todo-input edit":"todo-input",onChange:function(t){r(t.target.value)},ref:u}),Object(n.jsx)("button",{onClick:a,className:t.edit?"todo-button edit":"todo-button",children:t.edit?"Update":"Add"})]})},l=o(9),j=o(8);var f=function(t){var e=t.todos,o=t.completeTodo,i=t.removeTodo,r=t.updateTodo,u=Object(c.useState)({id:null,value:""}),a=Object(d.a)(u,2),f=a[0],b=a[1],m=function(t){o(t)};return Object(n.jsx)(n.Fragment,{children:f.id?Object(n.jsx)(s,{edit:f,onSubmit:function(t){r(f.id,t),b({id:null,value:""})}}):e.map((function(t,e){return Object(n.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(n.jsx)("input",{type:"checkbox",onClick:function(){return m(t.id)}}),Object(n.jsx)("div",{className:"todo-content",onClick:function(){return m(t.id)},children:t.text},t.id),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)(j.a,{onClick:function(){return b({id:t.id,value:t.text})},className:"edit-icon"}),Object(n.jsx)(l.a,{onClick:function(){return i(t.id)},className:"delete-icon"})]})]},e)}))})},b="react-do-list-todos";var m=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),o=e[0],i=e[1];Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(b));t&&i(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(b,JSON.stringify(o))}),[o]);var r=function(t){return!t||/^\s*$/.test(t)};return Object(n.jsxs)("div",{className:"todo-context",children:[Object(n.jsx)("h1",{children:"To-Do List"}),Object(n.jsx)(s,{onSubmit:function(t){if(!r(t.text)){var e=[t].concat(Object(a.a)(o));i(e)}}}),Object(n.jsx)(f,{todos:o,completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))}))},updateTodo:function(t,e){r(e.text)||i((function(o){return o.map((function(o){return o.id===t?e:o}))}))}}),Object(n.jsx)("button",{className:"todo-button",onClick:function(){i([])},children:"Delete All"})]})};var O=function(){return Object(n.jsx)("div",{className:"todo-app",children:Object(n.jsx)(m,{})})};u.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b54ba7a7.chunk.js.map