import './SearchForm.css'

//! передаём name submit
//! 'Передаём обработчик onChange из App'
function SearchForm({ onSubmit }) {
  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={onSubmit}>

        <fieldset className='search-form__fieldset'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
            value={null}
            onChange={null}
            required
          />
          <button className='search-form__submit' type='submit'>
            <div className='search-form__submit-icon'></div>
          </button>
        </fieldset>

        <label className='search-form__label'>
          <input className='search-form__checkbox' type='checkbox' />
          <span className='search-form__point'></span>
          <span className='search-form__text'>Короткометражки</span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
