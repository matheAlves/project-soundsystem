import React, { Component } from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import AlbumsList from '../components/albumsList';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      albums: [],
      search: '',
    };
  }

  saveAlbums = (albums, search) => {
    this.setState({
      albums,
      search,
    });
  }

  render() {
    const { search, albums } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <SearchBar saveAlbums={ this.saveAlbums } />
        <AlbumsList search={ search } albums={ albums } />
      </div>
    );
  }
}
export default Search;
