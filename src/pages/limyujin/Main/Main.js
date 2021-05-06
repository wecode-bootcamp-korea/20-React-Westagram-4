import React from 'react';
import _ from 'lodash';
import Feeds from '../Main/Components/Feeds';
import TopNav from '../Main/Components/TopNav';
import MainRight from '../Main/Components/MainRight';
import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedInfo: [],
      recommendData: [],
      preItems: 0,
      items: 2,
    };
  }

  componentDidMount() {
    this.getFeedData();
    this.getRecommendData();
    window.addEventListener('scroll', _.throttle(this.infinityScroll, 500));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infinityScroll);
  }

  getFeedData = () => {
    const { preItems, items, feedInfo } = this.state;
    const feedDataUrl = 'Data/limyujin/feedData.json';
    fetch(feedDataUrl, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(feedData => {
        let sliceData = feedData.slice(preItems, items);
        this.setState({ feedInfo: [...feedInfo, ...sliceData] });
      });
  };

  getRecommendData = () => {
    const recommendDataUrl = 'Data/limyujin/recommendData.json';

    fetch(recommendDataUrl, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(recommendData => {
        this.setState({ recommendData: recommendData });
      });
  };

  infinityScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 3,
      });
      this.getFeedData();
    }
  };

  render() {
    const { feedInfo, recommendData } = this.state;
    return (
      <>
        <TopNav />
        <main className="main-pageYJ">
          <div className="feedYJ-box">
            {feedInfo.map(el => (
              <Feeds
                author={el.author}
                profileImg={el.profileImg}
                location={el.location}
                mainImg={el.mainImg}
                text={el.text}
                time={el.time}
                like={el.like}
                story={el.story}
                key={el.id}
              />
            ))}
          </div>
          <MainRight accountInfo={recommendData} />
        </main>
      </>
    );
  }
}

export default Main;
