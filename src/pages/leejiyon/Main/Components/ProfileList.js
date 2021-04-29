import React, { Component } from 'react';
import '../../../../styles/leejiyon/common.scss';

class ProfileList extends Component {
  render() {
    return (
      <li className="ProfileList">
        <img
          alt={this.props.imgAlt}
          className="asideProfileImg"
          src={this.props.imgSrc}
        />
        <div className="idAndTime">
          <div className="profileId">{this.props.profileId}</div>
          <div className="postTime grey">{this.props.postTime}</div>
        </div>
      </li>
    );
  }
}

export default ProfileList;
