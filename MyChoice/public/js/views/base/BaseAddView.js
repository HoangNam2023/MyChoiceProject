const { View } = window.Backbone;

// Đây là class BaseAddView.js
class BaseAddView extends View {
  // Khởi tạo ban đầu
  constructor(options) {
    super(options);
  }

  /**
   * Render nội dung ra view
   */
  render() {
    if (this.template) {
      this.$el.html(this.template());
    }
    return this;
  }

  /**
   * load template màn add
   */
  loadSearchTemplate() {
    $.get(this.templateUrl)
      .done((templateHtml) => {
        this.template = _.template(templateHtml);
        this.render();
      })
      .fail((_, textStatus, errorThrown) => {
        console.error('Thất bại khi load template:', textStatus, errorThrown);
        this.$el.html('<p>Không thể tải template giao diện.</p>');
      });
  }

  /**
   * Xóa các sự kiện của template sau khi redirect
   */
  remove() {
    this.stopListening();
    this.undelegateEvents();
    this.$el.empty();
  }
}

export default BaseAddView;
