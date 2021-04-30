import React from 'react';
import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    let lists = [];
    const recommendData = this.props.data;
    console.log(recommendData);
    for (let i = 0; i < recommendData.length; i++) {
      lists.push(
        <div className="recommendOfUser" key={recommendData[i].id}>
          <div className="recommendOfUserContent">
            <a href="#">
              <img
                src={recommendData[i].img}
                recommendData
                alt={recommendData[i].name}
                className="recommendOfUserProfileImg"
              />
            </a>
            <div className="recommendOfUserProfileInformation">
              <span>{recommendData[i].name}</span>
              <span>{recommendData[i].recommendInformation}</span>
            </div>
          </div>
          <button>팔로우</button>
        </div>
      );
    }
    return <>{lists}</>;
  }
}

export default Recommend;
