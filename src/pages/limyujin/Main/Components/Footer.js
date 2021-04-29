import React from 'react';

class Footer extends React.Component {
  render() {
    const footerItem = [
      '소개',
      '도움말',
      '홍보 센터',
      'API',
      '채용 정보',
      '개인정보처리방침',
      '약관',
      '위치',
      '인기 계정',
      '해시태그',
      '언어',
    ];
    return (
      <>
        <footer className="main-footer">
          <nav className="main-footer__nav">
            <ul>
              {footerItem.map(el => (
                <li className="main-footer__list">{el}</li>
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
