import BaseContainer from '../base/BaseContainer.js';
import AddView from '../../views/favouriteMusic/AddView.js';
import SearchView from '../../views/favouriteMusic/SearchView.js';
import DetailView from '../../views/favouriteMusic/DetailView.js';
import FavouriteMusicSearchCollection from '../../collections/favouriteMusic/FavouriteMusicSearchCollection.js';

class FavouriteMusicContainer extends BaseContainer {
  constructor() {
    super();
    this.currentView = null;
  }

  showAddView() {
    this._cleanupCurrentView();
    const addView = new AddView();
    this.currentView = addView;
  }

  showSearchView() {
    this._cleanupCurrentView(); // 👈 Dọn view cũ

    const favouriteMusicSearchCollection = new FavouriteMusicSearchCollection();
    const searchView = new SearchView({ collection: favouriteMusicSearchCollection });
    this.currentView = searchView;
  }

  showDetailView(id) {
    this._cleanupCurrentView(); // 👈 Dọn view cũ

    const detailView = new DetailView({ id }); // 👈 Truyền id đúng cách
    this.currentView = detailView; // render sẽ được gọi trong model.sync
  }

  _cleanupCurrentView() {
    if (this.currentView) {
      this.currentView.remove(); // 👈 Gọi remove() đúng cách
      this.currentView = null;
    }
  }
}

export default FavouriteMusicContainer;
