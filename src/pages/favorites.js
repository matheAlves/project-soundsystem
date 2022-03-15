import React, { Component } from 'react';
import Header from '../components/header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/loading';
import FavTrackList from '../components/favTrackList';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  renderFavTracks = async () => {
    const favTracks = await getFavoriteSongs();
    console.log(favTracks);
    // return favTracks.map((track) => console.log(track));
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {loading
          ? <Loading />
          : <FavTrackList />}

      </div>
    );
  }
}
export default Favorites;
