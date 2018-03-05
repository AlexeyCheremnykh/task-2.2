class Dropdown {
  constructor(selectElem, id) {
    this._id = id;
    this._$dropdown = $(selectElem).parent();
    this._$dropdownSelect = $(selectElem);
  }

  initElement() {
    this._$dropdownSelect.select2({
      placeholder: 'Choose An Option',
      minimumResultsForSearch: -1,
      dropdownParent: this._$dropdown,
      containerCssClass: 'dropdown__container',
      dropdownCssClass: 'dropdown__options',
    });

    return this;
  }
}

const $dropdownSelect = $('.js-dropdown__select');
let id = 0;
$dropdownSelect.each((index, elem) => {
  const dropdown = new Dropdown(elem, id);
  dropdown.initElement();
  id += 1;
});
