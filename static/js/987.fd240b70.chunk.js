"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[987],{946:function(n,e,t){t.d(e,{Df:function(){return o},GC:function(){return f},Pg:function(){return a},q5:function(){return s},yo:function(){return u}});var r=t(243),c="https://api.themoviedb.org/3",i="76c682e9d9d34956306f5842e1234b80",o=function(){return r.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(i))},a=function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"?api_key=").concat(i))},u=function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(i))},s=function(n){return r.Z.get("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(i))},f=function(n){return r.Z.get("".concat(c,"/search/movie?api_key=").concat(i,"&query=").concat(n,"&include_adult=false"))}},987:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,c,i=t(861),o=t(439),a=t(757),u=t.n(a),s=t(946),f=t(168),l=t(444),d=l.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  width: 1300px;\n"]))),p=l.ZP.li(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  padding: 20px;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),h=t(184),v=function(n){var e=n.reviews;return(0,h.jsx)(d,{children:e.map((function(n){return(0,h.jsxs)(p,{children:[(0,h.jsx)("p",{children:"Author: ".concat(n.author)}),(0,h.jsx)("p",{children:n.content})]},n.id)}))})},x=t(791),m=t(689),g=function(){var n=(0,x.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],c=(0,x.useState)("idle"),a=(0,o.Z)(c,2),f=a[0],l=a[1],d=(0,m.UO)().movieId;return(0,x.useEffect)((function(){l("loading");var n=function(){var n=(0,i.Z)(u().mark((function n(e){var t,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.q5)(e);case 3:t=n.sent,c=t.data,r(c.results),l("fulfilled"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),l("error");case 12:return n.prev=12,n.finish(12);case 14:case"end":return n.stop()}}),n,null,[[0,9,12,14]])})));return function(e){return n.apply(this,arguments)}}();n(d)}),[d]),"idle"===f?(0,h.jsx)("h1",{children:" Loading..."}):"error"===f?(0,h.jsx)("h1",{children:" Smth went wrong. Eror 404"}):(0,h.jsx)("div",{children:0!==t.length?(0,h.jsx)(v,{reviews:t}):(0,h.jsx)("p",{children:"Loading..."})})}},861:function(n,e,t){function r(n,e,t,r,c,i,o){try{var a=n[i](o),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,i){var o=n.apply(e,t);function a(n){r(o,c,i,a,u,"next",n)}function u(n){r(o,c,i,a,u,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=987.fd240b70.chunk.js.map