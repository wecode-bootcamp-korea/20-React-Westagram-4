import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  goToMain = () => {
    this.props.history.push('/loginjy');
  };

  render() {
    return (
      <>
        <nav className="NavJY">
          <a className="navLogo" href="main.html">
            <img alt="위스타그램 로고" src="/images/leejiyon/instagram.png" />
            <div className="navLogoTitle">Westagram</div>
          </a>
          <div className="navSearchWrap">
            <input className="navSearch" type="text" placeholder="검색" />
            <ul className="searchPopup"></ul>
          </div>
          <ul className="navLink">
            <li>
              <img
                alt="추천하는 사람들"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </li>
            <li>
              <img
                alt="새롭게 나를 팔로우한 사람들"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </li>
            <li onClick={this.goToMain}>
              <img
                alt="내 계정"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default withRouter(Nav);
