import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useFormValidator from '../../hooks/useFormValidator';

import './Login.css';


function Login({ onLogin }) {

  const { isErrors, isValues, isValid, handleChangeInput } = useFormValidator();
  const navigation = useNavigate();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // React.useEffect(() => {
  //   setEmail('');
  //   setPassword('');
  // }, []);

  function submitForm(evt) {
    evt.preventDefault();
    onLogin({
      'email': isValues.email,
      'password': isValues.password,
    });
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
            name='email'
            value={isValues.email || ''}
            onChange={handleChangeInput}
            required
          />

          <p className='login__text-input'>Пароль</p>
          <input
            className='login__input'
            type='password'
            name='password'
            value={isValues.password || ''}
            onChange={handleChangeInput}
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