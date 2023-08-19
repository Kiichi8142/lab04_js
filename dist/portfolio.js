const progDetailData = {
  labels: [
    'Planning',
    'Designing',
    'Writing',
    'Update and Expand',
    'Debugging',
    'Simplifying'
  ],
  datasets: [{
    label: 'Python',
    data: [90, 70, 95, 80, 70, 80],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.1)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'JS',
    data: [80, 70, 50, 80, 60, 60],
    fill: true,
    backgroundColor: 'rgba(255, 224, 15, 0.1)',
    borderColor: 'rgb(255, 224, 15)',
    pointBackgroundColor: 'rgb(255, 225, 15)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 224, 15)'
  }, {
    label: 'Lua',
    data: [60, 75, 65, 65, 80, 75],
    fill: true,
    backgroundColor: 'rgba(22, 30, 195, 0.1)',
    borderColor: 'rgb(22, 30, 195)',
    pointBackgroundColor: 'rgb(22, 30, 195)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(22, 30, 195)'
  }, {
    label: 'C#',
    data: [50, 50, 25, 15, 45, 45],
    fill: true,
    backgroundColor: 'rgba(153, 102, 255, 0.1)',
    borderColor: 'rgb(153, 102, 255)',
    pointBackgroundColor: 'rgb(153, 102, 255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(153, 102, 255)'
  }, {
    label: 'C/C++',
    data: [50, 50, 45, 35, 55, 45],
    fill: true,
    backgroundColor: 'rgba(75, 192, 192, 0.1)',
    borderColor: 'rgb(175, 192, 192)',
    pointBackgroundColor: 'rgb(75, 192, 192)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(75, 192, 192)'
  }]
};

let data = {
  labels: ['Python', 'Lua', 'JS', 'C/C++', 'C#'],
  datasets: [{
      label: 'Programming Skills',
      backgroundColor: [
          'rgb(255, 99, 132)',   // Python
          'rgb(54, 162, 235)',   // Lua
          'rgb(255, 205, 86)',   // JS (JavaScript)
          'rgb(75, 192, 192)',   // C/C++
          'rgb(153, 102, 255)'   // C#
      ],
      borderWidth: 1,
      data: [95, 70, 80, 50, 25]
  }]
};

document.addEventListener("DOMContentLoaded", function(){

    // Create the bar chart
    let barChart = new Chart(document.getElementById('myChart').getContext('2d'), {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    let radarChart = new Chart(document.getElementById('myChart5').getContext('2d'), {
      type: 'radar',
      data: progDetailData,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
  });
})
