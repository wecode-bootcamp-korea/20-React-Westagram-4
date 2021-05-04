import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';
import SearchModal from './SearchModal';

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
      userData: [],
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const feedDataUrl = 'http://localhost:3000/Data/limyujin/feedData.json';
    fetch(feedDataUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          userData: [...data],
        });
      });
  };

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
      },
      {
        id: '2',
        icon: faHeart,
      },
    ];
    const {
      isModalVisible,
      isInputFocused,
      searchText,
      isInputChanged,
      userData,
    } = this.state;
    const { focusInput, blurInput, handleInput } = this;
    const yesInputNoDisplay =
      isInputChanged || searchText ? 'display-none' : '';
    return (
      <>
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
              <SearchModal
                userData={userData}
                key={userData.id}
                isInputFocused={isInputFocused}
                searchText={searchText}
              />
            </div>
          </div>
          <div className="top-nav__column">
            <ul className="top-nav__menus">
              {navLeftItem.map(el => (
                <li className="top-nav__menu" key={el.id}>
                  <button className="top-nav__menu-btn">
                    <FontAwesomeIcon icon={el.icon} className="user" />
                  </button>
                </li>
              ))}
              <li className="top-nav__menu">
                <button
                  onClick={this.toggleModal}
                  className="top-nav__menu-btn"
                >
                  <FontAwesomeIcon icon={faUser} className="user" />
                </button>
                <Modal isModalVisible={isModalVisible} />
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default TopNav;
