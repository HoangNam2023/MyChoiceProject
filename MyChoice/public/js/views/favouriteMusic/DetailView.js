import FavouriteMusicModelDetail from '../../models/favouriteMusic/FavouriteMusicModelDetail.js';
import FavouriteMusicModelUpdate from '../../models/favouriteMusic/FavouriteMusicModelUpdate.js';
import BaseDetailView from '../base/BaseDetailView.js';

// Đây là class FavouriteMusicDetailView
class FavouriteMusicDetailView extends BaseDetailView {
  constructor(options) {
    super({
      el: '#main-body',
      ...options
    });
    // Thu thập id
    this.id = options.id;
    // Thu thập model từ id
    this.model = new FavouriteMusicModelDetail({ id: this.id });
    // Cờ button submit
    this.isSubmittingFlg = false;
    // Nhập đường dẫn template detail
    this.templateUrl = 'public/templates/FavouriteMusic/detailTemplate.html';
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'error', this.renderError);
    // Thu thập data từ API detail
    this.model.fetch();
  }

  /**
   * Xử lý sự kiện
   */
  events() {
    return {
      'click .update-btn': 'handleSubmit',
      'click .back-btn': 'handleBackClick'
    };
  }

  handleBackClick(e) {
    e.preventDefault();
    window.location.href = '/MyChoiceProject/MyChoice/admin.html#search';
  }

  /**
   * Render lỗi
   * @override
   */
  renderError() {
    this.$el.html('<p>Lỗi khi tải dữ liệu.</p>');
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.isSubmittingFlg) {
      console.warn('Đang gửi, vui lòng chờ...');
      return;
    }
    const formData = this.getFormData();
    this.isSubmittingFlg = true;
    const updateModel = new FavouriteMusicModelUpdate();
    updateModel.set(formData);
    updateModel.save(null, {
      success: () => {
        alert('Cập nhật thành công!');
        this.isSubmittingFlg = false;
      },
      error: () => {
        alert('Có lỗi khi cập nhật.');
        this.isSubmittingFlg = false;
      }
    });
  }

  getFormData() {
    const fields = Object.keys(this.model.attributes);
    const data = {};
    fields.forEach((field) => {
      data[field] = this.$(`input[name="${field}"]`).val()?.trim() || '';
    });
    return data;
  }
}

export default FavouriteMusicDetailView;
