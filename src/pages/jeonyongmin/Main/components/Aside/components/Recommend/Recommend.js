import React from 'react';
import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    const recommendData = this.props.recommendData;

    return (
      <>
        {recommendData.map(recommend => {
          const { id, img, name, recommendInformation } = recommend;
          return (
            <div className="recommendOfUserYM" key={id}>
              <div className="recommendOfUserContent">
                <a href="#">
                  <img
                    src={img}
                    alt={name}
                    className="recommendOfUserProfileImg"
                  />
                </a>
                <div className="recommendOfUserProfileInformation">
                  <span>{name}</span>
                  <span>{recommendInformation}</span>
                </div>
              </div>
              <button>팔로우</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default Recommend;
