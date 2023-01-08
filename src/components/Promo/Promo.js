import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__chapter'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a
            className='promo__link'
            href='https://github.com/Vitali-workspace/diplom-server-frontend'
            target='_blank'
            rel='noreferrer'>
            <button className='promo__button'>Узнать больше</button>
          </a>
        </div>
        <div className='promo__image'></div>
      </div>
    </section>
  );
}

export default Promo;