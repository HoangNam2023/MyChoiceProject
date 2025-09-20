import BaseAddView from '../base/BaseAddView.js';

class FavouriteMusicAddView extends BaseAddView {
  /**
   * Khởi tạo ban đầu
   * @param {*} options Thu thập các options
   * @override
   */
  constructor(options = {}) {
    super({
      el: '#main-body',
      ...options
    });
    // Nhập đường dẫn template search
    this.templateUrl = 'public/templates/FavouriteMusic/addTemplate.html';
    this.loadSearchTemplate();
  }

  render() {
    super.render();
  }
}

export default FavouriteMusicAddView;
