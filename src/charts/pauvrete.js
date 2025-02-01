const ctx = document.getElementById('pauvreteChart').getContext('2d');

  const labels = ["Mayotte", "France", "Russie", "Japon", "Monde"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Taux de pauvreté en 2019 (%)',
      data: [28, 14.6, 12.3, 15.7, 9.2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Taux de pauvreté (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Région/Pays'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Taux de pauvreté par région/pays en 2019'
        }
      }
    },
  };

  new Chart(ctx, config);