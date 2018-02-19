/*  global Chart */
/*  eslint no-unused-vars: 0 */

const colors = {
  red: '#e75735',
  darkGrey: '#747474',
  lightGrey: '#e5e5e5',
  blue: '#4eb7a8',
};


class PieChart {
  constructor(elem, id) {
    this._id = id;
    this._$pieChart = $(elem);
    this._$canvas = $(elem).children('.js-pie-chart__canvas');
  }

  initElement() {
    const myDoughnutChart = new Chart(this._$canvas, {
      type: 'doughnut',
      showTooltips: false,
      data: {
        datasets: [{
          data: [
            this._$pieChart.data('val1'),
            this._$pieChart.data('val2'),
            this._$pieChart.data('val3'),
            this._$pieChart.data('val4'),
          ],
          backgroundColor: [
            colors.darkGrey,
            colors.red,
            colors.blue,
            colors.lightGrey,
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
