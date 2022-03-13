import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      isButtonDisabled: true,
      search: '',
      loading: false,
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

  handleSubmit = async () => {
    const { search } = this.state;
    const { saveAlbums } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const response = await searchAlbumsAPI(search);
      saveAlbums(response, search);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading, isButtonDisabled } = this.state;

    if (loading) {
      return <Loading />;
    }
    return (
      <div>
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
          onClick={ this.handleSubmit }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  saveAlbums: PropTypes.func.isRequired,
};

export default SearchBar;
