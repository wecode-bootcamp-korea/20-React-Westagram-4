import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="main-footer">
          <nav className="main-footer__nav">
            <ul>
              <li className="main-footer__list">소개</li>
              <li className="main-footer__list">도움말</li>
              <li className="main-footer__list">홍보 센터</li>
              <li className="main-footer__list">API</li>
              <li className="main-footer__list">채용 정보</li>
              <li className="main-footer__list">개인정보처리방침</li>
              <li className="main-footer__list">약관</li>
              <li className="main-footer__list">위치</li>
              <li className="main-footer__list">인기 계정</li>
              <li className="main-footer__list">해시태그</li>
              <li className="main-footer__list">언어</li>
            </ul>
          </nav>
          <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
        </footer>
      </>
    );
  }
}
export default Footer;
