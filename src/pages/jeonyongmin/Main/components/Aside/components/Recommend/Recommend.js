import React from 'react';
import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    return (
      <div className="recommendOfUser">
        <div className="recommendOfUserContent">
          <a href="#">
            <img
              src={this.props.img}
              alt={this.props.name}
              className="recommendOfUserProfileImg"
            />
          </a>
          <div className="recommendOfUserProfileInformation">
            <span>{this.props.name}</span>
            <span>{this.props.recommendInformation}</span>
          </div>
        </div>
        <button>팔로우</button>
      </div>
    );
  }
}

export default Recommend;
