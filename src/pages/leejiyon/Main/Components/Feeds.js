import React, { Component } from 'react';
import Article from './Article';

class Feeds extends Component {
  render() {
    return (
      <>
        <div className="feeds">
          <Article />
          <Article />
          <Article />
        </div>
      </>
    );
  }
}

export default Feeds;
