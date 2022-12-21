import { Link, useNavigate } from 'react-router-dom';

import './Register.css';


function Register() {

  const navigation = useNavigate();

  function submitForm(evt) {
    evt.preventDefault();
    navigation('/signin');
  }

  return (
    <section className='register'>
      <form className='register__container' onSubmit={submitForm}>
        <div className='register__logo'></div>
        <h1 className='register__title'>Добро пожаловать!</h1>

        <fieldset className='register__fieldset'>
          <p className='register__text-input'>Имя</p>
          <input
            className='register__input'
            type='text'
          />

          <p className='register__text-input'>E-mail</p>
          <input
            className='register__input'
            type='email'
          />

          <p className='register__text-input'>Пароль</p>
          <input
            className='register__input'
            type='password'
          />
        </fieldset>

        <button className='register__button' type='submit'>Зарегистрироваться</button>
        <p className='register__text'>
          Уже зарегистрированы?
          <Link className='register__link' to='/signin'> Войти</Link>
        </p>

      </form>
    </section>
  );
}

export default Register;