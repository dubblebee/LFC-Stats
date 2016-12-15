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
            categories: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7', 'Match 8', 'Match 9', 'Match 10', 'Match 11', 'Match 12', 'Match 13', 'Match 14', 'Match 15', 'Match 16', 'Match 17', 'Match 18', 'Match 19', 'Match 20', 'Match 21', 'Match 22', 'Match 23', 'Match 24', 'Match 25', 'Match 26', 'Match 27', 'Match 28', 'Match 29', 'Match 30', 'Match 31', 'Match 32', 'Match 33', 'Match 34', 'Match 35', 'Match 36', 'Match 37', 'Match 38']
        },
        yAxis: {
            title: {
                text: 'Points'
            },
            max: 3
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
            data: [0, 1, 0, 1, 0, 3, 1, 3, 1, 1, 1, 3, 1, 0, 3, 3, 0, 3, 0, 3, 3, 0, 3, 1, 1, 0, 3, 3, 3, 0, 3, 1, 1, 1, 3, 1, 3, 3]
        }, {
            type: 'column',
            name: '2013-14',
            data: [3, 3, 3, 1, 0, 3, 3, 1, 3, 0, 3, 1, 0, 3, 3, 3, 3, 0, 0, 3, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 3]
        }, {
            type: 'column',
            name: '2014-15',
            data: [3, 0, 3, 0, 0, 1, 3, 3, 1, 0, 0, 0, 3, 3, 1, 0, 1, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 3, 0, 0, 3, 1, 0, 3, 1]
        }, {
            type: 'spline',
            name: 'Average Pts p/game',
            data: [2.0, 1.3, 2.0, 0.7, 0.0, 2.3, 2.3, 2.3, 1.7, 0.3, 1.3, 1.3, 1.3, 2.0, 2.3, 2.0, 1.3, 2.0, 1.0, 2.3, 3.0, 1.3, 3.0, 1.0, 2.3, 2.0, 3.0, 3.0, 3.0, 1.0, 2.0, 2.3, 1.7, 1.3, 3.0, 0.7, 1.3, 2.0],
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
            categories: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7', 'Match 8', 'Match 9', 'Match 10', 'Match 11', 'Match 12', 'Match 13', 'Match 14', 'Match 15', 'Match 16', 'Match 17', 'Match 18', 'Match 19', 'Match 20', 'Match 21', 'Match 22', 'Match 23', 'Match 24', 'Match 25', 'Match 26', 'Match 27', 'Match 28', 'Match 29', 'Match 30', 'Match 31', 'Match 32', 'Match 33', 'Match 34', 'Match 35', 'Match 36', 'Match 37', 'Match 38']
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
            data: [0, 1, 1, 2, 2, 5, 6, 9, 10, 11, 12, 15, 16, 16, 19, 22, 22, 25, 25, 28, 31, 31, 34, 35, 36, 36, 39, 42, 45, 45, 48, 49, 50, 51, 54, 55, 58, 61]
        }, {
            type: 'column',
            name: '2013-14',
            data: [3, 6, 9, 10, 10, 13, 16, 17, 20, 20, 23, 24, 24, 27, 30, 33, 36, 36, 36, 39, 42, 43, 46, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 80, 81, 84]
        }, {
            type: 'column',
            name: '2014-15',
            data: [3, 3, 6, 6, 6, 7, 10, 13, 14, 14, 14, 14, 17, 20, 21, 21, 22, 25, 28, 29, 32, 35, 38, 39, 42, 45, 48, 51, 54, 54, 54, 57, 58, 58, 61, 62]
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
                y: 57
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
            categories: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7', 'Match 8', 'Match 9', 'Match 10', 'Match 11', 'Match 12', 'Match 13', 'Match 14', 'Match 15', 'Match 16', 'Match 17', 'Match 18', 'Match 19', 'Match 20', 'Match 21', 'Match 22', 'Match 23', 'Match 24', 'Match 25', 'Match 26', 'Match 27', 'Match 28', 'Match 29', 'Match 30', 'Match 31', 'Match 32', 'Match 33', 'Match 34', 'Match 35', 'Match 36', 'Match 37', 'Match 38']
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
            data: [0, 2, 0, 1, 1, 5, 0, 1, 2, 1, 1, 3, 0, 1, 1, 3, 1, 4, 1, 3, 3, 1, 5, 2, 2, 0, 5, 4, 3, 1, 2, 0, 0, 2, 6, 0, 3, 1]
        },{
            type: 'column',
            name: '2013-14',
            data: [1, 1, 1, 2, 0, 3, 3, 2, 4, 0, 4, 3, 1, 5, 4, 5, 3, 1, 1, 2, 5, 2, 4, 1, 5, 3, 4, 3, 3, 6, 2, 4, 2, 3, 3, 0, 3, 2]
        }, {
            type: 'column',
            name: '2014-15',
            data: [2, 1, 3, 0, 1, 1, 2, 3, 0, 0, 1, 1, 1, 3, 0, 0, 2, 1, 4, 2, 1, 2, 2, 0, 3, 2, 2, 2, 1, 1, 1, 2, 0, 0, 2, 1]
        }, {
            type: 'spline',
            name: 'Average Goals p/game',
            data: [1.0, 1.3, 1.3, 1.0, 0.7, 3.0, 1.7, 2.0, 2.0, 0.3, 2.0, 2.3, 0.7, 3.0, 1.7, 2.7, 2.0, 2.0, 2.0, 2.3, 3.0, 1.7, 3.7, 1.0, 3.3, 1.7, 3.7, 3.0, 2.3, 2.7, 1.7, 2.0, 0.7, 1.7, 3.7, 0.3, 2.0, 1.0],
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
                y: 47
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
                ['Won', 18],
                ['Lost', 10],
                ['Drew', 8]
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




