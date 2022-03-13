import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/musicCard';
import Loading from '../components/loading';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      album: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = async () => {
    this.setState({
      loading: true,
    });
    const { match: { params: { id } } } = this.props;
    const album = await getMusics(id);
    this.setState({
      album,
    }, () => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { album, loading } = this.state;

    if (album.length > 0) {
      return (
        <div data-testid="page-album">
          <Header />
          {loading
            ? <Loading />
            : <MusicCard album={ album } />}
        </div>
      );
    }
    return (
      <div data-testid="page-album">
        <Header />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
