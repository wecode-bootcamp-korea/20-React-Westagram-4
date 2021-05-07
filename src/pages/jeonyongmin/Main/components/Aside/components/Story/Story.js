import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    const storyContentsData = this.props.storyData;

    return (
      <>
        {storyContentsData.map(storyContent => {
          const { id, img, name, timeAfterFeedUpload } = storyContent;
          return (
            <div key={id} className="asideCenterContentContainerYM">
              <a href="#">
                <img
                  src={img}
                  alt="profile-image"
                  className="asideCenterContentImg"
                />
              </a>
              <div className="asideCenterContent">
                <a href="#">{name}</a>
                <span>{timeAfterFeedUpload}</span>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Story;
