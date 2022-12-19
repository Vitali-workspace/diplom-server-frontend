import './Header.css';

function Header() {
  return (
    <section className='header'>
      <div className='header__container'>
        <div className='header__logo'></div>
        <div className='header__nav'>
          <button className='header__btn-registration'>Регистрация</button>
          <button className='header__btn-login'>Войти</button>
        </div>
      </div>

    </section>
  );
}

export default Header;