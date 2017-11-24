var ctx = $(".pie-chart__chart");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["label1", "label2", "label3", "label4"],
        datasets: [{
            data: [1, 2.5, 2.5, 3],
            backgroundColor: [                
                "#747474",
                "#e75735",
                "#4eb7a8",
                "#e5e5e5"
            ],
            borderWidth: 0            
        }] 
    },
    options: {
        legend: {
            display: false
        },
        cutoutPercentage: 62,
        maintainAspectRatio: false        
    }
});
