// BaseView.js
const { View } = window.Backbone;

class BaseView extends View {
  constructor(options) {
    super(options);
  }

  /**
   * Render template
   */
  render() {
    this.loadDetailTemplate();
  }

  loadDetailTemplate() {
    if (this.template) {
      this.renderTemplate();
    } else {
      $.get(this.templateUrl, (html) => {
        this.template = _.template(html);
        this.renderTemplate();
      });
    }
  }

  renderTemplate() {
    const data = this.model?.toJSON?.();
    if (!this.template || !data) return;
    this.undelegateEvents();
    this.$el.html(this.template(data));
    this.delegateEvents();
  }

  remove() {
    this.stopListening();
    this.undelegateEvents();
    this.$el.empty();
  }
}

export default BaseView;
