<template>
    <div ref="trendchart" />
</template>

<script> 
import * as echarts from 'echarts';
export default {
    components: {
    },
    mounted() {
        this._init_chart();
    },
    methods: {
        _init_chart() {
            let chartDom = this.$refs.trendchart;

            let _width = chartDom.clientWidth;
            let chart = echarts.init(chartDom, undefined, {
                width: _width,
                height: _width
            });
            let _opts = this.getOption();
            chart.setOption(_opts);


            //load data
            // let _data = this.getData();
            var base = +new Date(1968, 9, 3);
            var oneDay = 24 * 3600 * 1000;
            var date = []; 
            let data = [Math.random() * 300];

            data[0] = 1200;

            for (var i = 1; i < 200; i++) {
                var now = new Date(base += oneDay);
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                data.push(Math.round((Math.random() - 0.5) * 200 + data[i - 1]));
            }

            let _data_series = Object.assign(_opts.series[0], {
                data: data,
            }); 

            chart.setOption({
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                series: [_data_series]
            });
        },



        getOption() {
            return {
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
            
                series: [
                    {
                        name: '温度值',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgb(255, 70, 131)'
                            }
                        },
                        // areaStyle: {
                        //     normal: {
                        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //             offset: 0,
                        //             color: 'rgb(255, 158, 68)'
                        //         }, {
                        //             offset: 1,
                        //             color: 'rgb(255, 70, 131)'
                        //         }])
                        //     }
                        // },
                    }
                ]
            };
        }

    }

}
</script>
