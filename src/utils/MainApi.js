const { API_MAIN_URL } = require('../utils/constants');

class MainApi {

  constructor(url) {
    this._mainUrl = url;
    this._headers = { 'Content-type': 'application/json' };
  }

  _checkError(res) {
    if (!res.ok) {
      return Promise.reject(`произошла ошибка: ${res.status}`)
    }
    return res.json();
  }

  registration({ name, email, password }) {
    return fetch(`${this._mainUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkError);
  }

  login({ email, password }) {
    return fetch(`${this._mainUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._checkError);
  }

  logout() {
    return fetch(`${this._mainUrl}/signout`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkError);
  }


  getUserInfo() {
    return fetch(`${this._mainUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkError);
  }

  updateUserInfo({ name, email }) {
    return fetch(`${this._mainUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._checkError);
  }


  getUserMovies() {
    return fetch(`${this._mainUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkError);
  }

  //! createMovie = Save movie
  saveMovie(movie) {
    return fetch(`${this._mainUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(this._checkError);
  }

  removeMovie(movieId) {
    return fetch(`${this._mainUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkError);
  }

}

const requestMainApi = new MainApi({ API_MAIN_URL });

export default requestMainApi;