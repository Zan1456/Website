(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{8205:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff",function(){return t(3696)}])},3696:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return d}});var a=t(8014),n=t(744),s=t.n(n),l=t(2044),i=(t(6168),t(1476));var o=function(e){return fetch(e).then((function(e){return e.json()}))},c=["Admin","Sr. Moderator","Moderator","Trainee"];var d=!0;r.default=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined")),(0,l.Z)("staff").t;var r=(0,i.ZP)("/api/staff",o),t=r.data;return r.error,t&&t.sort((function(e,r){return c.indexOf(e.role)-c.indexOf(r.role)})),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"bg-gradient-to-br from-black via-white/5 to-black",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24",children:(0,a.jsxs)("div",{className:"space-y-8 sm:space-y-12",children:[(0,a.jsxs)("div",{className:"space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl mb-24",children:[(0,a.jsx)("h2",{className:"text-3xl font-semibold text-white tracking-tight sm:text-4xl",children:"Staff Members"}),(0,a.jsx)("p",{className:"text-md text-white/75",children:"The dedicated people keeping our servers and community clean of rule breakers."})]}),(0,a.jsx)("ul",{className:"mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4",children:t&&t.map((function(e){return(0,a.jsx)("li",{className:"p-5 rounded-lg bg-black/50 select-none border border-transparent lg:transition lg:ease-in-out lg:duration-250 lg:hover:scale-110 lg:hover:bg-black/75 lg:hover:border-indigo-600/50",children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("img",{className:"mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 border-2 border-indigo-500",src:e.image,alt:""}),(0,a.jsxs)("div",{className:"text-xs font-medium lg:text-sm space-y-1",children:[(0,a.jsx)("h3",{className:"text-white",children:e.name}),(0,a.jsx)("p",{className:s()({"text-indigo-500":"Admin"===e.role,"text-yellow-500":"Sr. Moderator"===e.role,"text-red-500":"Moderator"===e.role,"text-cyan-500":"Trainee"===e.role}),children:e.role})]})]})},e.name)}))})]})})})})}}},function(e){e.O(0,[44,774,888,179],(function(){return r=8205,e(e.s=r);var r}));var r=e.O();_N_E=r}]);