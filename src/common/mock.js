import Mock, { Random } from 'mockjs';
import FetchMock from 'fetch-mock';

// 配置需要mock的路由 

FetchMock.mock('/heatchart', function () { 

    let w = 102;
    let h = 76;
    let data = require('./102-76.json');
 
    let index = 0;
    let max = 1400;
    let min = 800
    let heatChartdata = data.map(function (item) {
        let x = index % w;
        let y = Math.floor(index / w);
        index++;

        return [x, y, item];  
    });
    return Mock.mock({
        'xAxis': xData,
        'yAxis': yData,
        'data': heatChartdata,
    });

    return Mock.mock({
        'data': heatChartdata,
    });
}); 

//////////////////////////////////////trend chart data 

FetchMock.mock('/trendchart', function () {
    let base = +new Date(2017, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let time = [];
    let data = [Math.random() * 300];

    data[0] = 1300;

    for (var i = 1; i < 200; i++) {
        var now = new Date(base += oneDay);
        time.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 200 + data[i - 1]));
    }

    return Mock.mock({
        'data': data,
        'time': time,
    });
});

// 其他路由使用原生fetch，这段代码必须放最后
FetchMock.once('*', (url, options) => {
    FetchMock.restore();
    return fetch(url, options);
});