import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/loading';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      name: '',
      loading: false,
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    const minLength = 3;
    if (value.length >= minLength) {
      this.setState({
        buttonDisabled: false,
        name: value,
      });
    } else {
      this.setState({
        buttonDisabled: true,
        name: value,
      });
    }
  }

  handleLogin = async () => {
    const { name } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({
      name,
    });
    this.setState({
      redirect: true,
      loading: false,
    });
  }

  render() {
    const { buttonDisabled, loading, redirect } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="login-name-input">
            Nome
            <input
              data-testid="login-name-input"
              id="login-name-input"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <button
            disabled={ buttonDisabled }
            data-testid="login-submit-button"
            type="button"
            onClick={ this.handleLogin }
          >
            Entrar
          </button>
        </form>
        {redirect ? <Redirect to="/project-soundsystem/search" /> : ''}
      </div>
    );
  }
}
export default Login;
