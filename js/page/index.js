$(document).ready(function(){
 	//饼状图调用pie(元素的id,标注数据,饼状图数据)；
 	var cityPieData=[
		            {value:400, name:'任城区'},
		            {value:100, name:'高新区'},
		            {value:300, name:'兖州区'},
		            {value:80, name:'曲阜市'},
		            {value:140, name:'邹城'},
		            {value:210, name:'泗水'}
		        ];
	var cityPieName=['任城区','高新区','兖州区','曲阜市','邹城','泗水']
	pie('cityPie',cityPieName,cityPieData)
	/*var vPeiData=[
		            {value:400, name:'10kv以下'},
		            {value:100, name:'35kv'},
		            {value:100, name:'110kv'},
		            {value:200, name:'220kv'}
		        ];
	var vPeiName=['10kv以下','35kv','110kv','220kv'];
	pie("vPei",vPeiName,vPeiData);*/

	//画柱状图调用bar();
	var sBarName=["正在施工","停工","一竣工停产"];
	var sBarData=[60,100,60];
	// bar("sBar",sBarName,sBarData,0,"40px","#f287fe","#04c8fe");
	bar("sBar",sBarName,sBarData,0,"40px","#4fb6fe");

	var cityBarName=["市中区","市中区","市中区","市中区","市中区","市中区","市中区","市中区"];
	var cityBarData=[90,40,30,50,20,60,80,76];
	/*bar("cityBar",cityBarName,cityBarData,-45,"15px","#01d6a8","#01c9fd");*/
	bar("cityBar",cityBarName,cityBarData,-45,"15px","#01d2c0");

	var dbarName=["名称","名称","名称","名称","名称","名称","名称","名称"];
	var dbarData1=[100,300,200,90,150,400,390,260];
	var dbarData2=[80,120,100,40,100,300,290,140];
	dbar("dbar",dbarName,dbarData1,dbarData2,-45,"15px","#01d2c0","#4fb6fe");


	//整体项目情况点击事件
	$(".circle").click(function(){
		$("#listInfo").css("display","block");
		$("#shadow").css("display","block");
	})

	//弹出框关闭的方法
	function close(){
		$("#listInfo").css("display","none");
		$("#shadow").css("display","none");
	}
	$("#listInfo button").click(function(){
		close();
	})
	$("#listInfo label").click(function(){
		close();
	})
})
