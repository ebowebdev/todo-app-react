(this.webpackJsonptodoApp=this.webpackJsonptodoApp||[]).push([[0],{20:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),o=c.n(a),i=c(13),s=c.n(i),r=(c(20),c(4)),d=c(5),l=c(7),j=c(6),u=c(8),O=c(9),p=(c(26),c(14)),b=c(3),h=Object(a.createContext)(),m=function(e,t){switch(t.type){case"DELETE_TODO":return Object(b.a)(Object(b.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});case"TODO_COMPLETE":return Object(b.a)(Object(b.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.payload?Object(b.a)(Object(b.a)({},e),{},{complete:!e.complete}):e}))});case"ADD_TODO":return Object(b.a)(Object(b.a)({},e),{},{todos:[t.payload].concat(Object(p.a)(e.todos))});default:return e}},v=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={todos:[{id:1,title:"go to gym",complete:!1},{id:2,title:"visit my mome",complete:!1},{id:3,title:"learn mongoDB",complete:!1}],dispatch:function(t){return e.setState((function(e){return m(e,t)}))}},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)(h.Provider,{value:this.state,children:this.props.children})}}]),c}(a.Component),f=h.Consumer;var x=function(e){var t=e.todo;return Object(n.jsx)(f,{children:function(e){return Object(n.jsxs)("div",{className:"todo",children:[Object(n.jsx)("div",{className:"todo-title",children:Object(n.jsx)("p",{className:"".concat(t.complete?"isComplete":""),children:t.title})}),Object(n.jsxs)("div",{className:"todo-btns",children:[Object(n.jsx)("span",{className:"span-icon",onClick:function(){return c=t.id,void(0,e.dispatch)({type:"TODO_COMPLETE",payload:c});var c},children:t.complete?Object(n.jsx)(u.a,{icon:O.a,className:"icon todo-icon-isComplete"}):Object(n.jsx)(u.a,{icon:O.a,className:"icon todo-icon-notComplete"})}),Object(n.jsx)("span",{className:"span-icon todo-icon-update",children:Object(n.jsx)(u.a,{icon:O.b,className:"icon"})}),Object(n.jsx)("span",{className:"span-icon todo-icon-delete",onClick:function(){return c=t.id,void(0,e.dispatch)({type:"DELETE_TODO",payload:c});var c},children:Object(n.jsx)(u.a,{icon:O.c,className:"icon"})})]})]})}})},y=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)(f,{children:function(e){return e.todos.map((function(e){return Object(n.jsx)(x,{todo:e},e.id)}))}})}}]),c}(a.Component),N=(c(27),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.handlnInput=function(t){e.setState({title:t.target.value})},e.addTodo=function(t){t({type:"ADD_TODO",payload:{id:10*Math.random(),title:e.state.title,complete:!1}}),e.setState({title:""})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsx)(f,{children:function(t){return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("input",{type:"text",value:e.state.title,onChange:e.handlnInput,placeholder:"add todo"}),Object(n.jsx)("button",{onClick:function(){return e.addTodo(t.dispatch)},children:"add todo"})]})}})}}]),c}(a.Component));function C(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"header-div-pre"}),Object(n.jsx)("div",{className:"header-div-one"}),Object(n.jsx)("div",{className:"header-div-two"}),Object(n.jsx)("div",{className:"header-div-three"}),Object(n.jsx)("div",{className:"header-div-foor"}),Object(n.jsx)("div",{className:"header-div-five"}),Object(n.jsx)("div",{className:"header-div-six"}),Object(n.jsx)("div",{className:"header-div-h1",children:Object(n.jsx)("h1",{children:"<---To-Do-App---<"})})]})}c(28);var D=function(){return Object(n.jsx)(v,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(C,{}),Object(n.jsx)(N,{}),Object(n.jsx)(y,{})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),o(e),i(e)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),T()}},[[29,1,2]]]);
//# sourceMappingURL=main.0bae722c.chunk.js.map