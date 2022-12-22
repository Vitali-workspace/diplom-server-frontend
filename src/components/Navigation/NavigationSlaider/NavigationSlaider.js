import { NavLink } from 'react-router-dom';

import './NavigationSlaider.css';


function NavigationSlaider({ stateSlaider, btnProfile }) {

  function handleCloseSlaider() {
    stateSlaider(false);
  }

  return (
    <section className='nav-slaider'>
      <div className='nav-slaider__container'>
        <button className='nav-slaider__btn-close' onClick={handleCloseSlaider}></button>

        <nav className='nav-slaider__list'>
          <NavLink
            className={({ isActive }) => isActive ? 'nav-slaider__link nav-slaider__link_active' : 'nav-slaider__link'}
            to='/'
            onClick={handleCloseSlaider}
          >Главная</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? 'nav-slaider__link nav-slaider__link_active' : 'nav-slaider__link'}
            to='/movies'
            onClick={handleCloseSlaider}
          >Фильмы</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? 'nav-slaider__link nav-slaider__link_active' : 'nav-slaider__link'}
            to='/saved-movies'
            onClick={handleCloseSlaider}
          >Сохранённые фильмы</NavLink>
          <button className='nav-slaider__btn-account' onClick={btnProfile}>Аккаунт</button>
        </nav>
      </div>
    </section>
  );
}

export default NavigationSlaider;