function line(id,lineName,lineData){
	var MyEchart=echarts.init(document.getElementById(id));
	option = {
		tooltip: {
			trigger: 'axis',
			formatter: '{b0}: {c0}',
			axisPointer: {
				type: 'cross',
				crossStyle: {
				    color: '#999'
				}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			top:"30px",
			bottom: '20px',
			containLabel: true
		},
		// x轴
		xAxis: [
			{
				type: 'category',
				axisLine:{
				    show:true,
				    lineStyle:{
				        color:"#017c9d"
				    }
				},
				axisLabel:{
				    interval:0,
				        textStyle:{//改变坐标的颜色
				            color:'#fff'
				        }
				    },
				axisTick: {
				    alignWithLabel: true
				},
				data:lineName
			}
		],
		// y轴
		yAxis: [
			// 左侧y轴
			{
				type: 'value',
				axisTick:{
				    show:false
				},
				splitLine:{show: false},
				axisLabel:{
				    textStyle:{//改变坐标的颜色
				        color:'#fff'
				    }
				},
				axisLine:{
				    show:true,
				    lineStyle:{
				    	color:"#017c9d"
					}
				}
			}
		],
		// 数据系列列表
		series: [
			// 折线图
			{
				name:'平均温度',
				type:'line',
				data:lineData,
				symbol :"diamond",
				itemStyle:{
					normal:{
						label : {show: true},
						color:'#fff',
						lineStyle:{
						    color:'#0295c4'
						}
					}
				}
			}
		]
	}
	MyEchart.on('click', function (params) {
		    var name=params.name;
		    $("#shadow").css("display","block");
		    $("#listInfo").css("display","block");
		});
	MyEchart.setOption(option);
}