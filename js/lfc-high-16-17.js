// red: #D3171E
// yellow: #fccb0a
// dk green: #006E5B
// toxic thunder: #9FD600
// silver fleck: #CFCAC7
// purple: #870199

$(function() {

    //Points per game

    $('#pts').highcharts({
        colors: ['#fccb0a', '#D3171E'],
        title: {
            text: '<h2>Points per game</h2>',
            style: {
                fontFamily: 'Roboto',
                fontSize: 24
            }
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
            max: 3,
            min: 0
        },
        labels: {
            items: [{
                html: '',
                style: {
                    left: '50px',
                    top: '-30px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            // type: 'column',
            name: '2013-14',
            data: [3, 3, 3, 1, 0, 3, 3, 1, 3, 0, 3, 1, 0, 3, 3, 3, 3, 0, 0, 3, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 3]
        }, {
            //type: 'column',
            name: '2016-17',
            data: [3, 0, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 0, 1, 3, 3, 3, 3, 1, 1, 0, 1, 0, 3, 0, 3, 3, 1, 3, 1, 3, 3]
        }]
    });

    //Total points for the season

    $('#pts-ttl').highcharts({
        colors: ['#006E5B', '#D3171E'],
        title: {
            text: 'Aggregate Points for season',
            style: {
                fontFamily: 'Roboto',
                fontSize: 24
            }
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
            name: '2013-14',
            data: [3, 6, 9, 10, 10, 13, 16, 17, 20, 20, 23, 24, 24, 27, 30, 33, 36, 36, 36, 39, 42, 43, 46, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 80, 81, 84]
        }, {
            type: 'column',
            name: '2016-17',
            data: [3, 3, 4, 7, 10, 13, 16, 17, 20, 23, 26, 27, 30, 30, 31, 34, 37, 40, 43, 44, 45, 45, 46, 46, 49, 49, 52, 55, 56, 59, 60, 63, 66]
        }, {
            type: 'pie',
            name: 'Total Pts',
            data: [{
                name: '2013-14',
                y: 84
                    //, color: Highcharts.getOptions().colors[0] // 2013-14's color
            }, {
                name: '2016-17',
                y: 66
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

    //All the goals per game!!

    $('#goals').highcharts({
        colors: ['#9FD600', '#D3171E'],
        title: {
            text: 'Goals per game',
            style: {
                fontFamily: 'Roboto',
                fontSize: 24
            }
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
            name: '2013-14',
            data: [1, 1, 1, 2, 0, 3, 3, 2, 4, 0, 4, 3, 1, 5, 4, 5, 3, 1, 1, 2, 5, 2, 4, 1, 5, 3, 4, 3, 3, 6, 2, 4, 2, 3, 3, 0, 3, 2]
        }, {
            type: 'column',
            name: '2016-17',
            data: [4, 0, 1, 4, 2, 5, 2, 0, 2, 4, 6, 0, 2, 3, 2, 3, 1, 4, 1, 2, 1, 2, 1, 0, 2, 1, 3, 2, 1, 3, 2, 2, 1]
        }, {
            type: 'pie',
            name: 'Total Goals',
            data: [{
                name: '2013-14',
                y: 101
                    //, color: Highcharts.getOptions().colors[0] // 2013-14's color
            }, {
                name: '2016-17',
                y: 69
                    //, color: Highcharts.getOptions().colors[8] // 2016-17's color
            }],
            center: [170, 20],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });

    //Total goals for the season

    $('#goals-ttl').highcharts({
        colors: ['#CFCAC7', '#D3171E'],
        title: {
            text: 'Aggregate Goals for season',
            style: {
                fontFamily: 'Roboto',
                fontSize: 24
            }
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
                html: 'Total Goals',
                style: {
                    left: '50px',
                    top: '-30px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '2013-14',
            data: [1, 2, 3, 5, 5, 8, 11, 13, 17, 17, 21, 24, 25, 30, 34, 39, 42, 43, 44, 46, 51, 53, 57, 58, 63, 66, 70, 73, 76, 82, 84, 88, 90, 93, 96, 96, 99, 101]
        }, {
            type: 'column',
            name: '2016-17',
            data: [4, 4, 5, 9, 11, 16, 18, 18, 20, 24, 30, 30, 32, 35, 37, 40, 41, 45, 46, 48, 49, 51, 52, 52, 54, 55, 58, 60, 61, 64, 66, 68, 69]
        }, {
            type: 'pie',
            name: 'Total Goals',
            data: [{
                name: '2013-14',
                y: 101
                    //, color: Highcharts.getOptions().colors[0] // 2013-14's color
            }, {
                name: '2016-17',
                y: 69
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

    //Donuts below!!


    $('#wld-16-17').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '2016-17',
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
                ['Won', 19],
                ['Lost', 5],
                ['Drew', 9]
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

    //Top scorers

    $('#plr-goals').highcharts({
        colors: ['#D3171E'],
        title: {
            text: '<h2>Top scorers</h2>',
            style: {
                fontFamily: 'Roboto',
                fontSize: 24
            }
        },
        xAxis: {
            labels: {
                rotation: -45,
            },
            categories: ['Sadio Mané', 'Roberto Firmino', 'Adam Lallana', 'James Milner', 'Philippe Coutinho', 'Divock Origi', 'Emre Can', 'Georginio Wijnaldum', 'Daniel Sturridge', 'Dejan Lovren', 'Jordan Henderson', 'Joel Matip']
        },
        yAxis: {
            title: {
                text: 'PL Goals'
            },
            //max: 25
        },
        labels: {
            items: [{
                html: '',
                style: {
                    left: '50px',
                    top: '-30px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Goals',
            data: [13, 11, 7, 7, 9, 6, 4, 5, 2, 2, 1, 1]
        }]
    });

});