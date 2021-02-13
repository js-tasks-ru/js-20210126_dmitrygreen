function chartTemplate(label, value, columns, link) {
  return `
    <div class="column-chart" style="--chart-height: 50">
      <div class="column-chart__title">
        Total ${label}
        ${link == '#' ? `<a href="${link}" class="column-chart__link">View all</a>` : ''}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${value}</div>
        <div data-element="body" class="column-chart__chart">
          ${columns}
        </div>
      </div>
    </div>
  `;
}

function columnsTemplate(data) {
  let columns = '';
  data && data.forEach( (item) => {
   columns += `<div style="--value: ${Math.round(item/2)}" data-tooltip="${item}%"></div>`; }
  )
  return columns;
}

export default class ColumnChart {
  constructor({data = '', label = orders, value = 344, link = '#'} = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.container = null;
    this.element = null;
  
    this.render()
  }

  render() {
    const columns = columnsTemplate(this.data);
    const chart = chartTemplate( this.label, this.value, columns, this.link);

    this.container = document.createElement('div');
    this.container.innerHTML = chart;
    this.element = this.container.firstElementChild;
  }

  get element() {
    return this.element;
  }

  update() {
    this.render();
  }

  remove() {
    this.element.remove();
  }
}
