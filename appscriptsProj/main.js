const show3Room = document.getElementById('room3-button');
const show4Room = document.getElementById('room4-button');
const show5Room = document.getElementById('room5-button');

const roomChart = new Chart('room3-graph', {
  type: 'bar',
  data: {
      labels: ['Ang Mo Kio', 'Bishan', 'Bukit Merah', 'Jurong East', 'Punggol', 'Tampines', 'Toa Payoh', 'Woodlands', 'Yishun'],
      datasets: [{
          label: 'Cost of Rent',
          data: [2300, 2600, 2600, 2500, 2850, 2500, 2400, 2200, 2400],
          backgroundColor: 'rgba(255, 139, 126, 0.5)', 
          borderColor: 'rgba(255, 130, 126, 0.5)',
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
        y:{
          suggestedMin:0,
          suggestedMax:4000
        }
      },
      maxBarThickness: 40,
      responsive: false
  }
});

show3Room.addEventListener('click', () => {
  const ctx = document.getElementById('room3-graph').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ang Mo Kio', 'Bishan', 'Bukit Merah', 'Jurong East', 'Punggol', 'Tampines', 'Toa Payoh', 'Woodlands', 'Yishun'],
        datasets: [{
            label: 'Cost of Rent',
            data: [2300, 2600, 2600, 2500, 2850, 2500, 2400, 2200, 2400],
            backgroundColor: 'rgba(255, 139, 126, 0.5)',
            borderColor: 'rgba(225,139,126,0.5)',
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
                text: 'Cost of Rent',
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
          y:{
            suggestedMin:0,
            suggestedMax:4000
          }
        },
        maxBarThickness: 40,
        responsive: false
    }
  });
  
});

show4Room.addEventListener('click', () => {
  roomChart.config.data.datasets = [{
    label: 'Cost of Rent',
    data: [2900, 3200, 3500, 2900, 3000, 2800, 3450, 2650, 2800],
    backgroundColor: 'rgba(255, 139, 126, 0.7)',
    borderColor: 'rgba(255, 139, 126, 0.7)',
    borderWidth: 1,
    barPercentage: 0.8,
    categoryPercentage: 0.9,
    borderRadius: 10

}];
roomChart.update(); });

show5Room.addEventListener('click', () => {
  roomChart.config.data.datasets = [{
    label: 'Cost of Rent',
            data: [3150, 3550, 3800, 2700, 3100, 3200, 3200, 3100, 3150],
            backgroundColor: 'rgba(255, 139, 126)',
            borderColor: 'rgba(255, 139, 126)',
            borderWidth: 1,
            barPercentage: 0.8,
            categoryPercentage: 0.9,
            borderRadius: 10
  
        }]
        roomChart.update(); });

show3Room.addEventListener('click', () => {
  roomChart.config.data.datasets = [{
    label: 'Cost of Rent',
            data: [2300, 2600, 2600, 2500, 2850, 2500, 2400, 2200, 2400],
            backgroundColor: 'rgba(255, 139, 126, 0.5)',
            borderColor: 'rgba(255, 139, 126, 0.5)',
            borderWidth: 1,
            barPercentage: 0.8,
            categoryPercentage: 0.9,
            borderRadius: 10
  }]
    roomChart.update(); });

    function convertIncome() {
        const income = document.f1.income.value;
        console.log(income);
      
        const recommendedRent = income * 0.4;
        console.log(recommendedRent);
        document.getElementById("rent").innerHTML="The maximum amount you should spend on rent is $" + recommendedRent
      }
      
        // create a new chart object
        var myChart = new Chart(document.getElementById('myChart'), {
          type: 'line',
          data: {
              labels: ['January', 'February', 'March', 'April', 'May'],
              datasets: [{
                  label: 'My Dataset',
                  data: [10, 20, 30, 40, 50],
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              responsive: true,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
      


      const data = {
        labels: ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4', '2021 Q1', '2021 Q2', '2021 Q3',
      '2021 Q4','2022 Q1', '2022 Q2', '2022 Q3', '2022 Q4'],
        datasets: [
          {
            label: '3-Room',
            data: [1755, 1740, 1780, 1815, 1815, 1827,1859,1913,2070,2273,2453],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: '4-Room',
            data: [2098, 2073, 2118, 2167, 2161, 2190, 2231,2284,2350,2465,2727,3038],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          },
          {
            label: '5-Room',
            data: [2241, 2214, 2263, 2295, 2309, 2351, 2383,2419,2410,2620,2916,3197],
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
          }
        ]
      };
      
      const config = {
        type: 'line',
        data: data,
        options: {
          plugins:{
            title:{
              display:true,
              text: 'Average Rent Prices Per Quarter, Since the Pandemic'
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Quarter'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Rent Price (SGD)'
              }
            }
          }
        }
      };
      
      const myNewChart = new Chart(
        document.getElementById('myNewChart'),
        config
      );
  

