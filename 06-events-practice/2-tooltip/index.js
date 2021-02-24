class Tooltip {
  pointerOnOver = (event) => {
    if(!event.target.closest('div[data-tooltip]')) return;
    let elemBelow = document.elementFromPoint(event.pageX, event.pageY);
    let text = elemBelow.dataset.tooltip;
    this.render(text, event);
  } 

  pointerOnOut = (event) => {
    if(!event.target.closest('div[data-tooltip]')) return;
    this.remove();
  } 

  moveAt = (pageX, pageY) => {
    this.element.style.left = `${pageX}px`;
    this.element.style.top = `${pageY}px`;
  }

  pointerOnMove = (event) => {
    this.moveAt(event.pageX, event.pageY);
  }

  initialize() {
    document.body.addEventListener('pointerover', this.pointerOnOver);
    document.body.addEventListener('pointerout', this.pointerOnOut);
    document.body.addEventListener('pointermove', this.pointerOnMove);
  }

  tooltipTemplate(text = 'some tooltip') {
    return `
      <div class="tooltip">${text}</div>
    `;
  }

  render(text, event) {
    const container = document.createElement('div');
    container.innerHTML = this.tooltipTemplate(text);
    const element = container.firstElementChild;
    this.element = element;
    this.show(event);
  }

  show(event) {
    this.element.style.position = 'absolute';
    this.element.style.zIndex = 1000;
    document.body.append(this.element);
    this.moveAt(event.pageX, event.pageY);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    document.body.removeEventListener('pointerover', this.pointerOnOver);
    document.body.removeEventListener('pointerout', this.pointerOnOut);
    document.body.removeEventListener('pointermove', this.pointerOnMove);
    this.element = null;
  }
}

const tooltip = new Tooltip();

export default tooltip;
