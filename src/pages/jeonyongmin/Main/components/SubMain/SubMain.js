import React from 'react';
import Feed from './Feed/Feed';
import './SubMain.scss';

class SubMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/jeonyongmin/feedData.json')
      .then(result => result.json())
      .then(feedData => {
        this.setState({ feedList: feedData });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="feedContainerYM">
        {feedList.map(element => (
          <Feed
            key={element.id}
            number={element.id}
            name={element.name}
            feedImg={element.feedImg}
            profileImg={element.profileImg}
            comment={element.comment}
            like={element.like}
          />
        ))}
      </div>
    );
  }
}

export default SubMain;
