import React, { Component } from 'react';
import Feeds from './Feeds';
import Aside from './Aside';
import '../../../../styles/leejiyon/common.scss';

class MainSection extends Component {
  render() {
    return (
      <>
        <main className="MainSection">
          <Feeds />
          <Aside />
        </main>
      </>
    );
  }
}

export default MainSection;
