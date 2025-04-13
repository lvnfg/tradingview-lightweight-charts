"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7692"],{48304:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>s,assets:()=>t,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"api/interfaces/ITimeScaleApi","title":"Interface: ITimeScaleApi","description":"Interface to chart time scale","source":"@site/versioned_docs/version-3.8/api/interfaces/ITimeScaleApi.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/ITimeScaleApi","permalink":"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi","draft":false,"unlisted":false,"tags":[],"version":"3.8","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),r=i("85893"),l=i("50065");let a={pagination_next:null,pagination_prev:null},c="Interface: ITimeScaleApi",t={},d=[{value:"Methods",id:"methods",level:2},{value:"scrollPosition()",id:"scrollposition",level:3},{value:"Returns",id:"returns",level:4},{value:"scrollToPosition()",id:"scrolltoposition",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"scrollToRealTime()",id:"scrolltorealtime",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getVisibleRange()",id:"getvisiblerange",level:3},{value:"Returns",id:"returns-3",level:4},{value:"setVisibleRange()",id:"setvisiblerange",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example",level:4},{value:"getVisibleLogicalRange()",id:"getvisiblelogicalrange",level:3},{value:"Returns",id:"returns-5",level:4},{value:"setVisibleLogicalRange()",id:"setvisiblelogicalrange",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-1",level:4},{value:"resetTimeScale()",id:"resettimescale",level:3},{value:"Returns",id:"returns-7",level:4},{value:"fitContent()",id:"fitcontent",level:3},{value:"Returns",id:"returns-8",level:4},{value:"logicalToCoordinate()",id:"logicaltocoordinate",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"coordinateToLogical()",id:"coordinatetological",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"timeToCoordinate()",id:"timetocoordinate",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"coordinateToTime()",id:"coordinatetotime",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"width()",id:"width",level:3},{value:"Returns",id:"returns-13",level:4},{value:"height()",id:"height",level:3},{value:"Returns",id:"returns-14",level:4},{value:"subscribeVisibleTimeRangeChange()",id:"subscribevisibletimerangechange",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Example",id:"example-2",level:4},{value:"unsubscribeVisibleTimeRangeChange()",id:"unsubscribevisibletimerangechange",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Example",id:"example-3",level:4},{value:"subscribeVisibleLogicalRangeChange()",id:"subscribevisiblelogicalrangechange",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-17",level:4},{value:"Example",id:"example-4",level:4},{value:"unsubscribeVisibleLogicalRangeChange()",id:"unsubscribevisiblelogicalrangechange",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-18",level:4},{value:"Example",id:"example-5",level:4},{value:"subscribeSizeChange()",id:"subscribesizechange",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-19",level:4},{value:"unsubscribeSizeChange()",id:"unsubscribesizechange",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-20",level:4},{value:"applyOptions()",id:"applyoptions",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-21",level:4},{value:"options()",id:"options",level:3},{value:"Returns",id:"returns-22",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"interface-itimescaleapi",children:"Interface: ITimeScaleApi"})}),"\n",(0,r.jsx)(n.p,{children:"Interface to chart time scale"}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"scrollposition",children:"scrollPosition()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"scrollPosition"}),"(): ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return the distance from the right edge of the time scale to the lastest bar of the series measured in bars."}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"scrolltoposition",children:"scrollToPosition()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"scrollToPosition"}),"(",(0,r.jsx)(n.code,{children:"position"}),", ",(0,r.jsx)(n.code,{children:"animated"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Scrolls the chart to the specified position."}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"position"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:"Target data position"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"animated"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Setting this to true makes the chart scrolling smooth and adds animation"}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"scrolltorealtime",children:"scrollToRealTime()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"scrollToRealTime"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Restores default scroll position of the chart. This process is always animated."}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getvisiblerange",children:"getVisibleRange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getVisibleRange"}),"(): ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/TimeRange",children:(0,r.jsx)(n.code,{children:"TimeRange"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Returns current visible time range of the chart."}),"\n",(0,r.jsxs)(n.p,{children:["Note that this method cannot extrapolate time and will use the only currently existent data.\nTo get complete information about current visible range, please use ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#getvisiblelogicalrange",children:"getVisibleLogicalRange"})," and ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/ISeriesApi#barsinlogicalrange",children:"ISeriesApi.barsInLogicalRange"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/TimeRange",children:(0,r.jsx)(n.code,{children:"TimeRange"})})}),"\n",(0,r.jsx)(n.p,{children:"Visible range or null if the chart has no data at all."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setvisiblerange",children:"setVisibleRange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setVisibleRange"}),"(",(0,r.jsx)(n.code,{children:"range"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sets visible range of data."}),"\n",(0,r.jsxs)(n.p,{children:["Note that this method cannot extrapolate time and will use the only currently existent data.\nThus, for example, if currently a chart doesn't have data prior ",(0,r.jsx)(n.code,{children:"2018-01-01"})," date and you set visible range with ",(0,r.jsx)(n.code,{children:"from"})," date ",(0,r.jsx)(n.code,{children:"2016-01-01"}),", it will be automatically adjusted to ",(0,r.jsx)(n.code,{children:"2018-01-01"})," (and the same for ",(0,r.jsx)(n.code,{children:"to"})," date)."]}),"\n",(0,r.jsxs)(n.p,{children:["But if you can approximate indexes on your own - you could use ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#setvisiblelogicalrange",children:"setVisibleLogicalRange"})," instead."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"range"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/TimeRange",children:(0,r.jsx)(n.code,{children:"TimeRange"})})]}),"\n",(0,r.jsx)(n.p,{children:"Target visible range of data."}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"chart.timeScale().setVisibleRange({\n    from: (new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0))).getTime() / 1000,\n    to: (new Date(Date.UTC(2018, 1, 1, 0, 0, 0, 0))).getTime() / 1000,\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getvisiblelogicalrange",children:"getVisibleLogicalRange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getVisibleLogicalRange"}),"(): ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/LogicalRange",children:(0,r.jsx)(n.code,{children:"LogicalRange"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Returns the current visible ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/time-scale#logical-range",children:"logical range"})," of the chart as an object with the first and last time points of the logical range, or returns ",(0,r.jsx)(n.code,{children:"null"})," if the chart has no data."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/LogicalRange",children:(0,r.jsx)(n.code,{children:"LogicalRange"})})}),"\n",(0,r.jsx)(n.p,{children:"Visible range or null if the chart has no data at all."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setvisiblelogicalrange",children:"setVisibleLogicalRange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setVisibleLogicalRange"}),"(",(0,r.jsx)(n.code,{children:"range"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Sets visible ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/time-scale#logical-range",children:"logical range"})," of data."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"range"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/Range",children:(0,r.jsx)(n.code,{children:"Range"})}),"<",(0,r.jsx)(n.code,{children:"number"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Target visible logical range of data."}),"\n",(0,r.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"chart.timeScale().setVisibleLogicalRange({ from: 0, to: Date.now() / 1000 });\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"resettimescale",children:"resetTimeScale()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"resetTimeScale"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Restores default zoom level and scroll position of the time scale."}),"\n",(0,r.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"fitcontent",children:"fitContent()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fitContent"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Automatically calculates the visible range to fit all data from all series."}),"\n",(0,r.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"logicaltocoordinate",children:"logicalToCoordinate()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"logicalToCoordinate"}),"(",(0,r.jsx)(n.code,{children:"logical"}),"): ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Coordinate",children:(0,r.jsx)(n.code,{children:"Coordinate"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Converts a logical index to local x coordinate."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"logical"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Logical",children:(0,r.jsx)(n.code,{children:"Logical"})})]}),"\n",(0,r.jsx)(n.p,{children:"Logical index needs to be converted"}),"\n",(0,r.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Coordinate",children:(0,r.jsx)(n.code,{children:"Coordinate"})})}),"\n",(0,r.jsxs)(n.p,{children:["x coordinate of that time or ",(0,r.jsx)(n.code,{children:"null"})," if the chart doesn't have data"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"coordinatetological",children:"coordinateToLogical()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"coordinateToLogical"}),"(",(0,r.jsx)(n.code,{children:"x"}),"): ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Logical",children:(0,r.jsx)(n.code,{children:"Logical"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Converts a coordinate to logical index."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"x"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:"Coordinate needs to be converted"}),"\n",(0,r.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Logical",children:(0,r.jsx)(n.code,{children:"Logical"})})}),"\n",(0,r.jsxs)(n.p,{children:["Logical index that is located on that coordinate or ",(0,r.jsx)(n.code,{children:"null"})," if the chart doesn't have data"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"timetocoordinate",children:"timeToCoordinate()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"timeToCoordinate"}),"(",(0,r.jsx)(n.code,{children:"time"}),"): ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Coordinate",children:(0,r.jsx)(n.code,{children:"Coordinate"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Converts a time to local x coordinate."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"time"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Time",children:(0,r.jsx)(n.code,{children:"Time"})})]}),"\n",(0,r.jsx)(n.p,{children:"Time needs to be converted"}),"\n",(0,r.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Coordinate",children:(0,r.jsx)(n.code,{children:"Coordinate"})})}),"\n",(0,r.jsxs)(n.p,{children:["X coordinate of that time or ",(0,r.jsx)(n.code,{children:"null"})," if no time found on time scale"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"coordinatetotime",children:"coordinateToTime()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"coordinateToTime"}),"(",(0,r.jsx)(n.code,{children:"x"}),"): ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Time",children:(0,r.jsx)(n.code,{children:"Time"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Converts a coordinate to time."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"x"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:"Coordinate needs to be converted."}),"\n",(0,r.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Time",children:(0,r.jsx)(n.code,{children:"Time"})})}),"\n",(0,r.jsxs)(n.p,{children:["Time of a bar that is located on that coordinate or ",(0,r.jsx)(n.code,{children:"null"})," if there are no bars found on that coordinate."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"width",children:"width()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"width"}),"(): ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Returns a width of the time scale."}),"\n",(0,r.jsx)(n.h4,{id:"returns-13",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"height",children:"height()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"height"}),"(): ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Returns a height of the time scale."}),"\n",(0,r.jsx)(n.h4,{id:"returns-14",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"subscribevisibletimerangechange",children:"subscribeVisibleTimeRangeChange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"subscribeVisibleTimeRangeChange"}),"(",(0,r.jsx)(n.code,{children:"handler"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Subscribe to the visible time range change events."}),"\n",(0,r.jsxs)(n.p,{children:["The argument passed to the handler function is an object with ",(0,r.jsx)(n.code,{children:"from"})," and ",(0,r.jsx)(n.code,{children:"to"})," properties of type ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/Time",children:"Time"}),", or ",(0,r.jsx)(n.code,{children:"null"})," if there is no visible data."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"handler"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/TimeRangeChangeEventHandler",children:(0,r.jsx)(n.code,{children:"TimeRangeChangeEventHandler"})})]}),"\n",(0,r.jsx)(n.p,{children:"Handler (function) to be called when the visible indexes change."}),"\n",(0,r.jsx)(n.h4,{id:"returns-15",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function myVisibleTimeRangeChangeHandler(newVisibleTimeRange) {\n    if (newVisibleTimeRange === null) {\n        // handle null\n    }\n\n    // handle new logical range\n}\n\nchart.timeScale().subscribeVisibleTimeRangeChange(myVisibleTimeRangeChangeHandler);\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"unsubscribevisibletimerangechange",children:"unsubscribeVisibleTimeRangeChange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unsubscribeVisibleTimeRangeChange"}),"(",(0,r.jsx)(n.code,{children:"handler"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Unsubscribe a handler that was previously subscribed using ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#subscribevisibletimerangechange",children:"subscribeVisibleTimeRangeChange"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"handler"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/TimeRangeChangeEventHandler",children:(0,r.jsx)(n.code,{children:"TimeRangeChangeEventHandler"})})]}),"\n",(0,r.jsx)(n.p,{children:"Previously subscribed handler"}),"\n",(0,r.jsx)(n.h4,{id:"returns-16",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"chart.timeScale().unsubscribeVisibleTimeRangeChange(myVisibleTimeRangeChangeHandler);\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"subscribevisiblelogicalrangechange",children:"subscribeVisibleLogicalRangeChange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"subscribeVisibleLogicalRangeChange"}),"(",(0,r.jsx)(n.code,{children:"handler"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Subscribe to the visible logical range change events."}),"\n",(0,r.jsxs)(n.p,{children:["The argument passed to the handler function is an object with ",(0,r.jsx)(n.code,{children:"from"})," and ",(0,r.jsx)(n.code,{children:"to"})," properties of type ",(0,r.jsx)(n.code,{children:"number"}),", or ",(0,r.jsx)(n.code,{children:"null"})," if there is no visible data."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"handler"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/LogicalRangeChangeEventHandler",children:(0,r.jsx)(n.code,{children:"LogicalRangeChangeEventHandler"})})]}),"\n",(0,r.jsx)(n.p,{children:"Handler (function) to be called when the visible indexes change."}),"\n",(0,r.jsx)(n.h4,{id:"returns-17",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function myVisibleLogicalRangeChangeHandler(newVisibleLogicalRange) {\n    if (newVisibleLogicalRange === null) {\n        // handle null\n    }\n\n    // handle new logical range\n}\n\nchart.timeScale().subscribeVisibleLogicalRangeChange(myVisibleLogicalRangeChangeHandler);\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"unsubscribevisiblelogicalrangechange",children:"unsubscribeVisibleLogicalRangeChange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unsubscribeVisibleLogicalRangeChange"}),"(",(0,r.jsx)(n.code,{children:"handler"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Unsubscribe a handler that was previously subscribed using ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/ITimeScaleApi#subscribevisiblelogicalrangechange",children:"subscribeVisibleLogicalRangeChange"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"handler"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/LogicalRangeChangeEventHandler",children:(0,r.jsx)(n.code,{children:"LogicalRangeChangeEventHandler"})})]}),"\n",(0,r.jsx)(n.p,{children:"Previously subscribed handler"}),"\n",(0,r.jsx)(n.h4,{id:"returns-18",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"chart.timeScale().unsubscribeVisibleLogicalRangeChange(myVisibleLogicalRangeChangeHandler);\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"subscribesizechange",children:"subscribeSizeChange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"subscribeSizeChange"}),"(",(0,r.jsx)(n.code,{children:"handler"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Adds a subscription to time scale size changes"}),"\n",(0,r.jsx)(n.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"handler"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/SizeChangeEventHandler",children:(0,r.jsx)(n.code,{children:"SizeChangeEventHandler"})})]}),"\n",(0,r.jsx)(n.p,{children:"Handler (function) to be called when the time scale size changes"}),"\n",(0,r.jsx)(n.h4,{id:"returns-19",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"unsubscribesizechange",children:"unsubscribeSizeChange()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unsubscribeSizeChange"}),"(",(0,r.jsx)(n.code,{children:"handler"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Removes a subscription to time scale size changes"}),"\n",(0,r.jsx)(n.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"handler"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/SizeChangeEventHandler",children:(0,r.jsx)(n.code,{children:"SizeChangeEventHandler"})})]}),"\n",(0,r.jsx)(n.p,{children:"Previously subscribed handler"}),"\n",(0,r.jsx)(n.h4,{id:"returns-20",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"applyoptions",children:"applyOptions()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"applyOptions"}),"(",(0,r.jsx)(n.code,{children:"options"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Applies new options to the time scale."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-13",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options"}),": ",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/type-aliases/DeepPartial",children:(0,r.jsx)(n.code,{children:"DeepPartial"})})," <",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/TimeScaleOptions",children:(0,r.jsx)(n.code,{children:"TimeScaleOptions"})}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Any subset of options."}),"\n",(0,r.jsx)(n.h4,{id:"returns-21",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"options()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"options"}),"(): ",(0,r.jsx)(n.code,{children:"Readonly"})," <",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/TimeScaleOptions",children:(0,r.jsx)(n.code,{children:"TimeScaleOptions"})}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Returns current options"}),"\n",(0,r.jsx)(n.h4,{id:"returns-22",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Readonly"})," <",(0,r.jsx)(n.a,{href:"/lightweight-charts/docs/3.8/api/interfaces/TimeScaleOptions",children:(0,r.jsx)(n.code,{children:"TimeScaleOptions"})}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Currently applied options"})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var s=i(67294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);