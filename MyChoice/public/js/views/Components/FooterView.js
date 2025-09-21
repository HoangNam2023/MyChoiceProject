const { View } = window.Backbone;

// Đây là class FooterView.js
class FooterView extends View {
  // Khởi tạo ban đầu
  constructor(options) {
    super({
      el: '#footer',
      ...options
    });
    // Nhập đường dẫn template search
    this.templateUrl = 'public/templates/Components/footerTemplate.html';
    // Load search template
    this.loadSearchTemplate();
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
   * load template màn search
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

export default FooterView;
