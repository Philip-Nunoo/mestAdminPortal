// dashboard.js
function drawChart(data, selector){
	var ctx = $(selector).get(0).getContext("2d");
	var options = [
	{
	    //Boolean - Whether we should show a stroke on each segment
	    segmentShowStroke : true,

	    //String - The colour of each segment stroke
	    segmentStrokeColor : "#fff",

	    //Number - The width of each segment stroke
	    segmentStrokeWidth : 2,

	    //Number - The percentage of the chart that we cut out of the middle
	    percentageInnerCutout : 50,
	    animationSteps : 100,
	    animationEasing : "easeOutBounce",
	    animateRotate : true,

	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : false,

	    //String - A legend template
	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

	}];

	var myDoughnutChart = new Chart(ctx).Doughnut(data, options);
}

Template.dashboard.rendered = function () {
	var dataSet1 = Applicants.find().count() + 12;
	var dataSet2 = Eits.find().count() + 17;
	var dataSet3 = 0 + 99;
	total = dataSet1 + dataSet2 + dataSet3;

	var data1 = [
	{
		value: dataSet1,
		color:"#008799",
		highlight: "#FF5A5E",
		label: "Applicants"
	},
	{
		value: total,
		color: "#32C9DE",
		highlight: "#FFC870",
		label: "All"
	}
	];

	var data2 = [
	{
		value: dataSet2,
		color:"#008799",
		highlight: "#FF5A5E",
		label: "Eits"
	},
	{
		value: total,
		color: "#32C9DE",
		highlight: "#FFC870",
		label: "All"
	}
	];

	var data3 = [
	{
		value: dataSet3,
		color:"#008799",
		highlight: "#FF5A5E",
		label: "Alumnis"
	},
	{
		value: total,
		color: "#32C9DE",
		highlight: "#FFC870",
		label: "All"
	}
	];


	drawChart(data1, '#pieChart1');
	drawChart(data2, '#pieChart2');
	drawChart(data3, '#pieChart3');
	// drawChart(data, '.ct-chart2');
	// drawChart(data, '.ct-chart3');
	// drawChart(data, '.ct-chart4');
};
Template.dashboard.helpers({
	item: function () {
		return [
		{
			numberOfProspects: Prospects.find().count(),
			numberOfApplicants: Applicants.find().count(),
			numberOfEits: Eits.find().count()
		}
		]
	}
});