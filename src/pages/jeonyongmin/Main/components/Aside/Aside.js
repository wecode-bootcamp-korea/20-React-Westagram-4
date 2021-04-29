import React from 'react';
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
              <div>
                <a href="#">
                  <img
                    src="/images/jeonyongmin/yongmin.jpg"
                    alt="profile-image"
                    className="asideCenterContentYongminImg"
                  />
                </a>
                <div className="asideCenterContent">
                  <a href="#">yongmin</a>
                  <span>5분전</span>
                </div>
              </div>
              <div>
                <a href="#">
                  <img
                    src="/images/jeonyongmin/weeknd.jpg"
                    alt="profile-image"
                    className="asideCenterContentImg"
                  />
                </a>
                <div className="asideCenterContent">
                  <a href="#">The Weeknd</a>
                  <span>16분전</span>
                </div>
              </div>
            </div>
          </div>
          <div className="asideBottomContainer">
            <div className="asideBottomTopBar">
              <span>회원을 위한 추천</span>
              <a href="">모두 보기</a>
            </div>
            <div className="recommendOfUser">
              <div className="recommendOfUserContent">
                <a href="#">
                  <img
                    src="/images/jeonyongmin/justin.jpg"
                    alt="justin bieber"
                    className="recommendOfUserProfileImg"
                  />
                </a>
                <div className="recommendOfUserProfileInformation">
                  <span>justinbieber</span>
                  <span>_legend_a님 외 2명이...</span>
                </div>
              </div>
              <button>팔로우</button>
            </div>
            <div className="recommendOfUser">
              <div className="recommendOfUserContent">
                <a href="#">
                  <img
                    src="/images/jeonyongmin/ariana.jpg"
                    alt="ariana grande"
                    className="recommendOfUserProfileImg"
                  />
                </a>
                <div className="recommendOfUserProfileInformation">
                  <span>arianagrande</span>
                  <span>_legend_a님 외 2명이...</span>
                </div>
              </div>
              <button>팔로우</button>
            </div>
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
