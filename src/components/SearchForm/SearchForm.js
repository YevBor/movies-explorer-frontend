import React, { useState } from 'react';
import './SearchForm.css';
import '../Movies/Movies.css';

function SearchForm() {

  const [error] = useState("");
  return (
    <>
      <form className="search-form" >
        <div className="search-form__container">
          <div className="search-form__input-container">
            <input className="search-form__input" placeholder="Фильм" type="text" id="search-text" name="search" required />
            <button className="search-form__submit-btn" type="submit">Найти</button>
          </div>
        </div>
      </form>
      <p className="movies-notification-message">{error}</p>
    </>
  )
}

export default SearchForm;

