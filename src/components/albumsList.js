import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

class AlbumsList extends Component {
  render() {
    const { search, albums } = this.props;
    if (albums.length) {
      return (
        <section>
          <h1>{`Resultado de álbuns de: ${search}`}</h1>
          <div className="space-evenly">
            {albums.map((album) => (
              <Link
                key={ album.collectionId }
                to={ `/project-soundsystem/album/${album.collectionId}` }
                className="album-card"
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                <p className="font-small">{album.collectionName}</p>
                <img src={ album.artworkUrl100 } alt="album" />
              </Link>))}
          </div>

        </section>

      );
    }
    return (
      <p>Nenhum álbum foi encontrado</p>
    );
  }
}

AlbumsList.propTypes = {
  search: PropTypes.string.isRequired,
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AlbumsList;
