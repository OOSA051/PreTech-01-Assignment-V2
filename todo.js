// TODO COMPONENT

'use strict';

var ctx = document.getElementById("myChart2").getContext("2d");

var data = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri",],
    datasets: [
      {
        label: 'Emergency',
        data: [
            0, 1, 4, 8, 6, 5, 15
        ],
        pointBackgroundColor: '#FCFCFC',
        pointStyle: 'circle',
        pointHoverBackgroundColor: '#39FCCC',
        borderColor: '#F43737',
      
 
    },
        
        
        
        
{
        label: 'Food',
        data: [
            0, 10, 12, 8, 6, 10, 15
        ],
        pointBackgroundColor: '#FCFCFC',
        pointStyle: 'circle',
        borderColor: '#39FCCC',
        pointHoverBackgroundColor: '#39FCCC',
 
    },
        
        
        
{
        label: 'Food',
        data: [
            0, 4, 8, 10, 6, 8, 14
        ],
        pointBackgroundColor: '#FCFCFC',
        pointStyle: 'circle',
        borderColor: '#83D3FF',
        pointHoverBackgroundColor: '#39FCCC',
 
    },
        
    ]
}

var myChart2 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                    
                   
                },
              
            }]
            
            }
    }
});






          
              
