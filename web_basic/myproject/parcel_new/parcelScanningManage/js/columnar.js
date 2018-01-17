$(function(){
var myChart = echarts.init(document.getElementById('columnar'));
option = {
    color: ['#3398DB'],
    title: {
        text: '上海区域设备部署信息',
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#515151'
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['运行天数', '记录数', '维修率', '满意度'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334]
        }
    ]
};
myChart.setOption(option);
});
