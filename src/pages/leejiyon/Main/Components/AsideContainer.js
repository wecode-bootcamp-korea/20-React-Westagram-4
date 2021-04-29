import React, { Component } from 'react';
import ProfileList from './ProfileList';
import './AsideContainer.scss';

class AsideContainer extends Component {
  render() {
    return (
      <div className="story AsideContainer">
        <div className="storyHeader asideHeader">
          <div className="title">{this.props.title}</div>
          <div className="viewMore">{this.props.content}</div>
        </div>
        <ul className="asideMain">
          {this.props.profileProps.map(el => {
            return (
              <ProfileList
                key={el.id}
                imgAlt={el.imgAlt}
                imgSrc={el.imgSrc}
                profileId={el.profileId}
                postTime={el.postTime}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AsideContainer;
