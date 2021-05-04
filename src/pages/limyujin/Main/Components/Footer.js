import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    const footerItem = [
      {
        id: 1,
        item: '소개',
      },
      {
        id: 2,
        item: '도움말',
      },
      {
        id: 3,
        item: '홍보 센터',
      },
      {
        id: 4,
        item: 'API',
      },
      {
        id: 5,
        item: '채용 정보',
      },
      {
        id: 6,
        item: '개인정보처리방침',
      },
      {
        id: 7,
        item: '약관',
      },
      {
        id: 8,
        item: '위치',
      },
      {
        id: 9,
        item: '인기 계정',
      },
      {
        id: 10,
        item: '해시태그',
      },
      {
        id: 11,
        item: '언어',
      },
    ];
    return (
      <>
        <footer className="main-footerYJ">
          <nav className="main-footerYJ__nav">
            <ul>
              {footerItem.map(footerMenu => (
                <li className="main-footerYJ__list" key={footerMenu.id}>
                  {footerMenu.item}
                </li>
              ))}
            </ul>
          </nav>
          <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
        </footer>
      </>
    );
  }
}
export default Footer;
