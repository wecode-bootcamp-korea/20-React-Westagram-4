import React, { Component } from 'react';
import AsideContainer from './AsideContainer';
import './Aside.scss';

class Aside extends Component {
  render() {
    return (
      <>
        <aside className="AsideJY">
          <div className="asideProfile">
            <img
              alt="하늘을 바라보고 누워있는 하오의 얼굴"
              className="profileImg"
              src="/images/leejiyon/hao2.jpg"
            />
            <div className="profileInfo">
              <div className="profileId">Shaman_king</div>
              <div className="profileName">하오</div>
            </div>
          </div>

          <AsideContainer
            title="스토리"
            content="모두 보기"
            profileProps={[
              {
                id: 1,
                imgAlt: '가아라',
                imgSrc: '/images/leejiyon/gaara.jpg',
                profileId: 'gaara',
                postTime: '1분 전',
              },
              {
                id: 2,
                imgAlt: '효신',
                imgSrc: '/images/leejiyon/hyoshin.jpeg',
                profileId: 'hyoshin',
                postTime: '2분 전',
              },
            ]}
          />
          <AsideContainer
            title="회원님을 위한 추천"
            content="모두 보기"
            profileProps={[
              {
                id: 11,
                imgAlt: '록리',
                imgSrc: '/images/leejiyon/lock-li.jpg',
                profileId: 'lock-li',
                postTime: '20분 전',
              },
              {
                id: 22,
                imgAlt: '나루토',
                imgSrc: '/images/leejiyon/naruto.jpg',
                profileId: 'naruto',
                postTime: '16분 전',
              },
            ]}
          />
        </aside>
      </>
    );
  }
}

export default Aside;
