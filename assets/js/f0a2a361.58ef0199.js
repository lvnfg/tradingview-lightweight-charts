"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11402"],{70625:function(e,t,i){i.r(t),i.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>h});var n=JSON.parse('{"id":"intro","title":"Getting started","description":"Requirements","source":"@site/versioned_docs/version-4.0/intro.md","sourceDirName":".","slug":"/","permalink":"/lightweight-charts/docs/4.0/","draft":false,"unlisted":false,"tags":[],"version":"4.0","sidebarPosition":0,"frontMatter":{"slug":"/","id":"intro","sidebar_position":0},"sidebar":"docsSidebar","next":{"title":"Series types","permalink":"/lightweight-charts/docs/4.0/series-types"}}'),s=i("85893"),a=i("50065");let r={slug:"/",id:"intro",sidebar_position:0},h="Getting started",o={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Build variants",id:"build-variants",level:3},{value:"License and attribution",id:"license-and-attribution",level:2},{value:"Creating a chart",id:"creating-a-chart",level:2},{value:"Creating a series",id:"creating-a-series",level:2},{value:"Setting and updating a data",id:"setting-and-updating-a-data",level:2},{value:"Setting the data to a series",id:"setting-the-data-to-a-series",level:3},{value:"Updating the data in a series",id:"updating-the-data-in-a-series",level:3}];function l(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.p,{children:["First of all, Lightweight Charts\u2122 is ",(0,s.jsx)(t.em,{children:"a client-side"})," library.\nThis means that it does not and cannot work on the server-side (i.e. NodeJS), at least out of the box."]}),"\n",(0,s.jsxs)(t.p,{children:["The code of ",(0,s.jsx)(t.code,{children:"lightweight-charts"})," package is targeted to ",(0,s.jsxs)(t.a,{href:"https://262.ecma-international.org/7.0/",children:[(0,s.jsx)(t.em,{children:"es2016"})," language specification"]}),".\nThus, all the browsers you will have to work with should support this language revision (see ",(0,s.jsx)(t.a,{href:"https://kangax.github.io/compat-table/es2016plus/",children:"this compatibility table"}),").\nIf you need to support the previous revisions, you could try to setup a transpilation of the package to the target you need to support in your build system (e.g. by using Babel).\nIf you'll have any issues with that, please raise an issue on github with the details and we'll investigate possible ways to solve it."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["The first thing you need to do to use ",(0,s.jsx)(t.code,{children:"lightweight-charts"})," is to install it from ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"npm install --save lightweight-charts\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Note that the package is shipped with TypeScript declarations, so you can easily use it within TypeScript code."})}),"\n",(0,s.jsx)(t.h3,{id:"build-variants",children:"Build variants"}),"\n",(0,s.jsx)(t.p,{children:"The library ships with the following build variants:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Dependencies included"}),(0,s.jsx)(t.th,{children:"Mode"}),(0,s.jsx)(t.th,{children:"ES module"}),(0,s.jsx)(t.th,{children:"CommonJS \u26A0\uFE0F"}),(0,s.jsxs)(t.th,{children:["IIFE (",(0,s.jsx)(t.code,{children:"window.LightweightCharts"}),")"]})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"PROD"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.production.mjs"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.production.cjs"})}),(0,s.jsx)(t.td,{children:"N/A"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"DEV"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.development.mjs"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.development.cjs"})}),(0,s.jsx)(t.td,{children:"N/A"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Yes (standalone)"}),(0,s.jsx)(t.td,{children:"PROD"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.standalone.production.mjs"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.standalone.production.js"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Yes (standalone)"}),(0,s.jsx)(t.td,{children:"DEV"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.standalone.development.mjs"})}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lightweight-charts.standalone.development.js"})})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["\u26A0\uFE0F ",(0,s.jsx)(t.strong,{children:"Deprecation note:"})," CommonJS support will be removed from the library at the start of 2024."]}),"\n",(0,s.jsx)(t.h2,{id:"license-and-attribution",children:"License and attribution"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"The Lightweight Charts\u2122 license requires specifying TradingView as the product creator."})}),"\n",(0,s.jsxs)(t.p,{children:['You shall add the "attribution notice" from the ',(0,s.jsx)(t.a,{href:"https://github.com/tradingview/lightweight-charts/blob/master/NOTICE",children:"NOTICE"})," file and a link to ",(0,s.jsx)(t.a,{href:"https://www.tradingview.com",children:"https://www.tradingview.com"})," to the page of your website or mobile application that is available to your users."]}),"\n",(0,s.jsx)(t.p,{children:"As thanks for creating Lightweight Charts\u2122, we'd be grateful if you add the attribution notice in a prominent place."}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-chart",children:"Creating a chart"}),"\n",(0,s.jsx)(t.p,{children:"Once the library has been installed in your repo you're ready to create your first chart."}),"\n",(0,s.jsx)(t.p,{children:"First of all, in a file where you would like to create a chart you need to import the library:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { createChart } from 'lightweight-charts';\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/functions/createChart",children:(0,s.jsx)(t.code,{children:"createChart"})})," is the entry-point for creating charts. You can use it to create as many charts as you need:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { createChart } from 'lightweight-charts';\n\n// ...\n\n// somewhere in your code\nconst firstChart = createChart(document.getElementById('firstContainer'));\nconst secondChart = createChart(document.getElementById('secondContainer'));\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The result of this function is a ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi",children:(0,s.jsx)(t.code,{children:"IChartApi"})})," object, which you need to use to work with a chart instance."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-series",children:"Creating a series"}),"\n",(0,s.jsx)(t.p,{children:"Once your chart is created it is ready to display data."}),"\n",(0,s.jsxs)(t.p,{children:["The basic primitive to display a data is ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ISeriesApi",children:"a series"}),".\nThere are different types of series:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Area"}),"\n",(0,s.jsx)(t.li,{children:"Bar"}),"\n",(0,s.jsx)(t.li,{children:"Baseline"}),"\n",(0,s.jsx)(t.li,{children:"Candlestick"}),"\n",(0,s.jsx)(t.li,{children:"Histogram"}),"\n",(0,s.jsx)(t.li,{children:"Line"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To create a series with desired type you need to use appropriate method from ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi",children:(0,s.jsx)(t.code,{children:"IChartApi"})}),".\nAll of them have the same naming ",(0,s.jsx)(t.code,{children:"add<type>Series"}),", where ",(0,s.jsx)(t.code,{children:"<type>"})," is a type of a series you'd like to create:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { createChart } from 'lightweight-charts';\n\nconst chart = createChart(container);\n\nconst areaSeries = chart.addAreaSeries();\nconst barSeries = chart.addBarSeries();\nconst baselineSeries = chart.addBaselineSeries();\n// ... and so on\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Please look at ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/series-types",children:"this page"})," for more information about different series types."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that ",(0,s.jsx)(t.strong,{children:"a series cannot be transferred from one type to another one"})," since different series types have different data and options types."]}),"\n",(0,s.jsx)(t.h2,{id:"setting-and-updating-a-data",children:"Setting and updating a data"}),"\n",(0,s.jsx)(t.p,{children:"Once your chart and series are created it's time to set data to the series."}),"\n",(0,s.jsx)(t.p,{children:"Note that regardless of the series type, the API calls are the same (the type of the data might be different though)."}),"\n",(0,s.jsx)(t.h3,{id:"setting-the-data-to-a-series",children:"Setting the data to a series"}),"\n",(0,s.jsxs)(t.p,{children:["To set the data (or to replace all data items) to a series you need to use ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ISeriesApi#setdata",children:(0,s.jsx)(t.code,{children:"ISeriesApi.setData"})})," method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"chart replaceThemeConstants",children:"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst areaSeries = chart.addAreaSeries({\n    lineColor: LINE_LINE_COLOR, topColor: AREA_TOP_COLOR,\n    bottomColor: AREA_BOTTOM_COLOR,\n});\nareaSeries.setData([\n    { time: '2018-12-22', value: 32.51 },\n    { time: '2018-12-23', value: 31.11 },\n    { time: '2018-12-24', value: 27.02 },\n    { time: '2018-12-25', value: 27.32 },\n    { time: '2018-12-26', value: 25.17 },\n    { time: '2018-12-27', value: 28.89 },\n    { time: '2018-12-28', value: 25.46 },\n    { time: '2018-12-29', value: 23.92 },\n    { time: '2018-12-30', value: 22.68 },\n    { time: '2018-12-31', value: 22.67 },\n]);\n\nconst candlestickSeries = chart.addCandlestickSeries({\n    upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false,\n    wickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR,\n});\ncandlestickSeries.setData([\n    { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },\n    { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },\n    { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },\n    { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },\n    { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },\n    { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },\n    { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },\n    { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },\n    { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },\n    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },\n]);\n\nchart.timeScale().fitContent();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"updating-the-data-in-a-series",children:"Updating the data in a series"}),"\n",(0,s.jsx)(t.p,{children:"In a case when your data is updated (e.g. real-time updates) you might want to update the chart as well."}),"\n",(0,s.jsxs)(t.p,{children:["But using ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ISeriesApi#setdata",children:(0,s.jsx)(t.code,{children:"ISeriesApi.setData"})})," very often might affect the performance and we do not recommend to do this.\nAlso it replaces all series data with the new one, and probably this is not what you're looking for."]}),"\n",(0,s.jsxs)(t.p,{children:["Thus, to update the data you can use a method ",(0,s.jsx)(t.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ISeriesApi#update",children:(0,s.jsx)(t.code,{children:"ISeriesApi.update"})}),".\nIt allows you to update the last data item or add a new one much faster without affecting the performance:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { createChart } from 'lightweight-charts';\n\nconst chart = createChart(container);\n\nconst areaSeries = chart.addAreaSeries();\nareaSeries.setData([\n    // ... other data items\n    { time: '2018-12-31', value: 22.67 },\n]);\n\nconst candlestickSeries = chart.addCandlestickSeries();\ncandlestickSeries.setData([\n    // ... other data items\n    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },\n]);\n\n// sometime later\n\n// update the most recent bar\nareaSeries.update({ time: '2018-12-31', value: 25 });\ncandlestickSeries.update({ time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 112 });\n\n// creating the new bar\nareaSeries.update({ time: '2019-01-01', value: 20 });\ncandlestickSeries.update({ time: '2019-01-01', open: 112, high: 112, low: 100, close: 101 });\n"})})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return h},a:function(){return r}});var n=i(67294);let s={},a=n.createContext(s);function r(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);