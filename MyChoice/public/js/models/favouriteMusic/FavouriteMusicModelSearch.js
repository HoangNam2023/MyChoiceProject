import BaseModel from '../base/BaseModel.js';

class FavouriteMusicModelSearch extends BaseModel {
  /* Trả về các giá trị mặc định cho model. */
  defaults() {
    return {
      id: null,
      title: '',
      artist: '',
      album: '',
    };
  }
}

export default FavouriteMusicModelSearch;
