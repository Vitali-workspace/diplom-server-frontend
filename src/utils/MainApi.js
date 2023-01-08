const { API_MAIN_URL } = require('../utils/constants');

class MainApi {

  constructor(url) {
    this._mainUrl = url.API_MAIN_URL;
  }

  _checkError(res) {
    if (!res.ok) {
      return Promise.reject(`произошла ошибка: ${res.status}`);
    }
    return res.json();
  }

  registration({ name, email, password }) {
    return fetch(`${this._mainUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': name, 'email': email, 'password': password }),
    }).then(this._checkError);
  }

  login({ email, password }) {
    return fetch(`${this._mainUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'email': email, 'password': password }),
    }).then(this._checkError);
  }


  getUserInfo(token) {
    return fetch(`${this._mainUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkError);
  }

  updateUserInfo({ name, email }, token) {
    return fetch(`${this._mainUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ 'name': name, 'email': email }),
    }).then(this._checkError);
  }


  getUserMovies(token) {
    return fetch(`${this._mainUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkError);
  }


  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  }, token) {

    return fetch(`${this._mainUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        'country': country,
        'director': director,
        'duration': duration,
        'year': year,
        'description': description,
        'image': `https://api.nomoreparties.co${image.url}`,
        'trailerLink': trailerLink,
        'thumbnail': `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        'movieId': id,
        'nameRU': nameRU,
        'nameEN': nameEN,
      }),
    }).then(this._checkError);
  }

  removeMovie(movieId, token) {
    return fetch(`${this._mainUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkError);
  }

}

const requestMainApi = new MainApi({ API_MAIN_URL });

export default requestMainApi;
