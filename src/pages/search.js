import React, { Component } from 'react';
import Header from '../components/header';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      isButtonDisabled: true,
      search: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      search: target.value,
    }, () => {
      const { search } = this.state;
      if (search.length >= 2) {
        this.setState({
          isButtonDisabled: false,
        });
      } else {
        this.setState({
          isButtonDisabled: true,
        });
      }
    });
  }

  render() {
    const { isButtonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Nome do artista"
          data-testid="search-artist-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ isButtonDisabled }
        >
          Pesquisar
        </button>

      </div>
    );
  }
}
export default Search;
