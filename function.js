let ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontColor = "#888";
Chart.defaults.global.maintainAspectRatio = true;

let t = "0.55";

let myChart = new Chart(ctx, {
  plugins: [
    {
      beforeInit: function(chart) {
        chart.legend.afterFit = function() {
          this.height = this.height + 20;
        };
      }
    }
  ],
  type: "pie",

  data: {
    labels: ["Python", "JavaScript", "Objective-C", "Java", "C#", "Swift"],
    datasets: [
      {
        label: "languages",
        backgroundColor: [          
          `rgb(86, 61, 124, ${t})`,
		  `rgba(241, 224, 90, ${t})`,
          `rgb(227, 76, 38, ${t})`,
          `rgb(44, 62, 80, ${t})`,
          `rgb(43, 116, 137, ${t})`,
          `rgb(192, 225, 61, ${t})`
        ],
        borderColor: [        
          "#563d7c",
		  "#f1e05a",
          "#e34c26",
          "#2c3e50",
          "#2b7489",
          "#C0E13D"
        ],
        borderWidth: 2.4,
        data: [6, 6, 4, 3, 3, 2],
        barThickness: 30
      }
    ]
  },
  options: {
    cutoutPercentage: 65,
    // responsive: false,
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true
    //       }
    //     }
    //   ]
    // },
    legend: {
      display: true,
      position: "top",
      align: "center",
      labels: {
        boxWidth: 7,
        padding: 14,
        usePointStyle: true
      }
    },
    tooltips: {
      mode: "point",
      titleFontColor: "black",
      bodyFontColor: "black",
      backgroundColor: "#eee"
    }
  }
});

