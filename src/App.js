import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Search from './pages/search';
import Album from './pages/album';
import Favorites from './pages/favorites';
import Profile from './pages/profile';
import ProfileEdit from './pages/profile-edit';
import NotFound from './pages/not-found';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route
            path="/search"
            component={ Search }
          />
          <Route
            path="/album/:id"
            component={ Album }
          />
          <Route
            path="/favorites"
            component={ Favorites }
          />
          <Route
            path="/profile/edit"
            component={ ProfileEdit }
          />
          <Route
            path="/profile"
            component={ Profile }
          />
          <Route
            path="*"
            component={ NotFound }
          />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
