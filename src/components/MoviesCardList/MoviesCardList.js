import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import MoreButton from '../MoreButton/MoreButton';

import INIT_CARDS from '../../utils/initCards';

function MoviesCardList() {

  return (
    <section className="movies-card-list__section">
      <ul className="movies-card__list">
        {INIT_CARDS.map((movie) => (
          <li key={movie.id || movie._id}>
            <MoviesCard
              movie={movie}
              buttonTitle="Сохранить"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList;


