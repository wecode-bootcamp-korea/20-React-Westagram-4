import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faCompass,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

class TopNav extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  render() {
    // const { isModalVisible } = this.state;

    return (
      <>
        <Modal isModalVisible={this.state.isModalVisible} />
        <nav className="top-nav">
          <div className="top-nav__column">
            <Link to="/">
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
            </Link>
            <span className="top-nav__left-text">|</span>
            <span className="top-nav__left-text">
              <a href="main.html">Westagram</a>
            </span>
          </div>
          <div className="top-nav__column">
            <input className="top-nav__input" type="text" placeholder="검색" />
            <FontAwesomeIcon icon={faSearch} className="top-nav__search" />
            <i class="fas fa-search"></i>
          </div>
          <div className="top-nav__column">
            <ul className="top-nav__menus">
              <li className="top-nav__menu">
                <button className="top-nav__menu-btn">
                  <FontAwesomeIcon icon={faCompass} className="compass" />
                </button>
              </li>
              <li className="top-nav__menu">
                <button className="top-nav__menu-btn">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                </button>
              </li>
              <li className="top-nav__menu">
                <button
                  onClick={this.toggleModal}
                  className="top-nav__menu-btn"
                >
                  <FontAwesomeIcon icon={faUser} className="user" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default TopNav;
