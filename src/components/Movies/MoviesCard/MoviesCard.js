import { useState } from 'react';

import './MoviesCard.css'
import { listMovies } from '../../../utils/constants';

function MoviesCard({ unsubMovie }) {

  const result = unsubMovie ? 'movies-card__unsub' : '';
  const [buttonLike, setbuttonLike] = useState('movies-card__like');

  function handleLikeClick() {
    if (buttonLike.includes('movies-card__like_active')) {
      setbuttonLike('movies-card__like');
    } else {
      setbuttonLike('movies-card__like movies-card__like_active');
    }
  }

  return (
    <section className='movies-card'>
      <div className='movies-card__text'>
        <h2 className='movies-card__title'>{listMovies[0].nameRU}</h2>
        <p className='movies-card__time'>{`${listMovies[0].duration} минут`}</p>
      </div>
      <img
        className='movies-card__image'
        src={`https://api.nomoreparties.co/${listMovies[0].image.url}`}
        alt='превью фильма'
      />
      <button
        className={`${buttonLike} ${result}`}
        type='button'
        onClick={handleLikeClick}
      >Сохранить</button>
    </section>
  );
}

export default MoviesCard;

