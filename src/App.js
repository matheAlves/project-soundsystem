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
            path="/project-soundsystem"
            component={ Login }
          />
          <Route
            path="/project-soundsystem/search"
            component={ Search }
          />
          <Route
            path="/project-soundsystem/album/:id"
            component={ Album }
          />
          <Route
            path="/project-soundsystem/favorites"
            component={ Favorites }
          />
          <Route
            path="/project-soundsystem/profile/edit"
            component={ ProfileEdit }
          />
          <Route
            path="/project-soundsystem/profile"
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
