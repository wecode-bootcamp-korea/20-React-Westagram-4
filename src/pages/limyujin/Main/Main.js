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
      initItems: 0,
      addItems: 2,
    };
    this.infinityScroll = _.throttle(this.infinityScroll, 500);
  }

  componentDidMount() {
    this.getFeedData();
    this.getRecommendData();
    window.addEventListener('scroll', this.infinityScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infinityScroll);
  }

  getFeedData = () => {
    const { initItems, addItems, feedInfo } = this.state;
    const FEED_DATA = '/data/limyujin/feedData.json';
    fetch(FEED_DATA)
      .then(res => res.json())
      .then(feedData => {
        const sliceData = feedData.slice(initItems, addItems);
        this.setState({ feedInfo: [...feedInfo, ...sliceData] });
      });
  };

  getRecommendData = () => {
    const RECOMMEND_DATA = '/data/limyujin/recommendData.json';
    fetch(RECOMMEND_DATA)
      .then(res => res.json())
      .then(recommendData => {
        this.setState({ recommendData });
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
        initItems: this.state.addItems,
        addItems: this.state.addItems + 2,
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
                ref={this.loader}
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
