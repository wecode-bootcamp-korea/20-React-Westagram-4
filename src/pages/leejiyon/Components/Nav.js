import React, { Component } from 'react';
import '../../../styles/leejiyon/common.scss';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  goToMain = () => {
    this.props.history.push('/loginjy');
  };

  render() {
    return (
      <>
        <nav className="Nav">
          <a className="navLogo" href="main.html">
            <img src="/images/leejiyon/instagram.png" alt="위스타그램 로고" />
            <div className="navLogoTitle">Westagram</div>
          </a>
          <div className="navSearchWrap">
            <input className="navSearch" type="text" placeholder="검색" />
            <ul className="searchPopup"></ul>
          </div>
          <ul className="navLink">
            <li>
              <a href="#">
                <img
                  alt="추천하는 사람들"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  alt="새롭게 나를 팔로우한 사람들"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              </a>
            </li>
            <li>
              <a onClick={this.goToMain}>
                <img
                  alt="내 계정"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                />
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default withRouter(Nav);
