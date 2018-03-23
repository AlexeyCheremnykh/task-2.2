/*  global Chart */
/*  eslint no-unused-vars: 0 */

class PieChart {
  constructor(elem, id) {
    this._id = id;
    this._$block = $(elem);
    this._$canvas = this._$block.children('.js-pie-chart__canvas');
  }

  initElement() {
    const myDoughnutChart = new Chart(this._$canvas, {
      type: 'doughnut',
      showTooltips: false,
      data: {
        datasets: [{
          data: this._$block.data('values'),
          backgroundColor: [
            '#747474',
            '#e75735',
            '#4eb7a8',
            '#e5e5e5',
          ],
          borderWidth: 0,
        }],
      },
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 65,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false,
        },
        hover: {
          mode: null,
        },
      },
    });

    return this;
  }
}

const $pieChart = $('.js-pie-chart');
let id = 0;
$pieChart.each((index, elem) => {
  const pieChart = new PieChart(elem, id);
  pieChart.initElement();
  id += 1;
});
