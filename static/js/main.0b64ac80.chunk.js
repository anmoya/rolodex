(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(3),a=n.n(o),i=(n(13),n(4)),u=n(5),h=n(7),l=n(6),d=(n(14),n(15),n(16),function(e){var t=e.monster,n=t.id,s=t.name,c=t.email;return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"",src:"https://robohash.org/".concat(n,"?set=set1&size=180x180")}),Object(r.jsx)("h1",{children:s}),Object(r.jsx)("h3",{children:c})]})}),j=function(e){return console.log(e),Object(r.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(r.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Monster Rolodex"}),Object(r.jsx)(m,{placeholder:"Search monster...",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(r.jsx)(j,{monsters:c})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.0b64ac80.chunk.js.map