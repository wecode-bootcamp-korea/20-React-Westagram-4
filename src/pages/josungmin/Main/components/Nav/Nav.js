import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav>
          <div class="nav_container">
            <div class="nav_logo">
              <img
                class="logo_instagram_txt"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt="logo_text"
              />
            </div>
            <input
              id="searchInput"
              type="search"
              class="input_search"
              placeholder="검색"
            />
            <div class="nav_icons">
              <img src="#" alt="홈" />
              <img src="#" alt="DM" />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="탐색"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="하트"
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
