const ctx = document.getElementById("feconditeChart");

const labels = ["2016", "2017", "2018", "2019"];

// Données de taux de fécondité par pays (enfants par femme)
const data = {
  labels: labels,
  datasets: [
    {
      label: "Mayotte",
      data: [4.6, 5.0, 4.5, 4.5, 4.5, 4.5, 4.5], // Source : INSEE
      borderColor: "rgb(255, 159, 64)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "France métropolitaine",
      data: [1.92, 1.88, 1.84, 1.86, 1.83, 1.84, 1.68], // Source : INSEE
      borderColor: "rgb(54, 162, 235)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Russie",
      data: [1.76, 1.62, 1.58, 1.5, 1.49, 1.5, 1.58], // Source : Banque mondiale
      borderColor: "rgb(255, 99, 132)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Japon",
      data: [1.45, 1.43, 1.42, 1.36, 1.34, 1.33, 1.3], // Source : Banque mondiale
      borderColor: "rgb(75, 192, 192)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Monde",
      data: [2.51, 2.47, 2.42, 2.37, 2.32, 2.27, 2.22], // Source : Banque mondiale
      borderColor: "rgb(153, 102, 255)",
      fill: false,
      tension: 0.1,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: "Nombre d'enfants par femme",
        },
      },
      x: {
        title: {
          display: true,
          text: "Année",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Indice de fécondité par pays (2016-2019)",
      },
    },
  },
};

new Chart(ctx, config);
