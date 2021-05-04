import React from 'react';
import Nav from './components/Nav/Nav';
import Article from './components/Article/Article';
import Right from './components/Right/Right';
import './Main.scss';
import '../Login/Login.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <div className="feeds">
            <Article />
          </div>
          <Right />
        </main>
      </>
    );
  }
}

export default Main;
