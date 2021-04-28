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
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="navTitle">
          <span className="main">westargram</span>
        </div>
        <div className="navSearch">
          <input type="text" placeholder="검색" />
        </div>
        <div className="navIcons">
          <FontAwesomeIcon icon={faHome} className="fas fa-home" />
          <FontAwesomeIcon icon={faPaperPlane} className="far fa-paper-plane" />
          <FontAwesomeIcon icon={faCompass} className="far fa-compass" />
          <FontAwesomeIcon icon={faHeart} className="fas fa-heart" />
          <img src="/images/kwonojae/profileImage.jpeg" alt="my menu" />
        </div>
      </nav>
    );
  }
}

export default Nav;
