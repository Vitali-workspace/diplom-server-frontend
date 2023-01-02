import { useEffect, useState } from 'react';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormValidator from '../../hooks/useFormValidator';
import './Profile.css';


function Profile({ onSubmitProfile, onLogout, userInfo }) {

  const [editProfile, setEditProfile] = useState(false);

  const { isErrors, isValues, isValid, handleChangeInput } = useFormValidator();

  useEffect(() => {
    setEditProfile(false);
  }, [userInfo])

  function submitForm(evt) {
    evt.preventDefault();
    onSubmitProfile({
      'name': isValues.name,
      'email': isValues.email
    });
  }

  function handleEditImput() {
    setEditProfile(true);
  }


  return (
    <section className='profile'>
      <div className='profile__container'>
        <form className='profile__form' onSubmit={editProfile ? submitForm : null}>
          <h1 className='profile__title'>Привет, {userInfo.name}!</h1>

          <fieldset className='profile__fieldset'>
            <p className='profile__text-input'>Имя</p>
            <input
              className='profile__input'
              type='text'
              name='name'
              value={isValues.name || ''}
              onChange={handleChangeInput}
              required
              placeholder={userInfo.name}
              minLength={3}
              disabled={editProfile ? false : true}
            />

            <p className='profile__text-input profile__text-input_position'>E-mail</p>
            <input
              className='profile__input profile__input-email'
              type='email'
              name='email'
              value={isValues.email || ''}
              onChange={handleChangeInput}
              required
              placeholder={userInfo.email}
              disabled={editProfile ? false : true}
            />
          </fieldset>

          <button
            className='profile__button profile__button-edit'
            type='submit'
            onClick={handleEditImput}
          >{editProfile ? 'Сохранить' : 'Редактировать'}</button>
        </form>

        <button
          className='profile__button profile__button-logout'
          type='button'
          onClick={onLogout}
        >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;