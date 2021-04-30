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

  toggleModal = e => {
    console.log(e);
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  render() {
    const navLeftItem = [
      {
        icon: faCompass,
        onClick: () => {},
      },
      {
        icon: faHeart,
        onClick: () => {},
      },
      {
        icon: faUser,
        onClick: this.toggleModal,
      },
    ];
    const { isModalVisible } = this.state;

    return (
      <>
        <Modal isModalVisible={isModalVisible} />
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
          </div>
          <div className="top-nav__column">
            <ul className="top-nav__menus">
              {navLeftItem.map(el => (
                <li className="top-nav__menu">
                  <button onClick={el.onClick} className="top-nav__menu-btn">
                    <FontAwesomeIcon icon={el.icon} className="user" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default TopNav;
