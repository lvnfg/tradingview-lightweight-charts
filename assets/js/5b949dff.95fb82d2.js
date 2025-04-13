"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78331"],{84567:function(e,i,c){c.r(i),c.d(i,{default:()=>d,frontMatter:()=>t,metadata:()=>a,assets:()=>l,toc:()=>o,contentTitle:()=>n});var a=JSON.parse('{"id":"price-scale","title":"Price scale","description":"Price Scale (or price axis) is a vertical scale that mostly maps prices to coordinates and vice versa.","source":"@site/versioned_docs/version-5.0/price-scale.md","sourceDirName":".","slug":"/price-scale","permalink":"/lightweight-charts/docs/price-scale","draft":false,"unlisted":false,"tags":[],"version":"5.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Chart types","permalink":"/lightweight-charts/docs/chart-types"},"next":{"title":"Time scale","permalink":"/lightweight-charts/docs/time-scale"}}'),s=c("85893"),r=c("50065");let t={sidebar_position:3},n="Price scale",l={},o=[{value:"Creating a price scale",id:"creating-a-price-scale",level:2},{value:"Removing a price scale",id:"removing-a-price-scale",level:2}];function h(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"price-scale",children:"Price scale"})}),"\n",(0,s.jsx)(i.p,{children:"Price Scale (or price axis) is a vertical scale that mostly maps prices to coordinates and vice versa.\nThe rules of converting depend on a price scale mode, a height of the chart and visible part of the data."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Price scales",src:c(96781).Z+"",title:"Price scales",width:"687",height:"387"})}),"\n",(0,s.jsxs)(i.p,{children:["By default, chart has 2 predefined price scales: ",(0,s.jsx)(i.code,{children:"left"})," and ",(0,s.jsx)(i.code,{children:"right"}),", and an unlimited number of overlay scales."]}),"\n",(0,s.jsxs)(i.p,{children:["Only ",(0,s.jsx)(i.code,{children:"left"})," and ",(0,s.jsx)(i.code,{children:"right"})," price scales could be displayed on the chart, all overlay scales are hidden."]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to change ",(0,s.jsx)(i.code,{children:"left"})," price scale, you need to use ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/ChartOptionsBase#leftpricescale",children:(0,s.jsx)(i.code,{children:"leftPriceScale"})})," option, to change ",(0,s.jsx)(i.code,{children:"right"})," price scale use ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/ChartOptionsBase#rightpricescale",children:(0,s.jsx)(i.code,{children:"rightPriceScale"})}),", to change default options for an overlay price scale use ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/ChartOptionsBase#overlaypricescales",children:(0,s.jsx)(i.code,{children:"overlayPriceScales"})})," option."]}),"\n",(0,s.jsxs)(i.p,{children:["Alternatively, you can use ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/IChartApi#pricescale",children:(0,s.jsx)(i.code,{children:"IChartApi.priceScale"})})," method to get an API object of any price scale or ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#pricescale",children:(0,s.jsx)(i.code,{children:"ISeriesApi.priceScale"})})," to get an API object of series' price scale (the price scale that the series is attached to)."]}),"\n",(0,s.jsx)(i.h2,{id:"creating-a-price-scale",children:"Creating a price scale"}),"\n",(0,s.jsxs)(i.p,{children:["By default a chart has only 2 price scales: ",(0,s.jsx)(i.code,{children:"left"})," and ",(0,s.jsx)(i.code,{children:"right"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to create an overlay price scale, you can simply assign ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon#pricescaleid",children:(0,s.jsx)(i.code,{children:"priceScaleId"})})," option to a series (note that a value should be differ from ",(0,s.jsx)(i.code,{children:"left"})," and ",(0,s.jsx)(i.code,{children:"right"}),") and a chart will automatically create an overlay price scale with provided ID.\nIf a price scale with such ID already exists then a series will be attached to this existing price scale.\nFurther you can use provided price scale ID to get its corresponding API object via ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/IChartApi#pricescale",children:(0,s.jsx)(i.code,{children:"IChartApi.priceScale"})})," method."]}),"\n",(0,s.jsx)(i.h2,{id:"removing-a-price-scale",children:"Removing a price scale"}),"\n",(0,s.jsxs)(i.p,{children:["The default price scales (",(0,s.jsx)(i.code,{children:"left"})," and ",(0,s.jsx)(i.code,{children:"right"}),") cannot be removed, you can only hide them by setting ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions#visible",children:(0,s.jsx)(i.code,{children:"visible"})})," option to ",(0,s.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"An overlay price scale exists while there is at least 1 series attached to this price scale.\nThus, to remove an overlay price scale remove all series attached to this price scale."})]})}function d(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},96781:function(e,i,c){c.d(i,{Z:function(){return a}});let a=c.p+"assets/images/price-scales-5ff372fd08578f74710940c724ad5df4.png"},50065:function(e,i,c){c.d(i,{Z:function(){return n},a:function(){return t}});var a=c(67294);let s={},r=a.createContext(s);function t(e){let i=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);