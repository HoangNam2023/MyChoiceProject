import BaseModel from '../base/BaseModel.js';

class FavouriteMusicModelUpdate extends BaseModel {
  /* Thu thập thông tin url */
  url() {
    return `http://localhost/MyChoiceProject/MyChoice/API/favouriteAPIUpdate.php`;
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

  // // Ghi đè sync để gửi JSON
  // sync(method, model, options = {}) {
  //   options.contentType = 'application/json';
  //   options.data = JSON.stringify(model.toJSON());
  //   return super.sync(method, model, options);
  // }
}

export default FavouriteMusicModelUpdate;
