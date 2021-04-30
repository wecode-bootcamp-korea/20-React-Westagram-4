import React from 'react';
import Nav from './components/Nav';
import Feed from './components/Feed';
import Aside from './components/Aside';
import './Main.scss';

class MainOJ extends React.Component {
  render() {
    return (
      <>
        <header className="mainHeader">
          <Nav />
        </header>
        <main className="mainPage">
          <Feed />
        </main>
        <Aside />
      </>
    );
  }
}

export default MainOJ;
