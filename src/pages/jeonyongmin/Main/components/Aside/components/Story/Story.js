import { render } from '@testing-library/react';
import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    let lists = [];
    const storyContentsData = this.props.data;
    for (let i = 0; i < storyContentsData.length; i++) {
      lists.push(
        <div
          key={storyContentsData[i].id}
          className="asideCenterContentContainer"
        >
          <a href="#">
            <img
              src={storyContentsData[i].img}
              alt="profile-image"
              className="asideCenterContentImg"
            />
          </a>
          <div className="asideCenterContent">
            <a href="#">{storyContentsData[i].name}</a>
            <span>{storyContentsData[i].timeAfterFeedUpload}</span>
          </div>
        </div>
      );
    }
    return <>{lists}</>;
  }
}

export default Story;
