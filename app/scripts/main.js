$(document).ready(function(){
  'use strict';


  // Teste Chart.js
  var data = {
      labels: ['05/03', '06/03', '07/03', '08/03', '09/03', '10/03', '11/03'],
      datasets: [
          {
              label: 'Tendências em 7 dias',
              fillColor: 'rgba(255,255,255,0.2)',
              strokeColor: 'rgba(220,220,220,1)',
              pointColor: 'rgb(38, 93, 149)',
              pointStrokeColor: 'rgba(220,220,220,1)',
              pointHighlightFill: 'rgb(92, 158, 13)',
              pointHighlightStroke: 'rgb(76, 132, 7)',
              data: [41.1, 47.3, 52.5, 0, 27.7, 47.9, 58.1]
          }
      ]
  };

  // Not sure why the scaleOverride isn't working...
  var options = {
    animation : true,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : 10,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 8,
    //Number - The scale starting value
    scaleStartValue : 0,
    // String - Scale label font declaration for the scale label
    scaleFontFamily: 'Open Sans, Arial, sans-serif',
    // String - Scale label font colour
    scaleFontColor: '#CCC',
    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: 'Open Sans, Arial, sans-serif',
    // Number - Tooltip label font size in pixels
    tooltipFontSize: 12,
    //Boolean - Whether the line is curved between points
    bezierCurve : false,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  };

  //Get the context of the canvas element we want to select
  var ctx = document.getElementById('myChart').getContext('2d');
  var myLineChart = new Chart(ctx);
  myLineChart.Line(data, options);

});
