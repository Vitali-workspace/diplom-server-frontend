import { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'

function SavedMovies({ cardList, removeMovie }) {

  const [fieldSearch, setFieldSearch] = useState('');
  const [shortFilms, setShortFilms] = useState('off');
  const [filteredMovies, setFilteredMovies] = useState(cardList);
  const [notFoundMovie, setNotFoundMovie] = useState(false);

  // фильтрация фильмов длительностью до 40 минут
  function filterShortMovies(movies) {
    return movies.filter((film) => film.duration < 40);
  };

  function filterMovies(movies, fieldSearch, shortFilms) {

    const requestMovies = movies.filter((film) => {
      const nameRussian = String(film.nameRU).toLowerCase();
      const nameEnglish = String(film.nameEN).toLowerCase();
      const searchText = fieldSearch.toLowerCase().trim();
      return (nameRussian.indexOf(searchText) !== -1 || nameEnglish.indexOf(searchText) !== -1);
    });

    if (shortFilms === 'on') {
      return filterShortMovies(requestMovies);
    }
    return requestMovies;
  };


  useEffect(() => {
    const filterResult = filterMovies(cardList, fieldSearch, shortFilms);
    setFilteredMovies(filterResult);

    if (fieldSearch) {
      filterResult.length === 0 ? setNotFoundMovie(true) : setNotFoundMovie(false);
    }
  }, [cardList, fieldSearch, shortFilms]);


  function handleSearchSubmit(value) {
    setFieldSearch(value);
    const res = filterMovies(cardList, fieldSearch, shortFilms);
    setFilteredMovies(res);
  };


  function handleShortFilms(evt) {
    setShortFilms(evt.target.value);
  };

  return (
    <section className='saved-movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        onCheckbox={handleShortFilms}
        savedMoviesPage={true}
        shortFilms={shortFilms}
      />
      <MoviesCardList
        list={filteredMovies}
        onDelete={removeMovie}
        savedMoviesPage={true}
        isEmptyList={notFoundMovie}
      />
    </section>
  );
};

export default SavedMovies;