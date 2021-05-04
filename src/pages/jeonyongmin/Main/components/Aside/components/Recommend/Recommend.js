import React from 'react';
import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    const recommendData = this.props.data;

    return (
      <>
        {recommendData.map(recommend => {
          return (
            <div className="recommendOfUserYM" key={recommendData.id}>
              <div className="recommendOfUserContent">
                <a href="#">
                  <img
                    src={recommend.img}
                    alt={recommend.name}
                    className="recommendOfUserProfileImg"
                  />
                </a>
                <div className="recommendOfUserProfileInformation">
                  <span>{recommend.name}</span>
                  <span>{recommend.recommendInformation}</span>
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
