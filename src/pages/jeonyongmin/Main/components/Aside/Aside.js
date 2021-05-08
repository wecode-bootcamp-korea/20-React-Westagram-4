import React from 'react';
import Story from './components/Story/Story';
import Recommend from './components/Recommend/Recommend';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    const storyContents = [
      {
        id: 1,
        name: 'bruno Mars',
        img: '/images/jeonyongmin/brunomars.jpg',
        timeAfterFeedUpload: '5분전',
      },
      {
        id: 2,
        name: 'The Weeknd',
        img: '/images/jeonyongmin/weeknd.jpg',
        timeAfterFeedUpload: '16분전',
      },
    ];
    const recommendContents = [
      {
        id: 1,
        name: 'justin bieber',
        img: '/images/jeonyongmin/justin.jpg',
        recommendInformation: '_legend_a님 외 2명이...',
      },
      {
        id: 2,
        name: 'ariana grande',
        img: '/images/jeonyongmin/ariana.jpg',
        recommendInformation: '_ske6634님 외 9명이...',
      },
    ];
    const footerContents = [
      { id: 1, content: '소개' },
      { id: 2, content: '도움말' },
      { id: 3, content: '홍보센터' },
      { id: 4, content: 'API' },
      { id: 5, content: '채용정보' },
      { id: 6, content: '개인정보 처리방침' },
      { id: 7, content: '약관' },
      { id: 8, content: '디렉터리' },
      { id: 9, content: '프로필' },
      { id: 10, content: '해시태그' },
      { id: 11, content: '언어' },
    ];

    return (
      <aside className="asideSectionYM">
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
            <div>
              <span>WeCode</span>
              <span>위코드</span>
            </div>
          </div>
        </header>
        <div className="asideCenterContainer">
          <div className="asideCenterTopbar">
            <span>스토리</span>
            <button>모두 보기</button>
          </div>
          <div className="asideCenterContents">
            <Story storyData={storyContents} />
          </div>
        </div>
        <div className="asideBottomContainer">
          <div className="asideBottomTopBar">
            <span>회원을 위한 추천</span>
            <a href="">모두 보기</a>
          </div>
          <Recommend recommendData={recommendContents} />
        </div>
        <footer className="footerSection">
          <p className="footerContainer">
            {footerContents.map(footerContent => {
              const { id, content } = footerContent;
              return (
                <a href="" key={id}>
                  {`${content} · `}
                </a>
              );
            })}
          </p>
          <p className="copyrightOfInstagram">&copy; 2021 INSTAGRAM</p>
        </footer>
      </aside>
    );
  }
}

export default Aside;
