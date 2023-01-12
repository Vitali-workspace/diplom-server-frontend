import { useEffect } from 'react';
import useFormValidator from '../../../hooks/useFormValidator';

import './SearchForm.css'


function SearchForm({ onSearchClick, savedMoviesPage, shortFilms, onCheckbox }) {

  const { isValues, handleChangeInput, setValues, setIsValid } = useFormValidator();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchClick(isValues.query);
  };

  useEffect(() => {
    if (!savedMoviesPage) {
      const input = localStorage.getItem('searchQuery');
      if (input) {
        setValues({ query: input });
        setIsValid(true);
      }
    }
  }, [savedMoviesPage, setValues, setIsValid]);


  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={handleSubmit} noValidate>

        <fieldset className='search-form__fieldset'>
          <input
            className='search-form__input'
            type='text'
            name='query'
            onChange={handleChangeInput}
            placeholder='Фильм'
            value={isValues.query || ''}
            required
          />
          <button className='search-form__submit' type='submit'>
            <div className='search-form__submit-icon'></div>
          </button>
        </fieldset>

        <label className={`search-form__label ${shortFilms === 'on' ? 'search-form_enable' : ''}`}>
          <input className='search-form__checkbox'
            type='checkbox'
            value='off'
            onChange={onCheckbox}
            checked={shortFilms === 'off' ? true : false}
          />
          <input className='search-form__checkbox'
            type='checkbox'
            value='on'
            onChange={onCheckbox}
            checked={shortFilms === 'on' ? true : false}
          />
          <span className='search-form__point'></span>
          <p className='search-form__text'>Короткометражки</p>
        </label>

      </form>
    </section>
  );
}

export default SearchForm;
