import BaseSearchView from '../base/BaseSearchView.js';

class FavouriteMusicSearchView extends BaseSearchView {
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
    // Required collection
    if (!options.collection) {
      throw new Error('Bắt buộc phải có collection');
    }
    this.collection = options.collection;
    // Nhập đường dẫn template search
    this.templateUrl = 'public/templates/FavouriteMusic/searchTemplate.html';
    // Load search template
    this.loadSearchTemplate();
  }

  /**
   * Xử lý sự kiện
   */
  events() {
    return {
      'click .add-btn': 'handleAddClick',
    };
  }

  handleAddClick(e) {
    e.preventDefault();
    window.location.href = '/MyChoiceProject/MyChoice/admin.html#add';
  }

  render() {
    super.render();
  }

  renderResults() {
    this.renderTableTemplate(this.collection, '#list-search', (item) => `
      <tr>
        <td>${_.escape(item.id)}</td>
        <td>${_.escape(item.title)}</td>
        <td>${_.escape(item.artist)}</td>
        <td>${_.escape(item.album)}</td>
        <td>
          <a href="#favourite_music/${item.id}" class="edit">
            <i class="fa fa-pencil"></i>
          </a> 
          <a href="#" class="trash">
            <i class="fa fa-trash-o"></i>
          </a>
        </td>
      </tr>
    `);
  }
}

export default FavouriteMusicSearchView;
