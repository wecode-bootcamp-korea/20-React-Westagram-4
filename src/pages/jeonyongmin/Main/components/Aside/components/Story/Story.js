import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    const storyContentsData = this.props.data;

    return (
      <>
        {storyContentsData.map(storyContent => {
          return (
            <div
              key={storyContent.id}
              className="asideCenterContentContainerYM"
            >
              <a href="#">
                <img
                  src={storyContent.img}
                  alt="profile-image"
                  className="asideCenterContentImg"
                />
              </a>
              <div className="asideCenterContent">
                <a href="#">{storyContent.name}</a>
                <span>{storyContent.timeAfterFeedUpload}</span>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Story;
