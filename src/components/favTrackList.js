import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from './musicCard';
import Loading from './loading';

class FavTrackList extends Component {
  constructor() {
    super();

    this.state = {
      favTracks: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.saveFavTracks();
  }

  saveFavTracks = async () => {
    const favTracks = await getFavoriteSongs();
    this.setState({
      favTracks,
    });
  }

  render() {
    const { favTracks, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return <MusicCard albumTracks={ favTracks } favListReload={ this.loaded } />;
  }
}

export default FavTrackList;
