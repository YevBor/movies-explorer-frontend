import { React, useState } from 'react';

import './MoviesCard.css'
import CardImage from '../../images/card.jpeg'

function MoviesCard({ data, locationPathname, buttonTitle }) {

  const [isSaved, setIsSaved] = useState(data.isSaved);


  const DeleteSavedMovieIconClassName = `${locationPathname === '/saved-movies' ? (
    "card__save-button card__save-button_delete"
  )
  :
  locationPathname === '/movies' && isSaved ? (
    "movies-card__save-button_active"
  ) : (
    "movies-card__save-button"
  )}`




  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (

    <article id={data.id} className="movies-card">
      <img className="movies-card__image" src={CardImage} alt="постер" />
        <div className='movies-card__title-section'>
          <div className='movies-card__text-section'>
            <h2 className="movies-card__title">33 слова о дизайне</h2>
            <p className="movies-card__duration">1ч 17м</p>
          </div>
          <button className={DeleteSavedMovieIconClassName} onClick={handleSaveClick}>{buttonTitle}</button>
        </div>
    </article>
  )
}

export default MoviesCard;
