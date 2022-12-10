"use strict";(self.webpackChunkgroup_4_front=self.webpackChunkgroup_4_front||[]).push([[46],{1620:function(n,e,i){i.d(e,{Z:function(){return m}});var t=i(168),r=i(7691);i(2791);var o=i.p+"static/media/ellipse-purple.e7cbaa19930a91cc921b259fee050777.svg";var c,d,s,a=i.p+"static/media/ellipse-peach.67efe2beefff5419592e10e36bf84721.svg",l=r.ZP.div(c||(c=(0,t.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  background-color: #e7eaf2;\n  @media (min-width: 768px) {\n    background-image: url(","), url(",");\n    background-repeat: no-repeat, no-repeat;\n    background-position: left bottom, top right;\n  }\n"])),o,a),h=r.ZP.div(d||(d=(0,t.Z)(["\n  background-color: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(25px);\n"]))),x=r.ZP.div(s||(s=(0,t.Z)(["\n  width: 100%;\n  padding: 0 20px;\n  margin: 0 auto;\n\n  @media (min-width: 768px) {\n    padding: 0 32px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 1280px;\n    padding: 0 18px;\n  }\n"]))),p=i(184),m=function(n){var e=n.children;return(0,p.jsx)(l,{children:(0,p.jsx)(h,{children:(0,p.jsx)(x,{children:e})})})}},7046:function(n,e,i){i.r(e),i.d(e,{default:function(){return en}});var t,r,o,c,d,s,a,l,h,x,p,m,u,f,g,w,b,Z=i(1620),j=i(2791),y=i(168),v=i(7691),k=i(4932),z=i(184),C=function(){return(0,z.jsx)(D,{children:(0,z.jsx)(P,{children:"No transactions"})})},D=v.ZP.div(t||(t=(0,y.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin: 0 auto;\nbackground-color: transparent;\nborder: 1px solid #DCDCDF;\n@media screen and (min-width: ",") {\n    width:280px;\n    height:282px;}\n@media screen and (min-width: ",") {\n   width:704px;\n  height:312px;\n  }\n@media screen and (min-width: ",") {\n  width: 715px;\n  }\n"])),k.Z.sizeScreen.mobile,k.Z.sizeScreen.tablet,k.Z.sizeScreen.desktop),P=v.ZP.p(r||(r=(0,y.Z)(["\n   font-family: ",";\nfont-style: normal;\nfont-weight: 700;\nfont-size: 30px;\nline-height: 18px;\ncolor: #DCDCDF; \n"])),k.Z.fonts.main),S=i(2426),F=i.n(S),T=function(n){switch(n){case 0:return"House rent and keeping";case 1:return"Food";case 2:return"Car";case 3:return"Child care";case 4:return"Education";case 5:return"Self care";case 6:return"Leisure";case 7:return"Household products";case 8:return"Help UA Armed Force";case 999:return"Other expenses";default:return"---"}},H=function(n){var e=n.items,i=e.map((function(n){return n})).sort((function(n,e){return e.date.split(".").reverse().join().localeCompare(n.date.split(".").reverse().join())}));return(0,z.jsx)(z.Fragment,{children:e.length>0?(0,z.jsx)(_,{children:i.map((function(n){var e=n.date,i=n.transactionType,t=n.category,r=n.comment,o=n.amount,c=n.balance,d=n._id;return(0,z.jsxs)(M,{color:i,children:[(0,z.jsxs)(A,{children:[(0,z.jsx)(E,{children:"Date"}),(0,z.jsx)(Y,{children:F().utc(e).format("DD.MM.YY")})]}),(0,z.jsxs)(A,{children:[(0,z.jsx)(E,{children:"Type"}),"income"===i?(0,z.jsx)(Y,{children:"+"}):(0,z.jsx)(Y,{children:"-"})," "]}),(0,z.jsxs)(A,{children:[(0,z.jsx)(E,{children:"Category"}),(0,z.jsx)(Y,{children:T(t)})]}),(0,z.jsxs)(A,{children:[(0,z.jsx)(E,{children:"Comment"}),(0,z.jsx)(Y,{children:r||"---"})]}),(0,z.jsxs)(A,{children:[(0,z.jsx)(E,{children:"Sum"}),"income"===i?(0,z.jsx)(B,{style:{color:"#24CCA7"},children:o.toFixed(2)}):(0,z.jsx)(B,{style:{color:"#FF6596"},children:o.toFixed(2)})]}),(0,z.jsxs)(A,{children:[(0,z.jsx)(E,{children:"Balance"}),(0,z.jsx)(Y,{children:c})]})]},d)}))}):(0,z.jsx)(C,{})})},_=v.ZP.div(o||(o=(0,y.Z)(["\n @media screen and (min-width: ",") {\n    display:flex;\n    flex-direction: column;\n    align-items:center;\n    margin-top: 32px;\n    background-color: #DCDCDF;\n }  \n"])),k.Z.sizeScreen.mobile),M=v.ZP.ul(c||(c=(0,y.Z)(["\n@media screen and (min-width: ",") {\n    box-sizing: border-box;\n    width:280px;\n    height:282px;\n    list-style: none;\n    padding: 0px;\n    border-radius:5px ;\n    margin: 0px 20px 8px 20px;\n    background-color: ",";\n    border-left: 5px solid ;\n    border-color: ","; \n}        \n"])),k.Z.sizeScreen.mobile,k.Z.colors.secondText,(function(n){return function(n){switch(n){case"expense":return"".concat(k.Z.colors.expensesText);case"income":return"".concat(k.Z.colors.incomeText);default:return"".concat(k.Z.colors.secondText)}}(n.color)})),A=v.ZP.li(d||(d=(0,y.Z)(["\n@media screen and (min-width: ",") {\n     display:flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 12px 20px 8px 20px;\n       \n    :not(:last-child) {\n        border-bottom: 1px solid #DCDCDF;\n    }\n    :not(:first-child) {\n        padding-top:12px;\n        padding-bottom:8px;\n    }\n} \n"])),k.Z.sizeScreen.mobile),E=v.ZP.span(s||(s=(0,y.Z)(["\n@media screen and (min-width: ",") {\n    font-family: ",";\nfont-style: normal;\nfont-weight: 700;\nfont-size: 18px;\nline-height: 27px;\ncolor: ",";\n}\n"])),k.Z.sizeScreen.mobile,k.Z.fonts.main,k.Z.colors.mainText),Y=(0,v.ZP)(E)(a||(a=(0,y.Z)(["\n@media screen and (min-width: ",") {\nfont-weight: 400;\nfont-size: 16px;\nline-height: 24px;\ntext-align: right;\nmax-width:100px;\nwhite-space: nowrap;\noverflow: hidden;\ntext-overflow:  ellipsis;\n}\n"])),k.Z.sizeScreen.mobile),B=(0,v.ZP)(Y)(l||(l=(0,y.Z)(["\n@media screen and (min-width: ",") {\n    font-weight: 700;\n}\n"])),k.Z.sizeScreen.mobile),q=function(n){var e=n.items,i=n.columns,t=e.map((function(n){return n})).sort((function(n,e){return e.date.split(".").reverse().join().localeCompare(n.date.split(".").reverse().join())}));return(0,z.jsx)(z.Fragment,{children:e.length>0?(0,z.jsxs)(I,{children:[(0,z.jsx)("table",{children:(0,z.jsx)(L,{children:(0,z.jsx)(N,{children:i.map((function(n){return(0,z.jsxs)(O,{children:[n.Header," "]},n.accessor)}))})})}),(0,z.jsx)(U,{children:(0,z.jsx)(G,{children:(0,z.jsx)("tbody",{children:t.map((function(n){var e=n.date,i=n.transactionType,t=n.category,r=n.comment,o=n.amount,c=n.balance,d=n._id;return(0,z.jsxs)(J,{children:[(0,z.jsx)(K,{children:F().utc(e).format("DD.MM.YY")}),(0,z.jsx)(K,{children:"income"===i?"+":"-"}),(0,z.jsx)(K,{children:T(t)}),(0,z.jsx)(K,{children:r||"---"}),(0,z.jsx)(K,{children:"income"===i?(0,z.jsx)(Q,{style:{color:"".concat(k.Z.colors.incomeText)},children:o.toFixed(2)}):(0,z.jsx)(Q,{style:{color:"".concat(k.Z.colors.expensesText)},children:o.toFixed(2)})}),(0,z.jsx)(K,{children:c})]},d)}))})})})]}):(0,z.jsx)(C,{})})},I=v.ZP.div(h||(h=(0,y.Z)(["\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\n@media screen and (min-width: ","){\n  width:704px;\n  height:312px;\n  margin: 20px 32px 0px 32px;\n  background-color: transparent;\n}\n@media screen and (min-width: ",") {\n  width: 715px;\n  margin: 46px 16px 0px 69px;\n  }\n"])),k.Z.sizeScreen.tablet,k.Z.sizeScreen.desktop),L=v.ZP.thead(x||(x=(0,y.Z)(["\n  display: table-caption;\n  box-sizing:border-box;\n  height: 58px;\n  background-color: ","; \n  padding: 16px 20px 15px 20px;\n  border-radius: 30px;\n"])),k.Z.colors.secondText),N=v.ZP.tr(p||(p=(0,y.Z)(["\n  display:flex;\n  justify-content:space-between;\n"]))),O=v.ZP.th(m||(m=(0,y.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n  text-align:start;\n  color: ",";\n  @media screen and (min-width: ","){\n  width:14.5%;\n}\n  @media screen and (min-width: ",") {\n  width:13.5%;\n}\n:first-child{\n  width: 12%;\n}\n:nth-child(2){\n  width: 16.2%;\n  text-align:center;\n}\n:nth-child(4){\n  width: 17%;\n}\n:nth-child(5){\n  width: 14.8%;\n}\n:nth-child(6){\n  width: 14.6%;\n}\n:nth-last-child(-n + 2){\n text-align: end;\n}\n"])),k.Z.fonts.main,k.Z.colors.mainText,k.Z.sizeScreen.tablet,k.Z.sizeScreen.desktop),U=v.ZP.div(u||(u=(0,y.Z)(["\n  height:254px; \n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    width: 10px; \n    background-color: transparent;}\n  ::-webkit-scrollbar-thumb {\n    background-color: #E7EAF2;\n    border-radius: 9em;\n    box-shadow: inset 1px 1px 10px #f3faf7;\n}\n\n"]))),G=v.ZP.table(f||(f=(0,y.Z)(["\n  display:flex;\n  border-collapse: collapse;\n  justify-content: center;\n"]))),J=v.ZP.tr(g||(g=(0,y.Z)(["\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  width:656px;\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n  color: ","; \n  padding-top:10px;\n  padding-bottom:10px;\n  @media screen and (min-width: ",") {\n    width:675px;\n  }\n:first-child{\n  margin-top:16px;\n  padding-top:0px;\n}\n:not(:last-child){\n border-bottom:  1px solid #DCDCDF;\n}"])),k.Z.fonts.main,k.Z.colors.mainText,k.Z.sizeScreen.desktop),K=v.ZP.td(w||(w=(0,y.Z)(["\n  max-height:36px;\n  text-align:start;\n  display: -webkit-box;\n  -webkit-line-clamp: 2; \n  -webkit-box-orient: vertical;\n  overflow: hidden;\n    @media screen and (min-width: ","){\n  width:14.5%;\n}\n  @media screen and (min-width: ",") {\n  width:13.5%;\n}\n :first-child{\n  width: 12%;\n}\n  :nth-child(2){\n  width: 16.2%;\n    text-align:center;\n}\n  :nth-child(4){\n  width: 17%;\n}\n  :nth-child(5){\n  width: 14.8%;\n}\n  :nth-child(6){\n  width: 14.6%;\n}\n:nth-last-child(-n + 2){\n text-align: end;\n}\n:hover {\n  z-index: 1;\n  overflow: visible;\n}\n"])),k.Z.sizeScreen.tablet,k.Z.sizeScreen.desktop),Q=v.ZP.span(b||(b=(0,y.Z)(["\n  font-weight: 700;\n"]))),R=i(1971),V=i(9434),W=i(3945),X=function(n){return n.transactions.items},$=[{Header:"Date",accessor:"date"},{Header:"Type",accessor:"type"},{Header:"Category",accessor:"category"},{Header:"Comment",accessor:"comment"},{Header:"Sum",accessor:"sum"},{Header:"Balance",accessor:"balance"}],nn=function(){var n=(0,j.useMemo)((function(){return $}),[]),e=(0,V.v9)(X),i=(0,V.I0)();return(0,j.useEffect)((function(){i((0,W.m)())}),[i]),(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(R.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1279px)",large:"(min-width: 1280px)"},children:function(i){return(0,z.jsxs)(j.Fragment,{children:[i.small&&(0,z.jsx)(H,{items:e,columns:n}),i.medium&&(0,z.jsx)(q,{items:e,columns:n}),i.large&&(0,z.jsx)(q,{items:e,columns:n})]})}})})},en=function(){return(0,z.jsx)(Z.Z,{children:(0,z.jsx)(nn,{})})}}}]);
//# sourceMappingURL=46.879e549c.chunk.js.map