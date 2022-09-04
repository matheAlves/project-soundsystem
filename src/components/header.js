import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './loading';
import './style.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchUsername();
  }

  fetchUsername = async () => {
    this.setState({
      loading: true,
    });
    const user = await getUser();
    this.setState({
      loading: false,
      user,
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <header
        data-testid="header-component"
        className="space-evenly"
      >
        <Link
          to="/project-soundsystem/search"
          data-testid="link-to-search"
        >
          Search
        </Link>
        <Link
          to="/project-soundsystem/favorites"
          data-testid="link-to-favorites"
        >
          Favorites
        </Link>
        <Link
          to="/project-soundsystem/profile"
          data-testid="link-to-profile"
        >
          Profile
        </Link>
        { loading ? <Loading />
          : <span data-testid="header-user-name">{user.name}</span> }
      </header>
    );
  }
}
export default Header;
