import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { album } = this.props;
    const [albumInfo, ...albumTracks] = album;
    return (
      <div>
        <h1 data-testid="artist-name">{albumInfo.artistName}</h1>
        <h2 data-testid="album-name">{albumInfo.collectionName}</h2>
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
          </div>

        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MusicCard;
