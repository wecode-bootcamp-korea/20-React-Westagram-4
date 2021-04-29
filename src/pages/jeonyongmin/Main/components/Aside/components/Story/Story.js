import { render } from '@testing-library/react';
import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    console.log(this);
    return (
      <>
        <div className="asideCenterContentContainer">
          <a href="#">
            <img
              src={this.props.img}
              alt="profile-image"
              className="asideCenterContentImg"
            />
          </a>
          <div className="asideCenterContent">
            <a href="#">{this.props.name}</a>
            <span>{this.props.timeAfterFeedUpload}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Story;
