function pie(id,legendData,seriesData){
	var MyEchart=echarts.init(document.getElementById(id));
	var option={
		tooltip:{
		 	show:true,
		 	formatter: '{b0}: {c0}'
		},
		legend: {
			orient: 'vertical',
			right: '20%',
			textStyle:{
			    color:"#fff"
			},
			y:"middle",
			itemWidth:10,
			itemHeight:10,
			data:legendData
		},
		//手动设置每个图例的颜色
		color:['#0094c2','#00ada9','#ed8c01','#e6327c','#84f1fe','#ea5f00'],  
		series:[
			{
		        type:'pie',
		        clockWise:true,//数据是顺时针还是逆时针
		        selectedMode: 'single',
		        center:["35%","50%"],
		        radius:'80%',//pie的内半径和外半径
		        animation :false,
		        label: {//pie中文字放置的位置
		           	normal: {
		                show:false
		            }
		        },
		        itemStyle:{
		            normal:{
		            	label:{
		            		rotate:false,
		            	}
		            }
		        },
		        data:seriesData
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
