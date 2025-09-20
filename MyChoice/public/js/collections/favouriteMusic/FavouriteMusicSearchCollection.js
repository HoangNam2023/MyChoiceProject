import FavouriteMusicModelSearch from '../../models/favouriteMusic/FavouriteMusicModelSearch.js';
import BaseCollection from '../base/BaseCollection.js';

class FavouriteMusicCollection extends BaseCollection {
  constructor(options) {
    super(options);
    this.model = FavouriteMusicModelSearch;
    this.url = 'http://localhost/php/favouriteFuture/API/favouriteAPI.php';
  }
}

export default FavouriteMusicCollection
