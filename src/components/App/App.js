import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import PageNotFoundError from '../PageNotFoundError/PageNotFoundError';
// import Profile from '../Profile/Profile';
import Promo from '../Promo/Promo';
import AboutMe from '../Main/AboutMe/AboutMe';
import AboutProject from '../Main/AboutProject/AboutProject';
import Portfolio from '../Main/Portfolio/Portfolio';
import Techs from '../Main/Techs/Techs';


function App() {
  return (

    <div className='page'>
      <div className='page__content'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
                <Footer />
              </>
            }
          />


          {/* <Route
          path='/movies'
          element={
            <>
              <Header />

              <Footer />
            </>
          }
        />


        <Route
          path='/saved-movies'
          element={
            <>
              <Header />

              <Footer />
            </>
          }
        />


        <Route
          path='/profile'
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />


        <Route
          path='/signin'
          element={
            <Login />
          }
        />


        <Route
          path='/signup'
          element={
            <Register />
          }
        />


        <Route
          path='*'
          element={
            <PageNotFoundError />
          }
        /> */}

        </Routes>
      </div>
    </div>
  );
}

export default App;
