document.addEventListener("DOMContentLoaded", function() {
  // Sample data for demonstration
  const years = [2010, 2011, 2012, 2013, 2014, 2015];
  const amounts = [50, 70, 90, 60, 80, 100];

  // Get the canvas element
  const canvas = document.getElementById("graficoadmision").getContext("2d");

  // Create the chart
  new Chart(canvas, {
    type: "line",
    data: {
      labels: years,
      datasets: [{
        label: "Amount",
        data: amounts,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Years"
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Amount"
          }
        }
      }
    }
  });
});
