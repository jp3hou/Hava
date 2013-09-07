$(document).ready(function() {
    var optionsLine = {
        chart: {
            renderTo: 'linecontainer',
            type: 'line',
            marginRight: 130,
            marginBottom: 25
        },
        title: {
            text: 'Billing History',
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Amount'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+ this.y;
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -10,
                    y: 100,
                    borderWidth: 0
                },
                series: []
            }
            
            $.getJSON("data.json", function(json) {
                optionsLine.xAxis.categories = json[0]['data'];
                optionsLine.series[0] = json[1];
                optionsLine.series[1] = json[2];
                optionsLine.series[2] = json[3];
                optionsLine.series[3] = json[4];
                chart = new Highcharts.Chart(optionsLine);
            }).error(function() {console.log('error');});

             var optionsPie = {
                chart: {
                    renderTo: 'piecontainer',
                    type: 'pie',
                    marginRight: 130,
                    marginBottom: 25
                },
                title: {
                    text: 'Billing by Categories',
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Amount'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                            return '<b>'+ this.series.name +'</b><br/>'+
                            this.x +': '+ this.y;
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -10,
                    y: 100,
                    borderWidth: 0
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share', 
                    data: []    
                }]
            }           
            $.getJSON("data2.json", function(json) {
                optionsPie.series = json;
                 chartPie = new Highcharts.Chart(optionsPie);
            });


});