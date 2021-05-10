import React, { Component } from 'react';
import Feeds from './Feeds';
import Aside from './Aside';
import './MainSection.scss';

class MainSection extends Component {
  render() {
    return (
      <main className="MainSectionJY">
        <Feeds />
        <Aside />
      </main>
    );
  }
}

export default MainSection;
