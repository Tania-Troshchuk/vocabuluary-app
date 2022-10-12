(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{43:function(t,e,s){},44:function(t,e,s){},47:function(t,e,s){},48:function(t,e,s){},49:function(t,e,s){},50:function(t,e,s){},51:function(t,e,s){},52:function(t,e,s){"use strict";s.r(e);var a=s(0),c=s.n(a),n=s(23),r=s.n(n),i=s(17),l=s(9),o=s(14),d=localStorage.getItem("tests-history"),j=null!==d?JSON.parse(d):[],b=Object(o.b)({name:"tests-history",initialState:j,reducers:{add:function(t,e){return t.push(e.payload),localStorage.setItem("tests-history",JSON.stringify(t)),t}}}),u=b.reducer,h=b.actions,_=s(8),O=localStorage.getItem("vocabulary"),m=null!==O?JSON.parse(O):[],x=Object(o.b)({name:"words",initialState:m,reducers:{add:function(t,e){var s={word:e.payload.word,translation:e.payload.translation},a=!1;return t.forEach((function(t){var s;t.word===e.payload.word&&((s=t.translation).push.apply(s,Object(_.a)(e.payload.translation)),a=!0)})),a||t.push(s),localStorage.setItem("vocabulary",JSON.stringify(t)),t},remove:function(t,e){var s=t.filter((function(t){return t.word!==e.payload}));return localStorage.setItem("vocabulary",JSON.stringify(s)),s}}}),p=x.reducer,v=x.actions,f=Object(o.a)({reducer:{vocabulary:p,history:u}}),N=(s(43),s(3)),y=(s(44),s(25)),g=s.n(y),w=s(1),S=function(t){var e=t.to,s=t.title;return Object(w.jsx)(i.b,{to:e,end:!0,className:function(t){var e=t.isActive;return g()("navigation__link",{"navigation__link--active":e})},children:s})},k=(s(47),function(){return Object(w.jsx)("nav",{className:"navigation",children:Object(w.jsx)("ul",{className:"navigation__list",children:[{to:"/",title:"\u0421\u043b\u043e\u0432\u043d\u0438\u043a"},{to:"/add-word",title:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u043b\u043e\u0432\u043e"},{to:"/test",title:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430"},{to:"/tests-history",title:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043e\u043a"}].map((function(t){return Object(w.jsx)("li",{className:"navigation__item",children:Object(w.jsx)(S,{to:t.to,title:t.title})},t.title)}))})})}),J=s(4),I=(l.b,l.c),M=(s(48),function(){var t=Object(a.useState)(""),e=Object(J.a)(t,2),s=e[0],c=e[1],n=Object(a.useState)(""),r=Object(J.a)(n,2),i=r[0],o=r[1],d=Object(a.useState)(!1),j=Object(J.a)(d,2),b=j[0],u=j[1],h=Object(a.useState)(!1),_=Object(J.a)(h,2),O=_[0],m=_[1],x=I((function(t){return t.vocabulary})),p=Object(l.b)();return Object(w.jsx)("section",{className:"page",children:Object(w.jsxs)("div",{className:"page__section",children:[Object(w.jsx)("h2",{className:"page__title",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(w.jsxs)("div",{className:"page__content add-word",children:[Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e,a=x.find((function(t){return t.word===s}));a&&a.translation.includes(i)?m(!0):(e={word:s,translation:[i]},p(v.add(e)),c(""),o(""),u(!0),m(!1),setTimeout((function(){u(!1)}),500))},className:"add-word__form",children:[Object(w.jsxs)("label",{htmlFor:"field-en",className:"add-word__field-title",children:["\u041d\u043e\u0432\u0435 \u0441\u043b\u043e\u0432\u043e:",Object(w.jsx)("input",{type:"text",name:"English word",id:"field-en",className:"add-word__field",value:s,placeholder:"\u043d\u0430\u0434\u0440\u0443\u043a\u0443\u0439 \u0441\u043b\u043e\u0432\u043e",onChange:function(t){c(t.target.value)},required:!0})]}),Object(w.jsxs)("label",{htmlFor:"field-ua",className:"add-word__field-title",children:["\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434:",Object(w.jsx)("input",{type:"text",name:"Translation",id:"field-ua",className:"add-word__field",value:i,placeholder:"\u043d\u0430\u0434\u0440\u0443\u043a\u0443\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434",onChange:function(t){o(t.target.value)},required:!0})]}),Object(w.jsx)("button",{type:"submit",className:"add-word__button",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]}),b&&Object(w.jsx)("div",{className:"add-word__message add-word__message--success",children:"\u0421\u043b\u043e\u0432\u043e \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u043e"}),O&&Object(w.jsx)("div",{className:"add-word__message add-word__message--warning",children:"\u0421\u043b\u043e\u0432\u043e \u0437 \u0442\u0430\u043a\u0438\u043c \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u043e\u043c \u0432\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u0443 \u0441\u043b\u043e\u0432\u043d\u0438\u043a\u0443"})]})]})})}),T=function(){return Object(w.jsx)("h2",{className:"page__title",children:"Page not found"})},C=s(16),E=function(t){return Math.floor(Math.random()*t)},F=function(t,e,s){return function(t,e){for(var s=[];s.length<t;){var a=E(e.length);s.includes(a)||s.push(a)}return s}(e,t).map((function(e){var a=t[e],c=function(t,e,s){for(var a=[e[t].translation.join(", ")];a.length<s;){var c=E(e.length),n=e[c].translation.join(", ");c===t||a.includes(n)||a.push(n)}return a}(e,t,s);return Object(C.a)(Object(C.a)({},a),{},{options:Object(_.a)(c).sort((function(){return.5-Math.random()}))})}))},q=function(t){var e=t.result;return Object(w.jsx)("div",{className:"test__result",children:10===e?Object(w.jsxs)("div",{className:"test__result test__result--excellent",children:[Object(w.jsx)("div",{children:"\ud83c\udf89\ud83c\udf89\ud83c\udf89"}),"\u0412\u0456\u0442\u0430\u0454\u043c\u043e ".concat(10*e,"% \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0445 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439")]}):"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0445 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439: ".concat(10*e,"%")})},X=function(t){var e=t.vocabulary,s=Object(_.a)(e),c=Object(a.useState)(0),n=Object(J.a)(c,2),r=n[0],i=n[1],o=Object(a.useState)(0),d=Object(J.a)(o,2),j=d[0],b=d[1],u=Object(a.useState)(!1),O=Object(J.a)(u,2),m=O[0],x=O[1],p=Object(a.useMemo)((function(){return F(s,10,4)}),[]),v=Object(a.useMemo)((function(){return[]}),[]),f=Object(l.b)(),N=function(t,e){var s,a=r+1,c={word:t.word,translation:t.translation,choosedTranslation:e};v.push(c),t.translation.join(", ")===e&&b((function(t){return t+1})),a<10?i(a):(x(!0),s=v,f(h.add(s)))};return Object(w.jsx)("div",{className:"page__content test",children:m?Object(w.jsx)(q,{result:j}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"test__word",children:[Object(w.jsx)("div",{className:"test__word-number",children:"\u0421\u043b\u043e\u0432\u043e: ".concat(r+1," \u0437 ").concat(10)}),Object(w.jsx)("div",{className:"test__word-text",children:p[r].word})]}),Object(w.jsx)("div",{className:"test__translation",children:p[r].options.map((function(t){return Object(w.jsx)("button",{type:"button",className:"test__translation-item",onClick:function(){return N(p[r],t)},children:t},t)}))})]})})},A=(s(49),function(){var t=Object(l.c)((function(t){return t.vocabulary}));return Object(w.jsx)("section",{className:"page",children:Object(w.jsxs)("div",{className:"page__section",children:[Object(w.jsx)("h2",{className:"page__title",children:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430"}),t.length>=10?Object(w.jsx)(X,{vocabulary:t}):Object(w.jsxs)("div",{className:"page__description",children:["\u0414\u043b\u044f \u043f\u0440\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0442\u0435\u0441\u0442\u0443 \u0432 \u0441\u043b\u043e\u0432\u043d\u0438\u043a\u0443 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0449\u043e\u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0435 10 \u0441\u043b\u0456\u0432, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443\xa0",Object(w.jsx)("span",{className:"page__description page__description--main",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u043b\u043e\u0432\u043e"}),"\xa0\u043b\u0456\u0432\u043e\u0440\u0443\u0447, \u0449\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0456 \u0441\u043b\u043e\u0432\u0430"]})]})})}),B=0,D=function(){return B+=1},P=function(t){var e=t.test,s=t.number,a=e.reduce((function(t,e){return e.translation.join(", ")===e.choosedTranslation?t+1:t}),0);return Object(w.jsxs)("div",{className:"page__content tests-history",children:[Object(w.jsx)("h3",{className:"tests-history__title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u2116 ".concat(s+1,": ").concat(10*a,"%")}),Object(w.jsxs)("table",{className:"tests-history__table",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{className:"tests-history__item",children:[Object(w.jsx)("th",{className:"tests-history__word tests-history__word--title",children:"\u041d\u043e\u0432\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(w.jsx)("th",{className:"tests-history__word tests-history__word--title",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434"}),Object(w.jsx)("th",{className:"tests-history__word tests-history__word--title",children:"\u041e\u0431\u0440\u0430\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434"})]})}),Object(w.jsx)("tbody",{children:e.map((function(t){var e=t.word,s=t.translation,a=t.choosedTranslation;return Object(w.jsxs)("tr",{className:g()("tests-history__item",{"tests-history__item--right":s.join(", ")===a}),children:[Object(w.jsx)("td",{className:"tests-history__word",children:e}),Object(w.jsx)("td",{className:"tests-history__word",children:s.join(", ")}),Object(w.jsx)("td",{className:"tests-history__word",children:a})]},D())}))})]})]})},z=(s(50),function(){var t=I((function(t){return t.history}));return Object(w.jsx)("section",{className:"page",children:Object(w.jsxs)("div",{className:"page__section",children:[Object(w.jsx)("h2",{className:"page__title",children:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043e\u043a"}),t.length?t.map((function(t,e){return Object(w.jsx)(P,{number:e,test:t},D())})):Object(w.jsxs)("div",{className:"page__description",children:["\u0412\u0438 \u0449\u0435 \u043d\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u043b\u0438 \u0441\u0432\u043e\u0457 \u0437\u043d\u0430\u043d\u043d\u044f, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443\xa0",Object(w.jsx)("span",{className:"page__description page__description--main",children:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430"}),"\xa0\u043b\u0456\u0432\u043e\u0440\u0443\u0447, \u0449\u043e\u0431 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0441\u0432\u043e\u0457 \u0441\u0438\u043b\u0438"]})]})})}),G=(s(51),function(){var t=I((function(t){return t.vocabulary})),e=Object(l.b)();return Object(w.jsx)("section",{className:"page",children:Object(w.jsxs)("div",{className:"page__section",children:[Object(w.jsx)("h2",{className:"page__title",children:"\u0421\u043b\u043e\u0432\u043d\u0438\u043a"}),t.length?Object(w.jsx)("div",{className:"page__content vocabulary",children:Object(w.jsxs)("table",{className:"vocabulary__table",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{className:"vocabulary__item",children:[Object(w.jsx)("th",{className:"vocabulary__word vocabulary__word--title",children:"\u041d\u043e\u0432\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(w.jsx)("th",{className:"vocabulary__word vocabulary__word--title",children:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434"}),Object(w.jsx)("th",{className:"vocabulary__word vocabulary__word--title",children:"X"})]})}),Object(w.jsx)("tbody",{children:t.map((function(t){var s=t.word,a=t.translation;return Object(w.jsxs)("tr",{className:"vocabulary__item",children:[Object(w.jsx)("td",{className:"vocabulary__word",children:s}),Object(w.jsx)("td",{className:"vocabulary__word",children:a.length>=2?a.join(", "):a}),Object(w.jsx)("td",{className:"vocabulary__word",children:Object(w.jsx)("button",{className:"vocabulary__button",type:"button",onClick:function(){return t=s,e(v.remove(t));var t},children:"X"})})]},s)}))})]})}):Object(w.jsxs)("div",{className:"page__description",children:["\u0421\u043b\u043e\u0432\u043d\u0438\u043a \u043f\u043e\u043a\u0438 \u0449\u043e \u043f\u0443\u0441\u0442\u0438\u0439, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443\xa0",Object(w.jsx)("span",{className:"page__description page__description--main",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u043b\u043e\u0432\u043e"}),"\xa0\u043b\u0456\u0432\u043e\u0440\u0443\u0447, \u0449\u043e\u0431 \u043f\u043e\u0447\u0430\u0442\u0438 \u043d\u0430\u043f\u043e\u0432\u043d\u044e\u0432\u0430\u0442\u0438 \u0439\u043e\u0433\u043e"]})]})})}),H=function(){return Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)(k,{}),Object(w.jsx)("main",{children:Object(w.jsxs)(N.d,{children:[Object(w.jsx)(N.b,{path:"/",element:Object(w.jsx)(G,{})}),Object(w.jsx)(N.b,{path:"/add-word",element:Object(w.jsx)(M,{})}),Object(w.jsx)(N.b,{path:"/test",element:Object(w.jsx)(A,{})}),Object(w.jsx)(N.b,{path:"/tests-history",element:Object(w.jsx)(z,{})}),Object(w.jsx)(N.b,{path:"/home",element:Object(w.jsx)(N.a,{to:"/",replace:!0})}),Object(w.jsx)(N.b,{path:"*",element:Object(w.jsx)(T,{})})]})})]})};r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(l.a,{store:f,children:Object(w.jsx)(i.a,{children:Object(w.jsx)(H,{})})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.61ac53ff.chunk.js.map