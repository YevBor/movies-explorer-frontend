import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({data, isSavedMovies}) {

  return (
    <section className="movies-card-list__section">
      <ul className="movies-card__list">
        {data.map((movie) => (
          <li key={movie.id || movie._id}>
            <MoviesCard
              movie={movie}
              buttonTitle="Сохранить"
              isSavedMovies={isSavedMovies}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList;


