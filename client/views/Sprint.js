var graphAccordion, randomAccordion;

Template.Sprint.rendered = function () {
    $('body > .sidebar').sidebar('hide');
    graphAccordion = $('.ui.accordion').accordion();
    randomAccordion = $('.ui.accordion').accordion();
	
	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
			var lineChartData = {
				labels : ["Feb 4","Feb 8","Feb 12","Feb 16","Feb 20","Feb 24","Feb 28"],
				datasets : [
					{
						label: "My First dataset",
						fillColor : "rgba(220,220,220,0.2)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(220,220,220,1)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					},
					{
						label: "My Second dataset",
						fillColor : "rgba(151,187,205,0.2)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(151,187,205,1)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					}
				]
			}
		window.onload = function(){
			var ctx = document.getElementById("canvas").getContext("2d");
			window.myLine = new Chart(ctx).Line(lineChartData, {
				responsive: true
			});
		}



}

Template.Sprint.events({
	'click #openGraphAccordion': function(e){
		e.preventDefault();
		graphAccordion.accordion("toggle", 0);
	},
	'click #dropAccordion': function(e){
		e.preventDefault();
		randomAccordion.accordion("toggle", 0);

	}
});

