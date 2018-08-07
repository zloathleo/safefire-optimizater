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

             this.chart.showLoading(globalvar.loadingConfig);
            this.$myfetch.fetch('/heatchart', { method: 'GET' }, function (json) {
                _this.chart.hideLoading();

                // 填入数据
                _this.chart.setOption({
                    series: [{
                        // 根据名字对应到相应的系列
                        name: 'value',
                        data: json.data
                    }]
                });

            });
        },

        _init_chart() { 
            let chartDom = this.$refs.heatchart;
            let _width = globalvar.calcDashboardChartWidth(chartDom.clientWidth);

            this.chart = echarts.init(chartDom, undefined, {
                width: _width,
                height: _width
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
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                    splitArea: {
                        show: true
                    }
                },
                visualMap: {
                    min: 0,
                    max: 10,
                    calculable: false,
                    // orient: 'horizontal',
                    // left: 'center',
                    show: false,
                    // bottom: '3%'
                },
                series: [{
                    name: 'value',
                    type: 'heatmap',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };
        }
    }

}
</script>
