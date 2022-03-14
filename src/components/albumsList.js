import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumsList extends Component {
  render() {
    const { search, albums } = this.props;
    if (albums.length) {
      return (
        <section>
          <h1>{`Resultado de álbuns de: ${search}`}</h1>
          {albums.map((album) => (
            <Link
              key={ album.collectionId }
              to={ `/album/${album.collectionId}` }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              <p>{album.collectionName}</p>
            </Link>))}
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
