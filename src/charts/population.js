const ctx = document.getElementById('populationChart');

const data = {
    labels: [
        'Part des migrants clandestins',
        'Population native',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [51200, 204800],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };

new Chart(ctx, {
    type: 'doughnut',
    data: data,
});
