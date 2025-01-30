const ctx = document.getElementById('firstChart');

const labels = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

new Chart(ctx, {
    type: 'line',
    data: data,
});