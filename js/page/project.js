$(document).ready(function(){
 	var personPieData=[
		            {value:400, name:'瓦工'},
		            {value:100, name:'焊工'},
		            {value:300, name:'力工'},
		            {value:80, name:'泥工'},
		            {value:140, name:'电工'}
		        ];
	var personPieName=['瓦工','焊工','力工','泥工','电工'];
	pie('personPie',personPieName,personPieData);
	var personLineName=[8,9,10,11,12,13,14,15,16];
	var personLineData=[20,40,50,55,9,20,12,45,55];
	line("personLine",personLineName,personLineData);
})
