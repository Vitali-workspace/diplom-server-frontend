import './MoviesCardList.css'
import MovieCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ cardsList, unsubMovie }) {
  const numberCards = 12;


  return (
    <section className='card-list'>
      <div className='card-list__container'>
        {cardsList.slice(0, numberCards).map((card) => (
          <MovieCard key={card.id} card={card} unsubMovie={unsubMovie} />
        ))}
      </div>
      <button className='more-button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;