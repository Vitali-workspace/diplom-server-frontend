import './SearchForm.css'


function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>

        <fieldset className='search-form__fieldset'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
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
