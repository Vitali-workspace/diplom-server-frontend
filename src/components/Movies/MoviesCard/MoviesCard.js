import './MoviesCard.css'


function MoviesCard({ isPage, card, likeMovie, statusLiked, removeMovie }) {

  // Изменение url для компонентов SavedMovies и Movies
  const imageUrl = isPage === 'sectionMainMovies'
    ? `https://api.nomoreparties.co${card.image.url}`
    : `${card.image}`;

  // Изменение стиля кнопки в сохранённых фильмах
  const buttonRemoveStyle = isPage === 'sectionSaveMovies' ? 'movies-card__unsub' : '';

  const buttonLikeActiveStyle = (statusLiked && isPage === 'sectionMainMovies') ? 'movies-card__like_active' : '';

  function handleButton() {
    if (isPage === 'sectionMainMovies' && statusLiked === false) {
      likeMovie(card);
    } else if (isPage === 'sectionMainMovies' && statusLiked === true) {
      removeMovie(card);
    }

    if (isPage === 'sectionSaveMovies') {
      removeMovie(card);
    }
  }


  return (
    <section className='movies-card'>
      <div className='movies-card__text'>
        <h2 className='movies-card__title'>{card.nameRU}</h2>
        <p className='movies-card__time'>{`${card.duration} минут`}</p>
      </div>

      <a href={card.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movies-card__image' src={`${imageUrl}`} alt='превью фильма' />
      </a>

      <button
        className={`movies-card__like ${buttonRemoveStyle} ${buttonLikeActiveStyle}`}
        onClick={handleButton}
        type='button'
      >Сохранить</button>
    </section>
  );
}

export default MoviesCard;
