import { useEffect, useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import requestMoviesApi from '../../utils/MoviesApi';
import './Movies.css'

function Movies({ likeMovie, savedMoviesList, statusPreloader, removeMovie }) {

  const forCheckbox = localStorage.getItem('shortFilms') === 'on' ? 'on' : 'off';

  const [fieldSearch, setFieldSearch] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [shortFilms, setShortFilms] = useState(forCheckbox);
  const [filteredMovies, setFilteredMovies] = useState([]);
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


  function handleLocalMovies(movies, query, stateCheckbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(stateCheckbox === 'on' ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }


  function handleSearchSubmit(value) {
    statusPreloader(true);
    setFieldSearch(value);
    localStorage.setItem('shortFilms', shortFilms);
    localStorage.setItem('searchQuery', value);

    if (!allMovies.length) {
      requestMoviesApi.getMoviesList()
        .then((moviesInfo) => {
          setAllMovies(moviesInfo);
          handleLocalMovies(moviesInfo, value, shortFilms);
        })
        .catch((err) => console.log(`ошибка при получении фильмов: ${err}`))
        .finally(() => statusPreloader(false));
    } else {
      statusPreloader(false);
      handleLocalMovies(allMovies, value, shortFilms);
    }
  }

  function handleShortFilms(evt) {
    setShortFilms(evt.target.value);
    localStorage.setItem('shortFilms', evt.target.value);
  }

  function handleNotFoundMovie(movie) {
    movie.length === 0 ? setNotFoundMovie(true) : setNotFoundMovie(false);
  }


  // проверка фильмов в localStorage
  useEffect(() => {

    const localMovies = JSON.parse(localStorage.getItem('movies'));

    if (localMovies && !fieldSearch) {
      setShortFilms(localStorage.getItem('shortFilms'));
      setFilteredMovies(shortFilms === 'on' ? filterShortMovies(localMovies) : localMovies);
      handleNotFoundMovie(localMovies);
    }
  }, [fieldSearch, shortFilms])


  useEffect(() => {

    if (fieldSearch) {
      const filterResult = filterMovies(allMovies, fieldSearch, shortFilms);
      setFilteredMovies(filterResult);
      handleNotFoundMovie(filterResult);
    }
  }, [fieldSearch, allMovies, shortFilms]);


  return (
    <section className='movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        onCheckbox={handleShortFilms}
        shortFilms={shortFilms}
        statusPreloader={statusPreloader}
      />
      <MoviesCardList
        list={filteredMovies}
        isEmptyList={notFoundMovie}
        onLike={likeMovie}
        onDelete={removeMovie}
        savedMovies={savedMoviesList}
      />
    </section>
  );
}

export default Movies;
