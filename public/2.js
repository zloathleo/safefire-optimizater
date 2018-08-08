(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{386:function(t,i,e){"use strict";i.a={appName:"燃烧优化-水泥",loadingConfig:{text:"",color:"#c23531",textColor:"#000",maskColor:"rgba(35, 35, 35, 0.5)"},calcDashboardChartWidth:function(t){var i=document.getElementById("dashboard-container"),e=parseInt(i.clientHeight-100);return Math.min(t,e,500)}}},579:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this.$createElement;return(this._self._c||t)("Content")},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{style:{width:"100%",height:t.dashboardHeight},attrs:{id:"dashboard"}},[e("div",{staticStyle:{width:"100%",height:"100%","overflow-x":"hidden","overflow-y":"auto"},attrs:{id:"dashboard-container"}},[e("v-layout",{attrs:{row:"",wrap:""}},[t.dasCard?e("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg3:"","offset-lg1":""}},[e("v-slide-x-transition",[e("DasCard")],1)],1):t._e(),t._v(" "),e("v-flex",{class:t.mainBindClass,attrs:{xs12:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:""}},[e("HeatChart")],1),t._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:""}},[e("TrendChart")],1)],1),t._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs6:"",sm3:""}},[e("Gauge",{attrs:{title:"回转窑压力"}})],1),t._v(" "),e("v-flex",{attrs:{xs6:"",sm3:""}},[e("Gauge",{attrs:{title:"一次风温度"}})],1),t._v(" "),e("v-flex",{attrs:{xs6:"",sm3:""}},[e("Gauge",{attrs:{title:"一次风风量"}})],1),t._v(" "),e("v-flex",{attrs:{xs6:"",sm3:""}},[e("Gauge",{attrs:{title:"二次风温度"}})],1)],1)],1)],1)],1)])},n=function(){var t=this.$createElement,i=this._self._c||t;return i("v-card",[i("div",{ref:"heatchart"})])};n._withStripped=s._withStripped=a._withStripped=!0;var l=e(386),o=e(363);e(507),e(399),e(398),e(494);var r={components:{},data:function(){return{chart:void 0,chartOption:this.getOption()}},mounted:function(){this._init_chart();var t=this;this.$globalEventHub.$on("periodChanged",function(i){t.refreshData()})},methods:{refreshData:function(){var t=this;this.chart.showLoading(l.a.loadingConfig),this.$myfetch.fetch("/heatchart",{method:"GET"},function(i){t.chart.hideLoading(),t.chart.setOption({series:[{name:"value",data:i.data}]})})},_init_chart:function(){var t=this.$refs.heatchart,i=l.a.calcDashboardChartWidth(t.clientWidth);this.chart=o.init(t,void 0,{width:i,height:i}),this.chart.setOption(this.chartOption),this.refreshData();var e=this;this.chart.on("click",function(t){e.$globalEventHub.$emit("heat_selected",t.value)})},getOption:function(){return{title:{left:"center",text:"温度场热区分布图",textStyle:{color:"#fff"}},tooltip:{position:"top"},animation:!1,grid:{height:"80%",y:"10%"},xAxis:{type:"category",data:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],splitArea:{show:!0}},yAxis:{type:"category",data:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],splitArea:{show:!0}},visualMap:{min:0,max:10,calculable:!1,show:!1},series:[{name:"value",type:"heatmap",label:{normal:{show:!0}},itemStyle:{emphasis:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}}},c=e(115),h=Object(c.a)(r,n,[],!1,null,null,null);h.options.__file="src\\components\\dashboard\\HeatChart.vue";var v=h.exports,d=function(){var t=this.$createElement,i=this._self._c||t;return i("v-card",[i("div",{ref:"trendchart"})])};d._withStripped=!0;var f=e(363);e(486),e(399),e(398);var p={components:{},data:function(){return{chart:void 0,chartOption:this.getOption()}},mounted:function(){this._init_chart();var t=this;this.$globalEventHub.$on("heat_selected",function(i){t.refreshData()})},methods:{refreshData:function(){var t=this;this.chart.showLoading(l.a.loadingConfig),this.$myfetch.fetch("/trendchart",{method:"GET"},function(i){t.chart.hideLoading(),t.chart.setOption({xAxis:{data:i.time},series:[{name:"value",data:i.data}]})})},_init_chart:function(){var t=this.$refs.trendchart,i=l.a.calcDashboardChartWidth(t.clientWidth);this.chart=f.init(t,void 0,{width:i,height:i}),this.chart.setOption(this.chartOption),this.refreshData()},getOption:function(){return{tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},title:{left:"center",text:"温度历史趋势",textStyle:{color:"#fff"}},xAxis:{type:"category",boundaryGap:!1},yAxis:{type:"value",boundaryGap:[0,"100%"]},animation:!0,series:[{name:"value",type:"line",smooth:!0,animation:!0,animationEasing:"linear",animationDuration:1e4,data:[],itemStyle:{normal:{color:"rgb(255, 70, 131)"}}}]}}}},_=Object(c.a)(p,d,[],!1,null,null,null);_.options.__file="src\\components\\dashboard\\TrendChart.vue";var u=_.exports,g=function(){var t=this.$createElement,i=this._self._c||t;return i("v-card",[i("div",{ref:"gauge"})])};function x(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}g._withStripped=!0;var y=e(363);e(466),e(399),e(398);var m={components:{},props:["title"],data:function(){return{chart:void 0,chartOption:this.getOption()}},mounted:function(){this._init_chart()},methods:{refreshData:function(){},_init_chart:function(){var t=this.$refs.gauge,i=t.clientWidth;this.chart=y.init(t,void 0,{width:i,height:i}),this.chart.setOption(this.chartOption),this.refreshData()},getOption:function(){var t;return{tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[(t={name:"业务指标",type:"gauge",detail:{formatter:"{value}%"},axisLine:{lineStyle:{width:6,color:[[.6,"#91ca8c"],[.8,"#f49f42"],[1,"#dd6b66"]]}},axisLabel:{show:!1},axisTick:{length:4},pointer:{width:2},splitLine:{length:12,lineStyle:{color:"auto"}},title:{textStyle:{fontSize:12,color:"#fff"}}},x(t,"detail",{fontWeight:"bolder",fontSize:15}),x(t,"data",[{value:50,name:this.title}]),t)]}}}},S=Object(c.a)(m,g,[],!1,null,null,null);S.options.__file="src\\components\\dashboard\\Gauge.vue";var b=S.exports,C=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",[e("v-card-title",{staticClass:"subheading font-weight-bold"},[t._v(t._s(t.title))]),t._v(" "),e("v-divider"),t._v(" "),e("v-list",[e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("回转窑压力:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.calories))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("一次风温度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.fat))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("一次风风量:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.carbs))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("二次风温度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.protein))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("中心风压力:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.sodium))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("旋流风压力:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.calcium))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("轴流风压力:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("中心风蝶阀开度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("内风蝶阀开度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("外风蝶阀开度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("火焰周围的氧气浓度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("煤质灰分:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("煤质水分:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("煤质细度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("煤粉浓度:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("燃烧器位置:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1),t._v(" "),e("v-list-tile",{staticStyle:{height:"30px"}},[e("v-list-tile-content",{staticStyle:{"font-size":"12px"}},[t._v("Nox排放量:")]),t._v(" "),e("v-list-tile-content",{staticClass:"align-end",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.data.iron))])],1)],1)],1)};C._withStripped=!0;var w=Object(c.a)({data:function(){return{title:"指标参数",data:{value:!1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"}}},mounted:function(){}},C,[],!1,null,null,null);w.options.__file="src\\components\\dashboard\\DasCard.vue";var z={components:{HeatChart:v,TrendChart:u,Gauge:b,DasCard:w.exports},data:function(){return{dasCard:!1,dashboardHeight:window.innerHeight-144+"px"}},computed:{mainBindClass:function(){return this.dasCard?{sm8:!0,md8:!0,lg7:!0}:{sm12:!0,md8:!0,lg7:!0,"offset-md2":!0,"offset-lg2":!0}}},mounted:function(){var t=this;this.$globalEventHub.$on("clickDasCard",function(i){t.dasCard=!t.dasCard})},methods:{onResize:function(){}}},O=Object(c.a)(z,s,[],!1,null,null,null);O.options.__file="src\\components\\dashboard\\Content.vue";var $={components:{Content:O.exports}},D=Object(c.a)($,a,[],!1,null,null,null);D.options.__file="src\\pages\\Dashboard.vue",i.default=D.exports}}]);