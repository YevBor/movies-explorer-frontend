import React from 'react';

import './MoviesCard.css'

function MoviesCard({ movie, buttonTitle, isSavedMovies}) {

  const movieLikeBtnClassName = `${movie.likes ? "movies-card__save-btn movies-card__saved-btn" : "movies-card__save-btn"}`;

  return (

    <article className="movies-card">
      <a href={movie.trailer} target="_blank" rel="noopener noreferrer nofollow" >
        <img className="movies-card__image" src={movie.src}
          alt={movie.nameRU} />
      </a>
      {isSavedMovies ? (
        <button className="movies-card__save-btn movies-card__delete-btn"></button>
      ) : (
        <button className={movieLikeBtnClassName}>{buttonTitle}</button>
      )} 
      <div className="movies-card__description">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">{movie.duration}</p>
      </div>
    </article>
  )
}

export default MoviesCard;
