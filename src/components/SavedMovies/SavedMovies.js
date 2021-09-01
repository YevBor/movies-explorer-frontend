import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

import SAVED_CARDS from '../../utils/savedCards'

function SavedMovies({setLoggedIn}) {

  setLoggedIn(true);
  
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList data={SAVED_CARDS} isSavedMovies={true} />
      <MoreButton buttonTitle="Ещё" />
    </>
  )
}

export default SavedMovies;
