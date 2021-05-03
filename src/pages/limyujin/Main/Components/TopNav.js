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
      isInputFocused: false,
      isInputChanged: false,
      searchText: '',
    };
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  focusInput = () => {
    this.setState({ isInputFocused: true });
  };

  blurInput = () => {
    this.setState({
      isInputFocused: false,
      isInputChanged: false,
    });
  };

  handleInput = e => {
    this.setState({
      searchText: e.target.value,
      isInputChanged: true,
    });
  };

  render() {
    const navLeftItem = [
      {
        id: '1',
        icon: faCompass,
        onClick: () => {},
      },
      {
        id: '2',
        icon: faHeart,
        onClick: () => {},
      },
      {
        id: '3',
        icon: faUser,
        onClick: this.toggleModal,
      },
    ];
    const {
      isModalVisible,
      isInputFocused,
      searchText,
      isInputChanged,
    } = this.state;
    const { focusInput, blurInput, handleInput } = this;
    const yesInputNoDisplay =
      isInputChanged || searchText ? 'display-none' : '';

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
            <div className="top-nav__input-box">
              <input
                className="top-nav__input"
                type="text"
                value={searchText}
                onFocus={focusInput}
                onBlur={blurInput}
                onChange={handleInput}
              />
              <span
                className={`top-nav__input-text ${
                  isInputFocused ? 'top-nav__input-text--focused' : ''
                } ${yesInputNoDisplay}`}
              >
                검색
              </span>
              <FontAwesomeIcon
                icon={faSearch}
                className={`top-nav__search
                  ${isInputFocused ? 'top-nav__search--focused' : ''}`}
              />
            </div>
          </div>
          <div className="top-nav__column">
            <ul className="top-nav__menus">
              {navLeftItem.map(el => (
                <li className="top-nav__menu" key={el.id}>
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
