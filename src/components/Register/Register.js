import { Link, useNavigate } from 'react-router-dom';

import useFormValidator from '../../hooks/useFormValidator';
import './Register.css';


function Register({ onRegister }) {

  const { isErrors, isValues, isValid, handleChangeInput, setErrors, setValues, setIsValid } = useFormValidator();
  const navigation = useNavigate();

  function submitForm(evt) {
    evt.preventDefault();
    onRegister({
      name: isValues.name,
      email: isValues.email,
      password: isValues.password,
    })
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
            name='name'
            onChange={handleChangeInput}
            required
          />

          <p className='register__text-input'>E-mail</p>
          <input
            className='register__input'
            type='email'
            name='email'
            onChange={handleChangeInput}
            required
          />

          <p className='register__text-input'>Пароль</p>
          <input
            className='register__input'
            type='password'
            name='password'
            onChange={handleChangeInput}
            required
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