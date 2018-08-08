<template>
    <v-card>
        <div ref="gauge" />
    </v-card>
</template>

<script> 
// import * as echarts from 'echarts';
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/gauge');
// 引入提示框和标题组件  
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

import globalvar from '../../common/globalvar'
export default {
    components: {
    },
    props: ['title'],
    data() {
        return {
            chart: undefined,
            chartOption: this.getOption(),
        }
    },
    mounted() {
        this._init_chart();
    },
    methods: {
        refreshData() {
            let _this = this;

            // this.chart.showLoading();
            // this.$myfetch.fetch('/heatchart', { method: 'GET' }, function (json) {
            //     _this.chart.hideLoading();

            //     // 填入数据
            //     _this.chart.setOption({
            //         series: [{
            //             // 根据名字对应到相应的系列
            //             name: 'value',
            //             data: json.data
            //         }]
            //     });

            // });
        },

        _init_chart() {
            let chartDom = this.$refs.gauge;
            let _width = chartDom.clientWidth;

            this.chart = echarts.init(chartDom, undefined, {
                width: _width,
                height: _width
            });
            this.chart.setOption(this.chartOption);
            this.refreshData();
        },

        getOption() {
            return {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: { formatter: '{value}%' },
                        axisLine: {
                            lineStyle: {
                                width: 6,
                                color: [[0.6, '#91ca8c'], [0.8, '#f49f42'], [1, '#dd6b66']]
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 4,        // 属性length控制线长

                        },
                        pointer: {
                            width: 2
                        },
                        splitLine: {           // 分隔线
                            length: 12,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto'
                            },
                        },
                        title: {
                            textStyle: {
                                fontSize: 12,
                                color: '#fff',
                            }
                        },
                        detail: {
                            fontWeight: 'bolder',
                            fontSize: 15
                        },
                        data: [{ value: 50, name: this.title }]
                    }
                ]
            }
        }
    }

}
</script>
