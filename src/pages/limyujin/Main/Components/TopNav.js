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

import './TopNav.scss';

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
      .then(feedData => {
        this.setState({
          userData: [...feedData],
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
      isInputChanged || searchText ? 'display-noneYJ' : '';
    return (
      <>
        <nav className="top-navYJ">
          <div className="top-navYJ__column">
            <Link to="/loginyj">
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
            </Link>
            <span className="top-navYJ__left-text">|</span>
            <span className="top-navYJ__left-text">
              <span>Westagram</span>
            </span>
          </div>
          <div className="top-navYJ__column">
            <div className="top-navYJ__input-box">
              <input
                className="top-navYJ__input"
                type="text"
                value={searchText}
                onFocus={focusInput}
                onBlur={blurInput}
                onChange={handleInput}
              />
              <span
                className={`top-navYJ__input-text ${
                  isInputFocused ? 'top-navYJ__input-text--focused' : ''
                } ${yesInputNoDisplay}`}
              >
                검색
              </span>
              <FontAwesomeIcon
                icon={faSearch}
                className={`top-navYJ__search
                  ${isInputFocused ? 'top-navYJ__search--focused' : ''}`}
              />
              <SearchModal
                userData={userData}
                key={userData.id}
                isInputFocused={isInputFocused}
                searchText={searchText}
              />
            </div>
          </div>
          <div className="top-navYJ__column">
            <ul className="top-navYJ__menus">
              {navLeftItem.map(menu => (
                <li className="top-navYJ__menu" key={menu.id}>
                  <button className="top-navYJ__menu-btn">
                    <FontAwesomeIcon icon={menu.icon} className="user" />
                  </button>
                </li>
              ))}
              <li className="top-navYJ__menu">
                <button
                  onClick={this.toggleModal}
                  className="top-navYJ__menu-btn"
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
