class Tooltip {
  pointerOnOver = (event) => {
    if(!event.target.closest('div[data-tooltip]')) return;
    const elemBelow = document.elementFromPoint(event.pageX, event.pageY);
    let text = elemBelow.dataset.tooltip;
   
    document.body.addEventListener('pointermove', this.pointerOnMove);
    this.render(text);
    this.showElementAtMousePosition(event);
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
  }

  tooltipTemplate(text = 'some tooltip') {
    return `
      <div class="tooltip">${text}</div>
    `;
  }

  render(text) {
    const container = document.createElement('div');
    container.innerHTML = this.tooltipTemplate(text);
    const element = container.firstElementChild;
    this.element = element;
    document.body.append(this.element);
  }

  showElementAtMousePosition(event) {
    this.element.style.position = 'absolute';
    this.element.style.zIndex = 1000;
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
  }
}

const tooltip = new Tooltip();

export default tooltip;
