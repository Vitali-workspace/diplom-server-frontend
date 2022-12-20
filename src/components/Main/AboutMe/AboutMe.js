import './AboutMe.css';
import photo from '../../../images/user-pic.svg';

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <h3 className='about-me__name'>Виталий</h3>
        <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__history'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
          работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
          заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className='about-me__link' href='https://github.com/Vitali-workspace' target='_blank' rel='noreferrer'>Github</a>
        <img className='about-me__avatar' src={photo} alt='фото разработчика' />
      </div>
    </section>
  );
}

export default AboutMe;