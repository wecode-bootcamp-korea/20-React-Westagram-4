import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navLink: [
        {
          id: 1,
          imgAlt: '추천하는 사람들',
          imgSrc:
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png',
        },
        {
          id: 2,
          imgAlt: '새롭게 나를 팔로우한 사람들',
          imgSrc:
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
        },
        {
          id: 3,
          imgAlt: '내 계정',
          imgSrc:
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png',
        },
      ],
    };
  }

  goToMain = () => {
    this.props.history.push('/loginjy');
  };

  render() {
    return (
      <nav className="NavJY">
        <a className="navLogo" href="main.html">
          <img alt="위스타그램 로고" src="/images/leejiyon/instagram.png" />
          <div className="navLogoTitle">Westagram</div>
        </a>
        <div className="navSearchWrap">
          <input className="navSearch" type="text" placeholder="검색" />
        </div>
        <ul className="navLink">
          {this.state.navLink.map(link => (
            <li key={link.id}>
              <img alt={link.imgAlt} src={link.imgSrc} />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
