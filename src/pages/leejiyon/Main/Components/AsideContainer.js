import React, { Component } from 'react';
import ProfileList from './ProfileList';
import './AsideContainer.scss';

class AsideContainer extends Component {
  render() {
    return (
      <div className="AsideContainerJY">
        <div className="asideHeader">
          <div className="title">{this.props.title}</div>
          <div className="viewMore">{this.props.content}</div>
        </div>
        <ul className="asideMain">
          {this.props.profileLists.map(profileList => (
            <ProfileList key={profileList.id} {...profileList} />
          ))}
        </ul>
      </div>
    );
  }
}

export default AsideContainer;
