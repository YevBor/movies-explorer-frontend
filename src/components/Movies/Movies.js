import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoreButton from '../MoreButton/MoreButton';
import INIT_CARDS from '../../utils/initCards';



function Movies({setLoggedIn}) {

  setLoggedIn(true);

    return (
      <>
        <SearchForm />
        <FilterCheckbox />    
        <MoviesCardList data={INIT_CARDS} isSavedMovies={false} />
        <MoreButton buttonTitle="Ещё" />
      </>
    )
  }

  export default Movies;