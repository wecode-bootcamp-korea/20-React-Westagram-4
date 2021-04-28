import React from 'react';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside">
        <div className="profilewithrecommend">
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
            <div className="recommendProfile">
              <img src="/images/kwonojae/r_profile1.jpeg" />
              <dl>
                <dt>jennierubyjane</dt>
                <dd>인기</dd>
              </dl>
              <button>팔로우</button>
            </div>
            <div className="recommendProfile">
              <img src="/images/kwonojae/r_profile2.jpeg" />
              <dl>
                <dt>sooyaaa__</dt>
                <dd>인기</dd>
              </dl>
              <button>팔로우</button>
            </div>
            <div className="recommendProfile">
              <img src="/images/kwonojae/r_profile3.jpeg" />
              <dl>
                <dt>roses_are_rosie</dt>
                <dd>인기</dd>
              </dl>
              <button>팔로우</button>
            </div>
            <div className="recommendProfile">
              <img src="/images/kwonojae/r_profile4.jpeg" />
              <dl>
                <dt>dlwlrma</dt>
                <dd>인기</dd>
              </dl>
              <button>팔로우</button>
            </div>
            <div className="recommendProfile">
              <img src="/images/kwonojae/r_profile5.jpeg" />
              <dl>
                <dt>_imyour_joy</dt>
                <dd>인기</dd>
              </dl>
              <button>팔로우</button>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
