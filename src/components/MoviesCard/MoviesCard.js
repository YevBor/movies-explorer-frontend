import React from 'react';

import './MoviesCard.css'
import convertTime from '../../utils/convertTime';
import { IMAGE_URL } from '../../utils/config';

function MoviesCard({
  movie,
  isSavedMovies,
  likedMovies,
  onSaveMovie,
  onDeleteSavedMovie,
  buttonTitle,
}) {

  const isLiked = !isSavedMovies && likedMovies(movie)
  const movieLikeBtnClassName = `${isLiked ? "movies-card__save-button_active" : "movies-card__save-button"}`;
  
  const handleSaveMovieClick = () => {
    onSaveMovie({
      country: movie.country || 'Нет данных',
      director: movie.director || 'Нет данных',
      duration: movie.duration || 0,
      year: movie.year || 'Нет данных',
      description: movie.description || 'Нет данных',
      image: `${IMAGE_URL}${movie.image ? movie.image.url : ''}`,
      trailer: movie.trailerLink,
      thumbnail: `${IMAGE_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || 'Нет данных',
      nameEN: movie.nameEN || 'Нет данных',
      isSaved: movie.isSaved,
    })
  }

  function handleDeleteClick() {
    onDeleteSavedMovie(movie);
  }

  return (
    <article className="movies-card">
      <img className="movies-card__image" src={isSavedMovies ? movie.image : `${IMAGE_URL}${movie.image ? movie.image.url : movie.image}`}
          alt={movie.nameRU || movie.nameEN} />
        <div className='movies-card__title-section'>
          <div className='movies-card__text-section'>
            <h2 className="movies-card__title">{movie.nameRU || movie.nameEN}</h2>
            <p className="movies-card__duration">{convertTime(movie.duration)}</p>
          </div>
          {/* <button className={DeleteSavedMovieIconClassName} onClick={handleSaveClick}>{buttonTitle}</button> */}
          {isSavedMovies ? (
            <button className="movies-card__save-button movies-card__save-button_delete" onClick={handleDeleteClick}></button>
           ) : (
           <button className={movieLikeBtnClassName} onClick={handleSaveMovieClick}>{buttonTitle}</button>
          )}
          
        </div>
    </article>
  )
}

export default MoviesCard;
