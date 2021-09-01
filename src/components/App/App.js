import './App.css';
import { React, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from '../Main/Main';
import MenuPopup from '../MenuPopup/MenuPopup';

import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NoPageFound from '../NoPageFound/NoPageFound';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const handleSignup = () => {
    setLoggedIn(true);
  };

  const handleSignin = () => {
    setLoggedIn(true);
  };


  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const excludeHeaderForRoutes = ['/signin', '/signup'];

  const excludeFooterForRoutes = [
    '/signin',
    '/signup',
    '/profile',
  ];

  return (
    <div className="App">
      
    {useRouteMatch(excludeHeaderForRoutes) ? null : (
        <Header
          loggedIn={loggedIn}
          onSignup={handleSignup}
          onSignin={handleSignin}
          onMenu={handleOpenMenu}
        />
      )}

<Switch>
      <Route exact path="/">
        <Main />
      </Route>

      <Route path="/movies">
          <Movies buttonTitle="Сохранить" setLoggedIn={setLoggedIn}/>
        </Route>

        <Route path="/saved-movies">
        <SavedMovies setLoggedIn={setLoggedIn} />
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

      <Route>
          <NoPageFound />
        </Route>

</Switch>

{useRouteMatch(excludeFooterForRoutes) ? null : (
        <Footer />
      )}
      {menuIsOpen && (<MenuPopup isOpen={menuIsOpen} onClose={handleCloseMenu} />)}


    </div>
  );
}

export default App;
