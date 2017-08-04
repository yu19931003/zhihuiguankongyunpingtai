function dbar(id,dbarName,dbarData1,dbarData2,rotate,width,color1,color2){
	var MyEchart=echarts.init(document.getElementById(id));
	option = {

			 		//提示框
			 		tooltip : {
					        trigger: 'axis',
					         formatter: '{b0}<br />{a0}: {c0}<br />{a1}:{c1}',
					         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					             type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					         }
					},
					legend:{
						data:['视频总数','已开视频数'],
						textStyle:{
							color:"#fff"
						}
					},
					grid: {
				        left: '3%',
				        right: '4%',
				        top:"15px",
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
				            	rotate:rotate,
				            	textStyle:{//改变坐标的颜色
				            		color:'#fff'
				            	}
				            },
				            axisTick: {
				                alignWithLabel: true
				            },
				            data:dbarName
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
				        	name:'视频总数',
				            type:'bar',
				            barWidth:width,
				            itemStyle:{
				            	normal:{
				            		color:color1
				            	}
				            },
				            data:dbarData1
				            
				        },
				        {
				        	name:'已开视频数',
				            type:'bar',
				            barWidth:width,
				            itemStyle:{
				            	normal:{
				            		color:color2
				            	}
				            },
				            data:dbarData2
				            
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