import React, { Component } from 'react';
import Header from '../components/header';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        Album
      </div>
    );
  }
}
export default Album;