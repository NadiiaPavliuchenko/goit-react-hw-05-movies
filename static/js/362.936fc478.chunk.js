"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[362],{713:function(n,e,r){var t=r(340).Z.create({baseURL:"https://api.themoviedb.org/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWYxOWY5MTExZmE1MDE5MjdlYjU2Mzg4YmE3MjZhZSIsInN1YiI6IjY1OTVkOGExZDdhNzBhMTJmZjY5MzkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTXi-_yuGDk1w9A9o8nV4Ja99abpdzSpJkiV4VTSkHc"}});e.Z=t},672:function(n,e,r){r.d(e,{Z:function(){return u}});var t,a=r(168),i=r(924).ZP.li(t||(t=(0,a.Z)(["\n  margin-bottom: 10px;\n"]))),c=r(87),o=r(184),u=function(n){return(0,o.jsx)("ul",{children:n.movies.map((function(n){return(0,o.jsx)(i,{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}},362:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,i,c=r(861),o=r(439),u=r(757),s=r.n(u),p=r(713),l=function(){var n=(0,c.Z)(s().mark((function n(e){var r,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.Z)("3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=l,d=r(672),h=r(168),x=r(924),m=x.ZP.form(t||(t=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),b=x.ZP.input(a||(a=(0,h.Z)(["\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-right: 10px;\n  width: 300px;\n"]))),Z=x.ZP.button(i||(i=(0,h.Z)(["\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),v=r(184),g=function(n){return(0,v.jsxs)(m,{onSubmit:function(e){e.preventDefault();var r=e.target.querySelector("input").value;n.onSubmit(r),e.target.reset()},children:[(0,v.jsx)("label",{children:(0,v.jsx)(b,{placeholder:"Enter film name"})}),(0,v.jsx)(Z,{type:"submit",children:"Search"})]})},j=r(791),k=r(87),y=function(){var n=(0,k.lr)(),e=(0,o.Z)(n,2),r=e[0],t=e[1],a=(0,j.useState)([]),i=(0,o.Z)(a,2),u=i[0],p=i[1];return(0,j.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=r.get("query")){n.next=3;break}return n.abrupt("return");case 3:return n.prev=3,n.next=6,f(e);case 6:t=n.sent,p(t.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{onSubmit:function(n){t({query:n})}}),u.length>0&&(0,v.jsx)(d.Z,{movies:u})]})}}}]);
//# sourceMappingURL=362.936fc478.chunk.js.map