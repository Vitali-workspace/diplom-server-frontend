import { useState, useEffect } from 'react';

import './MoviesCardList.css'

import MoviesCard from '../MoviesCard/MoviesCard'
import useMoviesList from '../../../hooks/useMoviesList.js';


function MoviesCardList({ list, isEmptyList, onLike, onDelete, savedMovies, savedMoviesPage }) {

  // ф-ия получения сохраненной карточки фильма
  function getSavedMovieCard(movie, id) {
    return movie.find((film) => {
      return film.movieId === id;
    });
  };

  const widthScreen = useMoviesList();
  const [showList, setShowList] = useState([]);
  const [cardsShowParams, setCardsShowParams] = useState({ numberСards: 0, addCard: 0 });


  useEffect(() => {
    if (widthScreen > 1280) {
      setCardsShowParams({ numberСards: 12, addCard: 3 });
    } else if (widthScreen <= 1280 && widthScreen > 1040) {
      setCardsShowParams({ numberСards: 12, addCard: 3 });
    } else if (widthScreen <= 1040 && widthScreen > 640) {
      setCardsShowParams({ numberСards: 8, addCard: 2 });
    } else if (widthScreen <= 640) {
      setCardsShowParams({ numberСards: 5, addCard: 2 });
    }
  }, [widthScreen]);


  useEffect(() => {
    if (list.length) {
      const resultCards = list.filter((movie, index) => index < cardsShowParams.numberСards);
      setShowList(resultCards);
    }
  }, [list, cardsShowParams.numberСards]);


  function addCardButton() {
    const start = showList.length;
    const end = start + cardsShowParams.addCard;
    const residual = list.length - start;

    if (residual > 0) {
      const newCards = list.slice(start, end);
      setShowList([...showList, ...newCards]);
    }
  };


  // функция массива сохранённых карточек
  function getSavedMoviesPage() {
    if (list.length > 0) {
      return list.map((movie) => (
        <MoviesCard
          key={movie._id}
          card={movie}
          removeMovie={onDelete}
          isPage={'sectionSaveMovies'}
        />
      ))
    }

  };


  // функция массива основных карточек
  function getMainMoviesPage() {

    return showList.map((movie) => {

      const likedMovieCard = getSavedMovieCard(savedMovies, movie.id);
      const likedMovieId = likedMovieCard ? likedMovieCard._id : null;

      if (list.length > 0) {
        return (
          <MoviesCard
            key={movie.id}
            card={{ ...movie, _id: likedMovieId }}
            statusLiked={likedMovieCard ? true : false}
            isPage={'sectionMainMovies'}
            likeMovie={onLike}
            removeMovie={onDelete}
          />
        )
      }

    })
  };


  return (
    <section className='card-list'>
      <span className='card-list__message'>{isEmptyList ? 'Ничего не найдено' : ''}</span>
      <div className='card-list__container'>
        {savedMoviesPage ? getSavedMoviesPage() : getMainMoviesPage()}
      </div>

      <button
        className={`more-button
        ${(savedMoviesPage || isEmptyList || showList.length === list.length) && 'more-button_hidden'}`}
        type='button'
        onClick={addCardButton}
      >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
