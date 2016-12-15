var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
        {
            label: "2013-14 Points",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [3, 6, 9, 10, 10, 13, 16, 17, 20, 20]
        },
        {
            label: "2014-15 Points",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [3, 6, 9, 12, 15, 18, 19, 22, 25, 28]
        }
    ]
};

var data2 = [
    {
        value: 6,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Lost"
    },
    {
        value: 26,
        color: "#27ae60",
        highlight: "#36e15e",
        label: "Won"
    },
    {
        value: 6,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Drawn"
    }
];

var radarData = {
    labels: ["Lge Position", "Points", "Goals For", "Goals Against", "Wins", "Draws", "Losses"],
    datasets: [
        {
            label: "2013-14",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [2, 84, 100, 50, 26, 6, 6]
        },
        {
            label: "2014-15",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [20, 90, 85, 45, 35, 1, 2]
        }
    ]
};

