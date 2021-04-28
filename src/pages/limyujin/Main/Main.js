import React from 'react';
import Feeds from '../Main/Components/Feeds';
import TopNav from '../Main/Components/TopNav';
import MainRight from '../Main/Components/MainRight';
import '../../../styles/limyujin/Common.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <TopNav />
        <main class="main-page">
          <Feeds />
          <MainRight />
        </main>
      </>
    );
  }
}

export default Main;
