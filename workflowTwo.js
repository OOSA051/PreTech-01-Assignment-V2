// TODO COMPONENT

'use strict';

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["Miami", "Dubrovnik", "Florida", "VirginIs", "Canada",],
    datasets: [
      {
        label: 'Emergency',
        data: [
            0, 1, 4, 8, 6, 5, 15
        ],
          
        pointBackgroundColor: '#FCFCFC',
        pointStyle: 'circle',
        pointHoverBackgroundColor: '#39FCCC',
        backgroundColor: '#F43737',
        
      
 
    },
        
{
        label: 'Food',
        data: [
            0, 1, 4, 8, 6, 5, 15
        ],
        backgroundColor: '#18EAB8'
      },  
        
        {
        label: 'Shelter',
        data: [
            0, 4, 7, 8, 7, 12, 15
        ],
        backgroundColor: '#83D3FF'
            
            
            
      }
    ]
}

var myChart = new Chart(ctx, {
    type: 'radar',
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






          
              
