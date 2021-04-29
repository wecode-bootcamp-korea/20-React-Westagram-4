import React from 'react';
import Story from './components/Story/Story';
import Recommend from './components/Recommend/Recommend';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <>
        <aside className="asideSection">
          <header className="asideTop">
            <a href="#">
              <img
                src="/images/jeonyongmin/wecode_icon.jpg"
                alt="위코드 이모티콘"
                className="asideTopImg"
              />
            </a>
            <div className="asideTopContents">
              <a href="#">wecode_bootcamp</a>
              <span>WeCode | 위코드</span>
            </div>
          </header>
          <div className="asideCenterContainer">
            <div className="asideCenterTopbar">
              <span>스토리</span>
              <button>모두 보기</button>
            </div>
            <div className="asideCenterContents">
              <Story
                name="bruno Mars"
                img="/images/jeonyongmin/brunomars.jpg"
                timeAfterFeedUpload="5분전"
              />
              <Story
                name="The Weeknd"
                img="/images/jeonyongmin/weeknd.jpg"
                timeAfterFeedUpload="16분전"
              />
            </div>
          </div>
          <div className="asideBottomContainer">
            <div className="asideBottomTopBar">
              <span>회원을 위한 추천</span>
              <a href="">모두 보기</a>
            </div>
            <Recommend
              name="justin bieber"
              img="/images/jeonyongmin/justin.jpg"
              recommendInformation="_legend_a님 외 2명이..."
            />
            <Recommend
              name="ariana grande"
              img="/images/jeonyongmin/ariana.jpg"
              recommendInformation="_sl-2k523님 외 2명이..."
            />
          </div>
          <footer className="footerSection">
            <p className="footerContainer">
              <a href="">소개</a> · <a href="">도움말</a> &middot;{' '}
              <a href="">홍보센터</a> &middot; <a href="">API</a>
              &middot; <a href="">채용정보</a> &middot; <br />{' '}
              <a href="">개인정보처리방침</a> &middot; <a href="">약관</a>{' '}
              &middot; <a href="">디렉터리</a> &middot; <a href="">프로필</a>{' '}
              &middot; <br />
              <a href="">해시태그</a>
              &middot; <a href="">언어</a>
            </p>
            <p className="copyrightOfInstagram">&copy; 2021 INSTAGRAM</p>
          </footer>
        </aside>
      </>
    );
  }
}

export default Aside;
