import React from 'react';
import Feeds from '../Main/Components/Feeds';
import TopNav from '../Main/Components/TopNav';
import MainRight from '../Main/Components/MainRight';
import '../../../styles/limyujin/Common.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedInfo: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/limyujin/westaData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ feedInfo: data });
      });
  }

  render() {
    const { feedInfo } = this.state;

    return (
      <>
        <TopNav />
        <main className="main-page">
          <div className="feed-box">
            {feedInfo.map((el, index) => (
              <Feeds
                author={el.author}
                profileImg={el.profileImg}
                location={el.location}
                mainImg={el.mainImg}
                text={el.text}
                time={el.time}
                like={el.like}
                story={el.story}
                key={index}
              />
            ))}
          </div>
          <MainRight accountInfo={feedInfo} />
        </main>
      </>
    );
  }
}

export default Main;
