
$(function(){
	

	var base2 = +new Date(1968, 9, 3);
	var oneDay2 = 24 * 3600 * 1000;
	var date2 = [];
	
	var data2 = [Math.random() * 100];
	for (var i = 1; i < 100; i++) {
	    var now = new Date(base2 += oneDay2);
	    date2.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
	    data2.push(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]));
	}
	
	
	var base4 = +new Date(1968, 9, 3);
	var oneDay4 = 24 * 3600 * 1000;
	var date4 = [];
	
	var data4 = [Math.random() * 100];
	for (var i = 1; i < 100; i++) {
	    var now = new Date(base4 += oneDay4);
	    date4.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
	    data4.push(Math.round((Math.random() - 0.5) * 20 + data4[i - 1]));
	}

function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}




//点击切换服务器性能图表；
$('.Option>div').click(function(){
	$(this).addClass('Select').siblings('div').removeClass('Select');
	var Index=Index+$(this).index();
	$('.Server'+Index).show().siblings('.main').hide();
    setdata(50,data2,30,data4);
})





///图表初始化；
setdata(50,data2,30,data4);




function setdata(data1,data2,data3,data4){
	
//左侧CUP；
var myChart1 = echarts.init(document.getElementById('Progress'));
option = {
	    title: {
        text: '服务器监控',
        left:'center',
    },
    color: ['#3398DB'],
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
            data : ['CPU'],
            axisTick: {
                alignWithLabel: true
            },
        }
    ],
    yAxis : [
        {
            type: 'value',
            name: '百分比（%）',
            interval: 0,
            min: 0, 
            max: 100,

        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60%',
            data:[data1]
        }
    ]
};
 myChart1.setOption(option);
 
 
//服务器详细cpu性能监控图；
var myChart2 = echarts.init(document.getElementById('Stack'));
option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '服务器cpu详细性能图',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data2
    },
    yAxis: {
        type: 'value',
        name: '百分比（%）',
        interval: 0,
            min: 0, 
            max: 100,
    },
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data2
        }
    ]
};

 myChart2.setOption(option);


//左侧Io；
var myChart3 = echarts.init(document.getElementById('Iogress'));
option = {
	    title: {
        text: '服务器监控',
        left:'center',
    },
    color: ['#3398DB'],
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
            data : ['I/O'],
            axisTick: {
                alignWithLabel: true
            },
        }
    ],
    yAxis : [
        {
            type: 'value',
            name: '百分比（%）',
            interval: 0,
            min: 0, 
            max: 100,

        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60%',
            data:[data3]
        }
    ]
};
 myChart3.setOption(option);
 


//服务器详细性能监控图；
var myChart4 = echarts.init(document.getElementById('IoStack'));
option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '服务器I/O详细性能图',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data4
    },
    yAxis: {
        type: 'value',
        name: '百分比（%）',
        interval: 0,
            min: 0, 
            max: 100,
    },
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data4
        }
    ]
};

 myChart4.setOption(option);
 
 
 
 setInterval(function () {
  var par= parseInt(100*Math.random())
  var par1= parseInt(100*Math.random())
    for (var i = 0; i < 1; i++) {
        data2.shift();
        data2.push(par);
    }
        for (var i = 0; i < 1; i++) {
        data4.shift();
        data4.push(par1);
    }
        console.log(data2)
    myChart2.setOption({
        series: [{
            data: data2
        }]
    });
    myChart4.setOption({
        series: [{
            data: data4
        }]
    });
}, 1000);



}





});