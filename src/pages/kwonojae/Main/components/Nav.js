import React, { Component } from 'react';
import './Nav.scss';

const NAVICONLIST = [
  { id: 1, className: 'fas fa-home' },
  { id: 2, className: 'far fa-paper-plane' },
  { id: 3, className: 'far fa-compass' },
  { id: 4, className: 'fas fa-heart' },
];

export default class Nav extends Component {
  render() {
    return (
      <nav className="navOJ">
        <div className="navTitle">
          <span className="main">westargram</span>
        </div>
        <div className="navSearch">
          <input type="text" placeholder="검색" />
        </div>
        <div className="navIcons">
          {NAVICONLIST.map(iconInfo => {
            const { id, className } = iconInfo;
            return <i key={id} className={className} />;
          })}
          <img alt="my menu" src="/images/kwonojae/profileImage.jpeg" />
        </div>
      </nav>
    );
  }
}
