import './Portfolio.css';

import linkIcon from '../../../images/portfolio-link.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <p className='portfolio__title'>Портфолио</p>
        <ul className='portfolio__list'>
          <li className='portfolio__list-element'>
            <a className='portfolio__link' href='https://github.com/Vitali-workspace/how-to-learn' target='_blank' rel='noreferrer'>
              Статичный сайт
            </a>
            <img className='portfolio__icon' src={linkIcon} alt='иконка ссылки' />
          </li>
          <li className='portfolio__list-element' target='_blank' rel='noreferrer'>
            <a className='portfolio__link' href='https://github.com/Vitali-workspace/russian-travel-master_GHP' target='_blank' rel='noreferrer'>
              Адаптивный сайт
            </a>
            <img className='portfolio__icon' src={linkIcon} alt='иконка ссылки' />
          </li>
          <li className='portfolio__list-element' target='_blank' rel='noreferrer'>
            <a className='portfolio__link' href='https://github.com/Vitali-workspace/react-mesto-api-full' target='_blank' rel='noreferrer'>
              Одностраничное приложение
            </a>
            <img className='portfolio__icon' src={linkIcon} alt='иконка ссылки' />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;