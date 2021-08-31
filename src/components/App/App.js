import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      {/* <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />        
      </Route>
      <Footer /> */}
    </div>
  );
}

export default App;
