const { View } = window.Backbone;

// Đây là class BaseSearchView.js
class BaseSearchView extends View {
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
   * load template màn search
   */
  loadSearchTemplate() {
    $.get(this.templateUrl)
      .done((templateHtml) => {
        this.template = _.template(templateHtml);
        this.render();
        this.collection.fetch({
          reset: true,
          success: () => this.renderResults(),
          error: (_, response) => {
            console.error('Thất bại khi fetch collection:', response);
            this.$('#list-views table').html('<tr><td colspan="5">Không thể tải dữ liệu.</td></tr>');
          }
        });
      })
      .fail((_, textStatus, errorThrown) => {
        console.error('Thất bại khi load template:', textStatus, errorThrown);
        this.$el.html('<p>Không thể tải template giao diện.</p>');
      });
  }

  /** 
   * Render table template search 
   * @param {Collection} collection - collection các model cần render
   * @param {string} selector - Selector CSS để tìm container chứa bảng kết quả
   * @param {function} itemRenderer - Hàm callback nhận item, trả về chuỗi HTML của dòng tương ứng
   */
  renderTableTemplate(collection, selector, itemRenderer) {
    if (!this.$el.closest('body').length) {
      console.warn('View đã bị remove — không render');
      return;
    }
    const $container = this.$(selector);
    if (!$container.length) return;
    $container.empty();
    const items = _.chain(collection.models)
      .map(model => model.get('data') || [])
      .flatten()
      .compact()
      .value();
    if (_.isEmpty(items)) {
      $container.append(`<tr><td colspan="5">Không có dữ liệu</td></tr>`);
      return;
    }
    const htmlRows = _.map(items, itemRenderer).join('');
    $container.append(htmlRows);
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

export default BaseSearchView;
