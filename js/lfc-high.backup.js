$(function () {

//Points per game

    $('#pts').highcharts({
        colors: ['#870199', '#e0776d', '#D3171E'],
        title: {
            text: 'Points per game'
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7', 'Match 8', 'Match 9', 'Match 10']
        },
        yAxis: {
            title: {
                text: 'Points'
            }
        },        
        labels: {
            items: [{
                html: 'Total Points',
                style: {
                    left: '50px',
                    top: '-30px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '2012-13',
            data: [0, 1, 0, 1, 0, 3, 1, 3, 1]
        }, {
            type: 'column',
            name: '2013-14',
            data: [3, 3, 3, 1, 0, 3, 3, 1, 3, 0]
        }, {
            type: 'column',
            name: '2014-15',
            data: [3, 0, 3, 0, 0, 1, 3, 3, 1, 0]
        }, {
            type: 'spline',
            name: 'Average Pts p/game',
            data: [2, 1.3, 2, 0.6, 0, 2.3, 2.3, 2.3, 1.6, 0],
            color: Highcharts.getOptions().colors[0],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0],
                fillColor: 'white'
            }
        }]
    });

//Total points for the season

    $('#pts-ttl').highcharts({
        colors: ['#006E5B', '#e5bd09', '#D3171E'],
        title: {
            text: 'Aggregate Points for season'
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7', 'Match 8', 'Match 9', 'Match 10']
        },
        yAxis: {
            title: {
                text: 'Points'
            }
        },        
        labels: {
            items: [{
                html: 'Total Points',
                style: {
                    left: '50px',
                    top: '-30px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '2012-13',
            data: [0, 1, 1, 2, 2, 5, 6, 9, 10]
        }, {
            type: 'column',
            name: '2013-14',
            data: [3, 6, 9, 10, 10, 13, 16, 17, 20, 20]
        }, {
            type: 'column',
            name: '2014-15',
            data: [3, 3, 6, 6, 6, 7, 10, 13, 14]
        }, {
            type: 'pie',
            name: 'Total Pts',
            data: [{
                name: '2012-13',
                y: 61
                //, color: Highcharts.getOptions().colors[0] // 2013-14's color
            },{
                name: '2013-14',
                y: 84
                //, color: Highcharts.getOptions().colors[0] // 2013-14's color
            }, {
                name: '2014-15',
                y: 10
                //, color: Highcharts.getOptions().colors[8] // 2014-15's color
            }],
            center: [170, -10],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });

//All the goals!!

    $('#goals').highcharts({
        colors: ['#870199','#e0776d', '#D3171E'],
        title: {
            text: 'Goals per game'
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7', 'Match 8', 'Match 9', 'Match 10']
        },
        yAxis: {
            title: {
                text: 'Goals'
            }
        },        
        labels: {
            items: [{
                html: 'Total Goals',
                style: {
                    left: '50px',
                    top: '0px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '2012-13',
            data: [0, 2, 0, 1, 1, 5, 0, 1, 2, 1]
        },{
            type: 'column',
            name: '2013-14',
            data: [1, 1, 1, 2, 0, 3, 3, 2, 4, 0]
        }, {
            type: 'column',
            name: '2014-15',
            data: [2, 1, 3, 0, 1, 1, 2, 3, 0, 0]
        }, {
            type: 'spline',
            name: 'Average Goals p/game',
            data: [1, 1.3, 1.3, 1, 0.6, 3, 1.6, 2, 0.3],
            color: Highcharts.getOptions().colors[0],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total Goals',
            data: [{
                name: '2012-13',
                y: 71
                //, color: Highcharts.getOptions().colors[0] // 2013-14's color
            },{
                name: '2013-14',
                y: 101
                //, color: Highcharts.getOptions().colors[0] // 2013-14's color
            }, {
                name: '2014-15',
                y: 13
                //, color: Highcharts.getOptions().colors[8] // 2014-15's color
            }],
            center: [170, 20],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });

//Donuts below!!


    $('#wld-14-15').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '2014-15',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Win, Lose or Draw',
            innerSize: '50%',
            data: [
                ['Won', 4],
                ['Lost', 3],
                ['Drew', 2]
            ]
        }]
    });

    $('#wld-13-14').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '2013-14',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Win, Lose or Draw',
            innerSize: '50%',
            data: [
                ['Won', 26],
                ['Lost', 6],
                ['Drew', 6]
            ]
        }]
    });

    $('#wld-12-13').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '2012-13',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Win, Lose or Draw',
            innerSize: '50%',
            data: [
                ['Won', 16],
                ['Lost', 13],
                ['Drew', 9]
            ]
        }]
    });

});




