const show3Room = document.getElementById('3room-button');
const show4Room = document.getElementById('4room-button');
const show5Room = document.getElementById('5room-button');

show3Room.addEventListener('click', () => {
  const ctx = document.getElementById('3room-graph').getContext('2d');

  const myChart = new Chart(ctx, {
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
  const ctx = document.getElementById('4room-graph').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ang Mo Kio', 'Bishan', 'Bukit Merah', 'Jurong East', 'Punggol', 'Tampines', 'Toa Payoh', 'Woodlands', 'Yishun'],
        datasets: [{
            label: 'Cost of Rent',
            data: [2900, 3200, 3500, 2900, 3000, 2800, 3450, 2650, 2800],
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
                text: 'Cost of Rent for 4-room Flats in Singapore',
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

show5Room.addEventListener('click', () => {
  const ctx = document.getElementById('5room-graph').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ang Mo Kio', 'Bishan', 'Bukit Merah', 'Jurong East', 'Punggol', 'Tampines', 'Toa Payoh', 'Woodlands', 'Yishun'],
        datasets: [{
            label: 'Cost of Rent',
            data: [3150, 3550, 3800, 2700, 3100, 3200, 3200, 3100, 3150],
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
                text: 'Cost of Rent for 5-room Flats in Singapore',
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

function convertIncome() {
  const income = document.f1.income.value;
  console.log(income);

  const recommendedRent = income * 0.4;
  console.log(recommendedRent);
  document.getElementById("rent").innerHTML="The maximum amount you should spend is $" + recommendedRent
}


