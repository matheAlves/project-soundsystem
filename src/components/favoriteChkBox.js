import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './loading';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';

class FavoriteChkBox extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.favoriteCheck();
  }

  handleClick = async ({ target }) => {
    const { albumTracks } = this.props;
    const { id } = target;
    this.setState({
      loading: true,
    });

    const favTracks = await getFavoriteSongs();

    const isFav = favTracks.some((track) => track.trackId
    === parseInt(id, 10));

    if (isFav) {
      const trackToRemove = albumTracks
        .find((track) => track.trackId === parseInt(id, 10));
      await removeSong(trackToRemove);
      await this.favoriteCheck();
    } else {
      const favTrack = albumTracks
        .find((track) => track.trackId === parseInt(id, 10));
      await addSong(favTrack);
      await this.favoriteCheck();
    }
  }

  favoriteCheck = async () => {
    const { track } = this.props;
    const favTracks = await getFavoriteSongs();
    const isFav = favTracks.some((currTrack) => currTrack.trackId === track.trackId);
    this.setState({
      checked: isFav,
      loading: false,
    });
  };

  render() {
    const { track } = this.props;
    const { checked, loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <label
        htmlFor={ track.trackId }
      >
        Favorita
        <input
          checked={ checked }
          onChange={ this.handleClick }
          type="checkbox"
          id={ track.trackId }
          data-testid={ `checkbox-music-${track.trackId}` }
          onClick={ this.handleClick }
        />
      </label>
    );
  }
}

FavoriteChkBox.propTypes = {
  albumTracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  track: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};

export default FavoriteChkBox;
