const { API_MOVIES_URL } = require('../utils/constants');

class MoviesApi {
  constructor(url) {
    this._moviesUrl = url.API_MOVIES_URL;
    this._headers = { 'Content-type': 'application/json' };
  }

  _checkError(res) {
    if (!res.ok) {
      return Promise.reject(`произошла ошибка: ${res.status}`)
    }
    return res.json();
  }

  getMoviesList() {
    return fetch(this._moviesUrl, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkError);
  }

}

const requestMoviesApi = new MoviesApi({ API_MOVIES_URL });

export default requestMoviesApi;
