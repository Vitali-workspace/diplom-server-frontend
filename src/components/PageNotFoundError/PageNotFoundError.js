import { useNavigate } from 'react-router-dom';

import './PageNotFoundError.css';

function PageNotFoundError() {
  const navigation = useNavigate();

  function handleClick() {
    navigation(-1);
  }

  return (
    <section className="pageNotFoundError">
      <div className='pageNotFoundError__container'>
        <h1 className='pageNotFoundError__title'>404</h1>
        <p className='pageNotFoundError__text'>Страница не найдена</p>
        <button className='pageNotFoundError__button' onClick={handleClick}>Назад</button>
      </div>
    </section>
  );
}

export default PageNotFoundError;