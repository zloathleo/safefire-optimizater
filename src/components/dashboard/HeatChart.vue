<template>
    <v-card>
        <div ref="heatchart" />
    </v-card>
</template>

<script> 
// import * as echarts from 'echarts';
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/heatmap');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/visualMap');

import globalvar from '../../common/globalvar'
export default {
    components: {
    },
    props: {
        calc: {
            type: String,
            default: "w"
        },
        pixel: {
            type: String,
            default: "10"
        },
    },
    data() {
        return {
            chartDataIndex: 0,
            chart: undefined,
            chartOption: this.getOption(),
        }
    },
    mounted() {
        this._init_chart();
        let _this = this;
        this.$globalEventHub.$on("periodChanged", function (value) {
            _this.refreshData();
        });

        this.$globalEventHub.$on("periodNext", function (value) {
            _this.refreshData();
        });
    },
    methods: {
        refreshData() {
            let _this = this;

            console.log(this.calc);
            this.chart.showLoading(globalvar.loadingConfig);

            let params = new URLSearchParams();
            params.append('index', this.chartDataIndex);
            params.append('calc', this.calc);
            params.append('pixel', this.pixel);

            this.$myfetch.fetch('/probabilitychart?' + params.toString(), { method: 'GET' }, function (json) {
                _this.chart.hideLoading();

                _this.chartDataIndex++;


                let _data = json.data;
                let w = json.w;
                let h = json.h; 

                let xData = [];
                let yData = [];
                for (let i = 0; i < w; i++) {
                    xData.push(i);
                }
                for (let j = 0; j < h; j++) {
                    yData.push(j);
                }

                let index = 0;
                let heatChartdata = _data.map(function (item) {
                    let x = index % w;
                    let y = Math.floor(index / w);
                    index++;
                    return [x, y, item];
                });

                // 填入数据
                _this.chart.setOption({
                    xAxis: {
                        data: xData
                    },
                    yAxis: {
                        data: yData
                    },
                    series: [{
                        name: 'value',
                        data: heatChartdata
                    }]
                });

            });
        },

        _init_chart() {
            let chartDom = this.$refs.heatchart;
            let _width = globalvar.calcDashboardChartWidth(chartDom.clientWidth);

            this.chart = echarts.init(chartDom, undefined, {
                width: _width,
                height: _width / 1.334
            });
            this.chart.setOption(this.chartOption);
            this.refreshData();

            let _this = this;
            this.chart.on('click', function (params) {
                console.log(params.value);
                _this.$globalEventHub.$emit("heat_selected", params.value);
            });

        },

        getOption() {
            return {
                title: {
                    left: 'center',
                    text: '温度场热区分布图',
                    textStyle: {
                        color: '#fff',
                    }
                },
                tooltip: {
                    position: 'top'
                },
                animation: false,
                grid: {
                    height: '80%',
                    y: '10%'
                },
                xAxis: {
                    type: 'category',
                    data: [],
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: [],
                    splitArea: {
                        show: true
                    }
                },
                visualMap: {
                    min: 0,
                    max: 10,
                    calculable: false,//显示拖拽用的手柄 
                    // left: 'center',
                    show: false,
                    inRange: {
                        // colorAlpha: [0.5, 1],
                        opacity: [0.7, 1],
                        color: ['#2196F3', '#4CAF50', '#FFEB3B', '#FF5722', '#BF360C']
                        // color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    }
                },
                series: [{
                    name: 'value',
                    type: 'heatmap',
                    // 渐进式渲染时每一帧绘制图形数量
                    progressive: 2000,
                    animation: false
                }]
            };
        }
    }

}
</script>
