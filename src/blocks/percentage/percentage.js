const constants = {
  COLOR_RED: '#e75735',
  COLOR_WHITE: '#ffffff',
  SIZE_THICKNESS_RATIO: 19,
  DEFAULT_RADIX: 10,
};

class Percentage {
  constructor(elem, id) {
    this._id = id;
    this._$percentage = $(elem);
    this._$value = $(elem).children('.js-percentage__value');
  }

  initElement() {
    const percentageValue = parseInt(this._$value.text(), constants.DEFAULT_RADIX) / 100;
    const percentageSize = parseInt(this._$percentage.css('height'), constants.DEFAULT_RADIX);
    const percentageThickness = percentageSize / constants.SIZE_THICKNESS_RATIO;

    this._$percentage.circleProgress({
      value: percentageValue,
      size: percentageSize,
      fill: constants.COLOR_RED,
      thickness: percentageThickness,
      emptyFill: constants.COLOR_WHITE,
      startAngle: -Math.PI / 2,
    });

    return this;
  }
}

const $percentage = $('.js-percentage');
let id = 0;
$percentage.each((index, elem) => {
  const percentage = new Percentage(elem, id);
  percentage.initElement();
  id += 1;
});
