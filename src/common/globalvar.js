export default {
    appName: '燃烧优化-水泥',

    loadingConfig: {
        text: '',
        color: '#c23531',
        textColor: '#000',
        maskColor: 'rgba(35, 35, 35, 0.5)',
    },

    calcDashboardChartWidth: function (_width) {
        //外框高度
        let _parentDom = document.getElementById("dashboard-container");
        let _ch = parseInt(_parentDom.clientHeight - 100);

        return Math.min(_width, _ch, 500)
    }
};