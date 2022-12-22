import { NavLink } from 'react-router-dom';

import './NavigationAccount.css';

function NavigationAccount({ stateSlaider, btnProfile }) {

  function handleSlaiderBtn() {
    stateSlaider(true);
  }

  return (
    <>
      <section className='nav-account'>
        <nav className='nav-account__container'>
          <NavLink
            className='nav-account__link'
            to='/movies'>Фильмы</NavLink>
          <NavLink
            className='nav-account__link'
            to='/saved-movies'>Сохранённые фильмы</NavLink>
        </nav>
      </section>
      <button className='account-button' onClick={btnProfile}>Аккаунт</button>
      <button className='account-button__burger' onClick={handleSlaiderBtn}></button>
    </>
  );
}

export default NavigationAccount;