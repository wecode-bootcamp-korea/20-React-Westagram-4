import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faPaperPlane,
  faCompass,
  faHeart,
  faSmile,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import Nav from './components/Nav';
import Feed from './components/Feed';
import Aside from './components/Aside';
// import Login from '../Login/Login';
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
        {/* <Login /> */}
      </>
    );
  }
}

export default MainOJ;
