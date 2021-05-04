import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import '../../../styles/Common.scss';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/mainyj');
  };

  handleLoginInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { id, pw } = this.state;
    const { handleLoginInput, goToMain } = this;
    const isEveryInputValueExists = id.includes('@') && pw.length >= 5;
    return (
      <>
        <main className="login-pageYJ">
          <section className="login-boxYJ">
            <header className="login-boxYJ__title">
              <h1>Westagram</h1>
            </header>
            <form className="login-formYJ" action="main.html">
              <input
                className="login-formYJ__input"
                type="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                name="id"
                required
                onChange={handleLoginInput}
              />
              <input
                className="login-formYJ__input"
                type="password"
                placeholder="비밀번호"
                name="pw"
                minLength="5"
                required
                onChange={handleLoginInput}
              />
              <button
                className={`login-formYJ__button
                  ${
                    isEveryInputValueExists
                      ? ''
                      : 'login-formYJ__button--opacity'
                  }`}
                onClick={goToMain}
                disabled={!isEveryInputValueExists}
              >
                로그인
              </button>
              <div className="login-formYJ__other">
                <div className="line"></div>
                <div className="other-text">또는</div>
                <div className="line"></div>
              </div>
              <div className="login-formYJ__sns-login">
                <span className="login-formYJ__sns-login--facebook">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="facebookYJ"
                  />
                  Facebook으로 로그인
                </span>
              </div>
            </form>
            <div className="login-boxYJ__find-password">
              <span className="find-password__textYJ">
                비밀번호를 잊으셨나요?
              </span>
            </div>
          </section>
          <section className="join-boxYJ">
            <span>
              계정이 없으신가요?
              <Link to="/">
                <span className="join-boxYJ__link">가입하기</span>
              </Link>
            </span>
          </section>
          <section className="app-download-boxYJ">
            <h6 className="app-download-boxYJ__title">앱을 다운로드하세요.</h6>
            <div className="app-download-boxYJ__banners">
              <Link to="/https://apps.apple.com/app/instagram/id389801252?vt=lo">
                <img
                  alt="앱스토어에서 인스타그램 어플 다운로드하기"
                  className="app-download-boxYJ__banner"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                />
              </Link>
              <Link to="/https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=E426F5DC-0466-4CEF-9B63-131B0512F345&utm_content=lo&utm_medium=badge">
                <img
                  alt="구글 플레이스토어에서 인스타그램 어플 다운로드하기"
                  className="app-download-boxYJ__banner"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                />
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default withRouter(Login);
