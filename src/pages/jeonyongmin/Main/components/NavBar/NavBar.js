import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    const headerNavRightSideLastTwoButton = [
      {
        id: 1,
        imgSrc:
          'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
        alt: 'heart',
        className: 'headerNavRightSideImg2',
      },
      {
        id: 2,
        imgSrc:
          'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png',
        alt: 'mypage',
        className: 'headerNavRightSideImg3',
      },
    ];
    return (
      <header className="headerYM">
        <nav className="headerNav">
          <div className="headerNavLeftSide">
            <Link to="/loginym">
              <img
                alt="instagram_imoticon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Instagram_font_awesome.svg/512px-Instagram_font_awesome.svg.png"
                className="headerNavLeftSideImg"
              />
            </Link>
            <h1>
              <a href="#" className="headerNavLeftSideTitle">
                Instagram
              </a>
            </h1>
          </div>
          <div className="headerNavCenter">
            <input type="text" className="headerNavInput" placeholder="검색" />
            <i className="fas fa-search"></i>
          </div>
          <div className="headerNavRightSide">
            <a href="#">
              <img
                alt="explore right menu"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                className="headerNavRightSideImg1"
              />
            </a>
            {headerNavRightSideLastTwoButton.map(button => {
              const { id, imgSrc, alt, className } = button;
              return (
                <button>
                  <img alt={alt} src={imgSrc} className={className} key={id} />
                </button>
              );
            })}
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
