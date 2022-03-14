import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FavoriteChkBox from './favoriteChkBox';

class MusicCard extends Component {
  render() {
    const { albumTracks } = this.props;
    return (
      <div>
        {albumTracks.map((track) => (
          <div key={ track.trackId }>
            <p>{`${track.trackName}`}</p>
            <audio
              data-testid="audio-component"
              src={ track.previewUrl }
              controls
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <FavoriteChkBox
              albumTracks={ albumTracks }
              track={ track }
              updateLoading={ this.updateLoading }
            />
          </div>
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  albumTracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MusicCard;
