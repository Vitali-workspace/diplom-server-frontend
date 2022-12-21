import { useNavigate } from 'react-router-dom';

import './Profile.css';

function Profile() {

  const navigation = useNavigate();

  function logout(evt) {
    evt.preventDefault();
    navigation('/');
  }


  return (
    <section className='profile'>
      <div className='profile__container'>
        <form className='profile__form'>
          <h1 className='profile__title'>Привет, Виталий!</h1>

          <fieldset className='profile__fieldset'>
            <p className='profile__text-input'>Имя</p>
            <input
              className='profile__input'
              type='text'
              placeholder='Виталий'
            />

            <p className='profile__text-input profile__text-input_position'>E-mail</p>
            <input
              className='profile__input profile__input-email'
              type='email'
              placeholder='pochta@yandex.ru'
            />
          </fieldset>

          <button
            className='profile__button profile__button-edit'
            type='submit'
          >Редактировать</button>
        </form>

        <button
          className='profile__button profile__button-logout'
          type='button'
          onClick={logout}
        >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;