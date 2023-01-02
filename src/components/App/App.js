import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import './App.css';
import ProtectedRoute from '../Movies/ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFoundError from '../PageNotFoundError/PageNotFoundError';
import Profile from '../Profile/Profile';
import Promo from '../Promo/Promo';
import AboutMe from '../Main/AboutMe/AboutMe';
import AboutProject from '../Main/AboutProject/AboutProject';
import Portfolio from '../Main/Portfolio/Portfolio';
import Techs from '../Main/Techs/Techs';

import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { listMovies } from '../../utils/constants'

import requestMainApi from '../../utils/MainApi';
import requestMoviesApi from '../../utils/MoviesApi';




function App() {

  const [isAuthorized, setAuthorized] = useState(false);
  const [isCurrentUser, setCurrentUser] = useState({});
  const [isEnablePreloader, setEnablePreloader] = useState(false);

  const navigation = useNavigate();
  const token = localStorage.getItem('jwt');

  // функция для заполнения профиля
  useEffect(() => {
    if (isAuthorized === true) {
      requestMainApi.getUserInfo(token)
        .then((user) => {
          console.log(user);
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(`ошибка в авторизации: ${err}`);
        });
    }
  }, [isAuthorized, token]);


  function handleLogin(userInfo) {
    requestMainApi.login(userInfo)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setAuthorized(true);
          navigation('/movies');
        }
      })
      .catch((err) => {
        console.log(`ошибка при авторизации: ${err}`);
      });
  }


  function handleRegistration(userInfo) {
    requestMainApi.registration(userInfo)
      .then(() => {
        navigation('/');
      })
      .catch((err) => {
        console.log(`ошибка при регистрации: ${err}`);
      })
  }


  function handleSignOut() {
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setAuthorized(false);
    navigation('/');
  }

  function handleUpdateUser(userInfo) {
    requestMainApi.updateUserInfo(userInfo, token)
      .then((profileInfo) => {
        setCurrentUser(profileInfo);
      })
      .catch((err) => console.log(`ошибка при изменении профиля: ${err}`));
  }

  function handleSaveMovie() {
    requestMainApi.saveMovie();
  }

  function handleRemoveMovie() {
    requestMainApi.removeMovie();
  }

  function handleSearchMovie() {
    requestMoviesApi.getMoviesList()
      .then((listMovies) => {
        console.log(listMovies);
      })
      .catch((err) => console.log(`ошибка при получении фильмов: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={isCurrentUser}>
      <div className='page'>
        <div className='page__content'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Header loggedIn={isAuthorized} color={'blue'} />
                  <Promo />
                  <AboutProject />
                  <Techs />
                  <AboutMe />
                  <Portfolio />
                  <Footer />
                </>
              }
            />

            <Route
              path='/movies'
              element={
                <ProtectedRoute loggedIn={isAuthorized}>
                  <Header loggedIn={isAuthorized} color={'black'} />
                  <SearchForm />
                  <Preloader isEnable={isEnablePreloader} />
                  <MoviesCardList cardsList={listMovies} />
                  <Footer />
                </ProtectedRoute>
              }
            />

            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute loggedIn={isAuthorized}>
                  <Header loggedIn={true} color={'black'} />
                  <SearchForm />
                  <Preloader isEnable={isEnablePreloader} />
                  <MoviesCardList cardsList={listMovies} unsubMovie={'true'} />
                  <Footer />
                </ProtectedRoute>
              }
            />

            <Route
              path='/profile'
              element={
                <ProtectedRoute loggedIn={isAuthorized}>
                  <Header loggedIn={true} color={'black'} />
                  <Profile onSubmitProfile={handleUpdateUser} onLogout={handleSignOut} userInfo={isCurrentUser} />
                </ProtectedRoute>
              }
            />

            <Route
              path='/signin'
              element={
                isAuthorized
                  ? <Navigate to='/' />
                  : <Login onLogin={handleLogin} />
              }
            />

            <Route
              path='/signup'
              element={
                isAuthorized
                  ? <Navigate to='/signin' />
                  : <Register onRegister={handleRegistration} />
              }
            />

            <Route
              path='*'
              element={
                <PageNotFoundError />
              }
            />

          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
