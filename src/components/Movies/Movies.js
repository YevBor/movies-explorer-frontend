import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


function Movies() {
    return (
      <>
        <SearchForm />
        <FilterCheckbox />    
        <MoviesCardList />
      </>
    )
  }

  export default Movies;