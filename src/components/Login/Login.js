import { Link, useNavigate } from 'react-router-dom';

import './Login.css';


function Login() {

  const navigation = useNavigate();

  function submitForm(evt) {
    evt.preventDefault();
    navigation('/movies');
  }

  return (
    <section className='login'>
      <form className='login__container' onSubmit={submitForm}>
        <div className='login__logo'></div>
        <h1 className='login__title'>Рады видеть!</h1>
        <fieldset className='login__fieldset'>
          <p className='login__text-input'>E-mail</p>
          <input
            className='login__input'
            type='email'
          />

          <p className='login__text-input'>Пароль</p>
          <input
            className='login__input'
            type='password'
          />
        </fieldset>

        <button className='login__button' type='submit'>Войти</button>
        <p className='login__text'>
          Ещё не зарегистрированы?
          <Link className='login__link' to='/signup'> Регистрация</Link>
        </p>

      </form>

    </section>
  );
}

export default Login;