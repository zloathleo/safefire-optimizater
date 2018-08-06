export default {
    appName: '燃烧优化-水泥',

    calcDashboardChartWidth :function(_width){
        //外框高度
        let _parentDom = document.getElementById("dashboard");
        let _ch = parseInt(_parentDom.clientHeight - 100);

        return Math.min(_width,_ch)
    }
};