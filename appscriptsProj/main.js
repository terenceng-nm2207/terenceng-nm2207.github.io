let convertTemp= function(){
    let inputIncome= document.f1.income.value ;
    console.log(inputIncome);
    rentAmount= inputIncome*0.4
    document.getElementById("maxRent").innerHTML= "The maximum amount you should spend on rent each month is: " + rentAmount
 }


 var ctx = document.getElementById('3room-chart').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Ang Mo Kio', 'Bishan', 'Bukit Merah', 'Jurong East', 'Punggol', 'Tampines', 'Toa Payoh', 'Woodlands', 'Yishun'],
         datasets: [{
             label: 'Cost of Rent',
             data: [2300, 2600, 2600, 2500, 2850, 2500, 2400, 2200, 2400],
             backgroundColor: 'rgba(255, 99, 0.5, 0.4)',
             borderColor: 'rgba(255, 99, 0.5 , 0.4)',
             borderWidth: 1,
             barPercentage: 0.8,
             categoryPercentage: 0.9,
             borderRadius: 10
 
         }]
     },
     options: {
         maintainAspectRatio: false,
         plugins: {
             title: {
                 display: true,
                 text: 'Cost of Rent for 3-room Flats in Singapore',
                 fontColor: '#555',
                 fontSize: 20,
                 padding: 20
             },
             subtitle: {
                 display: true,
                 text: 'As of 4th Quarter of 2022'
             },
             tooltip: {
                 mode: 'index',
                 intersect: false
             }
         },
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true,
                     max: 2850
                 },
                 gridLines:{
                   display:true
                 }
                 
             }]
         },
         maxBarThickness: 40,
         responsive: false
     }
 });



