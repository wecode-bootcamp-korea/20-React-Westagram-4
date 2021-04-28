import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SubMain from './components/SubMain/SubMain';
import Aside from './components/Aside/Aside';
import '../Login/common.scss';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="mainPage">
          <SubMain />
          <Aside />
        </main>
      </>
    );
  }
}

export default Main;
