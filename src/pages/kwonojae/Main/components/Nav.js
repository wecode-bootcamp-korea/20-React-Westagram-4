import React, { Component } from 'react';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    const iconList = [
      { id: 1, className: 'fas fa-home' },
      { id: 2, className: 'far fa-paper-plane' },
      { id: 3, className: 'far fa-compass' },
      { id: 4, className: 'fas fa-heart' },
    ];

    return (
      <nav className="navOJ">
        <div className="navTitle">
          <span className="main">westargram</span>
        </div>
        <div className="navSearch">
          <input type="text" placeholder="검색" />
        </div>
        <div className="navIcons">
          {iconList.map(iconInfo => {
            return <i key={iconInfo.id} className={iconInfo.className} />;
          })}
          <img src="/images/kwonojae/profileImage.jpeg" alt="my menu" />
        </div>
      </nav>
    );
  }
}
