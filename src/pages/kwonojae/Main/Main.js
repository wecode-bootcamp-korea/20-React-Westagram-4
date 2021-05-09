import React, { Component } from 'react';
import Nav from './components/Nav';
import Feed from './components/Feed';
import Aside from './components/Aside';
import './Main.scss';

export default class MainOJ extends Component {
  render() {
    return (
      <>
        <header className="mainHeader">
          <Nav />
        </header>
        <div>
          <main className="mainPage">
            <Feed />
          </main>
          <Aside />
        </div>
      </>
    );
  }
}
