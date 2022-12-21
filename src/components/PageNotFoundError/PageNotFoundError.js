import { useNavigate } from 'react-router-dom';

import './PageNotFoundError.css';

function PageNotFoundError() {
  const navigation = useNavigate();

  function handleClick() {
    navigation(-1);
  }

  return (
    <section className='not-page'>
      <div className='not-page__container'>
        <h1 className='not-page__title'>404</h1>
        <p className='not-page__text'>Страница не найдена</p>
        <button className='not-page__button' onClick={handleClick}>Назад</button>
      </div>
    </section>
  );
}

export default PageNotFoundError;