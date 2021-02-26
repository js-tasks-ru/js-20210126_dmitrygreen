export default class NotificationMessage {
  static currentMessage;

  constructor(message = '', {duration = 1000, type = 'success'} = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;

    if(NotificationMessage.currentMessage) {
      this.destroyCurrentMessage();
    }

    this.render();
  }

  messageTemplate() {
    return `
    <div class="notification ${this.type}" style="--value:${this.duration}ms">
      <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">Notification</div>
          <div class="notification-body">
          ${this.message}
        </div>
      </div>
    </div>
    `;
  }

  destroyCurrentMessage() {
    NotificationMessage.currentMessage.remove();
  }

  render() {
    const container = document.createElement('div');

    container.innerHTML = this.messageTemplate();

    this.element = container.firstElementChild;

    NotificationMessage.currentMessage = this.element;
  }

  show(parent = document.body) {
    parent.append(this.element);
    setTimeout(() => this.destroy(), this.duration);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    NotificationMessage.activeNotification = null;
  }
}
