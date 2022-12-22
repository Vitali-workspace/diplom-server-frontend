import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';


function Login() {

  const navigation = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleInputEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleInputPassword(evt) {
    setPassword(evt.target.value);
  }

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
            value={email || ''}
            onChange={handleInputEmail}
            required
          />

          <p className='login__text-input'>Пароль</p>
          <input
            className='login__input'
            type='password'
            value={password || ''}
            onChange={handleInputPassword}
            required
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