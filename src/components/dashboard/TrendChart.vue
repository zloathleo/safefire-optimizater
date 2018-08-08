<template>
    <v-card>
        <div ref="trendchart" />
    </v-card>
</template>

<script> 
// import * as echarts from 'echarts';
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

import globalvar from '../../common/globalvar'
export default {
    components: {
    },
    data() {
        return {
            chart: undefined,
            chartOption: this.getOption(),
        }
    },
    mounted() {
        this._init_chart();
        let _this = this;
        this.$globalEventHub.$on("heat_selected", function (value) {
            _this.refreshData();
        });
    },
    methods: {
        refreshData() {
            let _this = this;

            this.chart.showLoading(globalvar.loadingConfig);
            this.$myfetch.fetch('/trendchart', { method: 'GET' }, function (json) {
                _this.chart.hideLoading();

                // 填入数据
                _this.chart.setOption({
                    xAxis: {
                        data: json.time
                    },
                    series: [{
                        // 根据名字对应到相应的系列
                        name: 'value',
                        data: json.data
                    }]
                });

            });
        },
        _init_chart() {
            let chartDom = this.$refs.trendchart;
            let _width = globalvar.calcDashboardChartWidth(chartDom.clientWidth);

            this.chart = echarts.init(chartDom, undefined, {
                width: _width,
                height: _width
            });
            this.chart.setOption(this.chartOption);
            this.refreshData();
        },



        getOption() {
            console.log("new opt");
            let _this = this;
            return {
                // toolbox: { //可视化的工具箱
                //     show: true,
                //     right: 30,
                //     feature: { 
                //         myTool1: {
                //             show: true,
                //             title: '刷新数据',

                //             icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                //             onclick: function (option1) {
                //                 _this.refreshData();
                //             }
                //         },
                //     }
                // },
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '温度历史趋势',
                    textStyle: {
                        color: '#fff',
                    }
                },

                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },

                animation: true,
                // animationEasing: 'linear',
                // animationDuration: 10000,

                series: [
                    {
                        name: 'value',
                        type: 'line',
                        smooth: true,
                        // symbol: 'none',
                        // sampling: 'average',

                        animation: true,
                        animationEasing: 'linear',
                        animationDuration: 10000,
                        data: [],
                        itemStyle: {
                            normal: {
                                color: 'rgb(255, 70, 131)'
                            }
                        },
                    }
                ]
            };
        }

    }

}
</script>
