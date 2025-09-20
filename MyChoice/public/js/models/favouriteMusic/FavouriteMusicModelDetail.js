import BaseModel from '../base/BaseModel.js';

class FavouriteMusicModelDetail extends BaseModel {
  /* Thu thập thông tin url */
  url() {
    const id = this.get('id');
    return `http://localhost/php/favouriteFuture/API/favouriteAPIdetail.php?id=${encodeURIComponent(id)}`;
  }

  /* Trả về các giá trị mặc định cho model. */
  defaults() {
    return{
      id: null,
      title: '',
      artist: '',
      album: '',
      release_year: '',
      created_at: '',
      updated_at: ''
    }
  }
}

export default FavouriteMusicModelDetail;
