function bar(id,barName,barData,rotate,width,color){
	var MyEchart=echarts.init(document.getElementById(id));
	option = {
			 		//提示框
			 		tooltip : {
					        trigger: 'axis',
					        formatter: '{b0}: {c0}',
					        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					        }
					},
					grid: {
				        left: '3%',
				        right: '4%',
				        top:"40px",
				        bottom: '60px',
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
				            	rotate:rotate,
				            	textStyle:{//改变坐标的颜色
				            		color:'#fff'
				            	}
				            },
				            axisTick: {
				                alignWithLabel: true
				            },
				            data:barName
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
				            // inverse: true,//颠倒柱状图的显示
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
				    	// 柱状图
				        {
				            type:'bar',
				            barWidth:width,
				            itemStyle:{
				            	normal:{
				            		color:color
				     //        		color:{
									//     type: 'linear',
									//     x: 0,
									//     y: 0,
									//     x2: 0,
									//     y2: 1,
									//     colorStops: [{
									//         offset: 0, color: startC 
									//     }, {
									//         offset: 1, color: endC 
									//     }],
									//     globalCoord: false 
									// }
				            	}
				            },
				            data:barData
				            
				        }
				        ]
	};
	MyEchart.on('click', function (params) {
		    var name=params.name;
		    $("#shadow").css("display","block");
		    $("#listInfo").css("display","block");
		});
	MyEchart.setOption(option);
}