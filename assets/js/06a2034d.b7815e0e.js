"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17526"],{72949:function(e,i,a){a.r(i),a.d(i,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>h,toc:()=>c,contentTitle:()=>n});var t=JSON.parse('{"id":"time-scale","title":"Time scale","description":"Overview","source":"@site/docs/time-scale.md","sourceDirName":".","slug":"/time-scale","permalink":"/lightweight-charts/docs/next/time-scale","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Price scale","permalink":"/lightweight-charts/docs/next/price-scale"},"next":{"title":"Panes","permalink":"/lightweight-charts/docs/next/panes"}}'),s=a("85893"),r=a("50065");let l={sidebar_position:5},n="Time scale",h={},c=[{value:"Overview",id:"overview",level:2},{value:"Time scale appearance",id:"time-scale-appearance",level:3},{value:"Time scale API",id:"time-scale-api",level:3},{value:"Visible range",id:"visible-range",level:2},{value:"Data range",id:"data-range",level:3},{value:"Logical range",id:"logical-range",level:3},{value:"Chart margin",id:"chart-margin",level:2}];function o(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"time-scale",children:"Time scale"})}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"Time scale (or time axis) is a horizontal scale that displays the time of data points at the bottom of the chart."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Time scale",src:a(87294).Z+"",title:"Time scale",width:"687",height:"235"})}),"\n",(0,s.jsxs)(i.p,{children:["The horizontal scale can also represent price or other custom values. Refer to the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/chart-types",children:"Chart types"})," article for more information."]}),"\n",(0,s.jsx)(i.h3,{id:"time-scale-appearance",children:"Time scale appearance"}),"\n",(0,s.jsxs)(i.p,{children:["Use ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/TimeScaleOptions",children:(0,s.jsx)(i.code,{children:"TimeScaleOptions"})})," to adjust the time scale appearance. You can specify these options in two ways:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["On chart initialization. To do this, provide the desired options as a ",(0,s.jsx)(i.a,{href:"api/interfaces/ChartOptionsBase#timescale",children:(0,s.jsx)(i.code,{children:"timeScale"})})," parameter when calling ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/functions/createChart",children:(0,s.jsx)(i.code,{children:"createChart"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["On the fly using either the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#applyoptions",children:(0,s.jsx)(i.code,{children:"ITimeScaleApi.applyOptions"})})," or ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#applyoptions",children:(0,s.jsx)(i.code,{children:"IChartApi.applyOptions"})})," method. Both methods produce the same result."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"time-scale-api",children:"Time scale API"}),"\n",(0,s.jsxs)(i.p,{children:["Call the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#timescale",children:(0,s.jsx)(i.code,{children:"IChartApi.timeScale"})})," method to get an instance of the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi",children:(0,s.jsx)(i.code,{children:"ITimeScaleApi"})})," interface. This interface provides an extensive API for controlling the time scale. For example, you can adjust the visible range, convert a time point or ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/type-aliases/Logical",children:"index"})," to a coordinate, and subscribe to events."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"chart.timeScale().resetTimeScale();\n"})}),"\n",(0,s.jsx)(i.h2,{id:"visible-range",children:"Visible range"}),"\n",(0,s.jsxs)(i.p,{children:["Visible range is a chart area that is currently visible on the canvas. This area can be measured with both ",(0,s.jsx)(i.a,{href:"#data-range",children:"data"})," and ",(0,s.jsx)(i.a,{href:"#logical-range",children:"logical"})," range.\nData range usually includes bar timestamps, while logical range has bar indices."]}),"\n",(0,s.jsx)(i.p,{children:"You can adjust the visible range using the following methods:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#setvisiblerange",children:(0,s.jsx)(i.code,{children:"setVisibleRange"})})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#getvisiblerange",children:(0,s.jsx)(i.code,{children:"getVisibleRange"})})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#setvisiblelogicalrange",children:(0,s.jsx)(i.code,{children:"setVisibleLogicalRange"})})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#getvisiblelogicalrange",children:(0,s.jsx)(i.code,{children:"getVisibleLogicalRange"})})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"data-range",children:"Data range"}),"\n",(0,s.jsx)(i.p,{children:"The data range includes only values from the first to the last bar visible on the chart. If the visible area has empty space, this part of the scale is not included in the data range."}),"\n",(0,s.jsxs)(i.p,{children:["Note that you cannot extrapolate time with the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#setvisiblerange",children:(0,s.jsx)(i.code,{children:"setVisibleRange"})})," method. For example, the chart does not have data prior ",(0,s.jsx)(i.code,{children:"2018-01-01"})," date. If you set the visible range from ",(0,s.jsx)(i.code,{children:"2016-01-01"}),", it will be automatically adjusted to ",(0,s.jsx)(i.code,{children:"2018-01-01"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to adjust the visible range more flexible, operate with the ",(0,s.jsx)(i.a,{href:"#logical-range",children:"logical range"})," instead."]}),"\n",(0,s.jsx)(i.h3,{id:"logical-range",children:"Logical range"}),"\n",(0,s.jsxs)(i.p,{children:["The logical range represents a continuous line of values. These values are logical ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/type-aliases/Logical",children:"indices"})," on the scale that illustrated as red lines in the image below:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Logical range",src:a(26489).Z+"",title:"Logical range",width:"595",height:"299"})}),"\n",(0,s.jsx)(i.p,{children:"The logical range starts from the first data point across all series, with negative indices before it and positive ones after."}),"\n",(0,s.jsxs)(i.p,{children:["The indices can have fractional parts. The integer part represents the fully visible bar, while the fractional part indicates partial visibility. For example, the ",(0,s.jsx)(i.code,{children:"5.2"})," index means that the fifth bar is fully visible, while the sixth bar is 20% visible.\nA half-index, such as ",(0,s.jsx)(i.code,{children:"3.5"}),", represents the middle of the bar."]}),"\n",(0,s.jsxs)(i.p,{children:["In the library, the logical range is represented with the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/type-aliases/LogicalRange",children:(0,s.jsx)(i.code,{children:"LogicalRange"})})," object. This object has the ",(0,s.jsx)(i.code,{children:"from"})," and ",(0,s.jsx)(i.code,{children:"to"})," properties, which are logical indices on the time scale. For example, the visible logical range on the chart above is approximately from ",(0,s.jsx)(i.code,{children:"-4.73"})," to ",(0,s.jsx)(i.code,{children:"5.05"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#setvisiblelogicalrange",children:(0,s.jsx)(i.code,{children:"setVisibleLogicalRange"})})," method allows you to specify the visible range beyond the bounds of the available data. This can be useful for setting a ",(0,s.jsx)(i.a,{href:"#chart-margin",children:"chart margin"})," or aligning series visually."]}),"\n",(0,s.jsx)(i.h2,{id:"chart-margin",children:"Chart margin"}),"\n",(0,s.jsx)(i.p,{children:"Margin is the space between the chart's borders and the series. It depends on the following time scale options:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/TimeScaleOptions#barspacing",children:(0,s.jsx)(i.code,{children:"barSpacing"})}),". The default value is ",(0,s.jsx)(i.code,{children:"6"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/TimeScaleOptions#rightoffset",children:(0,s.jsx)(i.code,{children:"rightOffset"})}),". The default value is ",(0,s.jsx)(i.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["You can specify these options as described ",(0,s.jsx)(i.a,{href:"#time-scale-appearance",children:"above"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Note that if a series contains only a few data points, the chart may have a large margin on the left side."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"A series with a few points",src:a(4939).Z+"",width:"1358",height:"408"})}),"\n",(0,s.jsxs)(i.p,{children:["In this case, you can call the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#fitcontent",children:(0,s.jsx)(i.code,{children:"fitContent"})})," method that adjust the view and fits all data within the chart."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"chart.timeScale().fitContent();\n"})}),"\n",(0,s.jsxs)(i.p,{children:["If calling ",(0,s.jsx)(i.code,{children:"fitContent"})," has no effect, it might be due to how the library displays data."]}),"\n",(0,s.jsx)(i.p,{children:"The library allocates specific width for each data point to maintain consistency between different chart types.\nFor example, for line series, the plot point is placed at the center of this allocated space, while candlestick series use most of the width for the candle body.\nThe allocated space for each data point is proportional to the chart width.\nAs a result, series with fewer data points may have a small margin on both sides."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Margin",src:a(13601).Z+"",width:"1362",height:"408"})}),"\n",(0,s.jsxs)(i.p,{children:["You can specify the ",(0,s.jsx)(i.a,{href:"#logical-range",children:"logical range"})," with the ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi#setvisiblelogicalrange",children:(0,s.jsx)(i.code,{children:"setVisibleLogicalRange"})})," method to display the series exactly to the edges.\nFor example, the code sample below adjusts the range by half a bar-width on both sides."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"const vr = chart.timeScale().getVisibleLogicalRange();\nchart.timeScale().setVisibleLogicalRange({ from: vr.from + 0.5, to: vr.to - 0.5 });\n"})})]})}function d(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},4939:function(e,i,a){a.d(i,{Z:function(){return t}});let t=a.p+"assets/images/extra-margin-c1f99247fd0192e01717a0e48e073f13.png"},26489:function(e,i,a){a.d(i,{Z:function(){return t}});let t="data:image/png;base64,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"},13601:function(e,i,a){a.d(i,{Z:function(){return t}});let t=a.p+"assets/images/margin-ba3ba588b8212ea7b6415220ab39424a.png"},87294:function(e,i,a){a.d(i,{Z:function(){return t}});let t="data:image/png;base64,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"},50065:function(e,i,a){a.d(i,{Z:function(){return n},a:function(){return l}});var t=a(67294);let s={},r=t.createContext(s);function l(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);