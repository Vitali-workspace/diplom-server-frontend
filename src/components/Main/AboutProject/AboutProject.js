import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project'>
      <div className='project__container'>
        <h2 className='project__title'>О проекте</h2>
        <div className='project__container-history'>
          <div className='project__history'>
            <h3 className='project__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className='project__history'>
            <h3 className='project__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <ul className='project__list'>
          <li className='project__list-element'>
            <p className='project__time project__list-element_color_green'>1 неделя</p>
            <p className='project__technology'>Back-end</p>
          </li>
          <li className='project__list-element'>
            <p className='project__time'>4 недели</p>
            <p className='project__technology'>Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;