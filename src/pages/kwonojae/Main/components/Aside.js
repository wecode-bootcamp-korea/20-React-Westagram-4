import React from 'react';
import './Aside.scss';
import RecommendProfiles from './Recommendprofile';

class Aside extends React.Component {
  render() {
    return (
      <aside className="asideOJ">
        <div className="profileWithRecommend">
          <div className="myProfile">
            <img src="/images/kwonojae/myprofile.jpeg" />
            <dl>
              <dt>geborenik</dt>
              <dd>권오재</dd>
            </dl>
            <button>전환</button>
          </div>
          <div className="recommendForYou">
            <span>회원님을 위한 추천</span>
            <button>모두 보기</button>
          </div>
          <div className="recommnedList">
            <RecommendProfiles />
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
