import React, { Component } from 'react';
import Article from './Article';
import '../../../../styles/leejiyon/common.scss';

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
