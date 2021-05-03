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
    fetch('http://localhost:3000/data/jeonyongmin/feedData.json', {
      method: 'GET',
    })
      .then(result => result.json())
      .then(data => {
        this.setState({ feedList: data });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="feedContainer">
        <Feed feedListData={feedList} />
      </div>
    );
  }
}

export default SubMain;
