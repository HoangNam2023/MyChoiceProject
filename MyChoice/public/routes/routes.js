import FavouriteMusicContainer from '../js/containers/favouriteMusic/favouriteMusicContainer.js';

const favouriteMusicContainer = new FavouriteMusicContainer();

const AppRouter = Backbone.Router.extend({
  routes: {
    'add' : 'showAddFavouriteMusic',
    'search': 'showFavouriteMusic',
    'favourite_music/:id': 'detailFavouriteMusic',
    '*default': 'defaultRoute'
  },

  showLoading() {
    document.getElementById('loading').style.display = 'block';
  },

  hideLoading() {
    document.getElementById('loading').style.display = 'none';
  },

  showAddFavouriteMusic() {
    this.showLoading();
    setTimeout(() => this.hideLoading(), 300);
    favouriteMusicContainer.showAddView();
  },

  showFavouriteMusic() {
    this.showLoading();
    setTimeout(() => this.hideLoading(), 300);
    // Giả sử render view ngay lập tức
    favouriteMusicContainer.showSearchView();

    // Ẩn loading sau một khoảng ngắn để có hiệu ứng
    
  },

  detailFavouriteMusic(id) {
    this.showLoading();

    favouriteMusicContainer.showDetailView(id);

    setTimeout(() => this.hideLoading(), 300);
  },

  defaultRoute() {
    this.navigate('search', { trigger: true });
  }
});

const appRouter = new AppRouter();
Backbone.history.start();
