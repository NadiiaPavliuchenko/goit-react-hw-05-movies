"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[904],{713:function(e,n,t){var r=t(340).Z.create({baseURL:"https://api.themoviedb.org/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWYxOWY5MTExZmE1MDE5MjdlYjU2Mzg4YmE3MjZhZSIsInN1YiI6IjY1OTVkOGExZDdhNzBhMTJmZjY5MzkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTXi-_yuGDk1w9A9o8nV4Ja99abpdzSpJkiV4VTSkHc"}});n.Z=r},672:function(e,n,t){t.d(n,{Z:function(){return s}});var r,a=t(168),i=t(924).ZP.li(r||(r=(0,a.Z)(["\n  margin-bottom: 10px;\n"]))),c=t(689),u=t(87),o=t(184),s=function(e){var n=(0,c.TH)();return(0,o.jsx)("ul",{children:e.movies.map((function(e){return(0,o.jsx)(i,{children:(0,o.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},904:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(439),i=t(757),c=t.n(i),u=t(791),o=t(672),s=t(713),f=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/trending/movie/day?language=en-US");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=f,p=t(184),d=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],i=n[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:n=e.sent,i(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error fetching trending movies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(o.Z,{movies:t})]})}}}]);
//# sourceMappingURL=904.1f8cd4bd.chunk.js.map