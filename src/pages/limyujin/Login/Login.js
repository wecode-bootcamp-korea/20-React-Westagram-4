import React from 'react';
import '../../../styles/limyujin/Common.scss';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

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
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { id, pw } = this.state;
    const isEveryInputValueExists = id.includes('@') && pw.length >= 5;
    return (
      <>
        <main className="login-page">
          <section className="login-box">
            <header className="login-box__title">
              <h1>Westagram</h1>
            </header>
            <form className="login-form" action="main.html">
              <input
                className="login-form__input"
                type="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                name="id"
                required
                onChange={this.handleLoginInput}
              />
              <input
                className="login-form__input"
                type="password"
                placeholder="비밀번호"
                name="pw"
                minLength="5"
                required
                onChange={this.handleLoginInput}
              />
              <button
                className={
                  isEveryInputValueExists
                    ? 'login-form__button'
                    : 'login-form__button login-form__button--opacity'
                }
                onClick={this.goToMain}
                disabled={isEveryInputValueExists ? false : true}
              >
                로그인
              </button>
              <div className="login-form__other">
                <div className="line"></div>
                <div className="other-text">또는</div>
                <div className="line"></div>
              </div>
              <div className="login-form__sns-login">
                <span className="login-form__sns-login--facebook">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="facebook"
                  />
                  Facebook으로 로그인
                </span>
              </div>
            </form>
            <div className="login-box__find-password">
              <span className="find-password__text">
                비밀번호를 잊으셨나요?
              </span>
            </div>
          </section>
          <section className="join-box">
            <span>
              계정이 없으신가요?
              <a className="join-box__link" href="#">
                가입하기
              </a>
            </span>
          </section>
          <section className="app-download-box">
            <h6 className="app-download-box__title">앱을 다운로드하세요.</h6>
            <div className="app-download-box__banners">
              <a
                target="_blank"
                href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              >
                <img
                  alt="앱스토어에서 인스타그램 어플 다운로드하기"
                  className="app-download-box__banner"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=E426F5DC-0466-4CEF-9B63-131B0512F345&utm_content=lo&utm_medium=badge"
              >
                <img
                  alt="구글 플레이스토어에서 인스타그램 어플 다운로드하기"
                  className="app-download-box__banner"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                />
              </a>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default withRouter(Login);
