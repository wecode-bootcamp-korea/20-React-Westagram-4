import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './common.scss';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('./mainym');
  };

  render() {
    return (
      <main className="login">
        <div className="loginPage">
          <h1 className="loginTitle">Westagram</h1>
          <div className="loginContents">
            <form
              action="./main.html"
              method="get"
              className="loginInformation"
            >
              <input
                className="loginInputId input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                required
              />
              <input
                className="loginInputPassword input"
                type="password"
                placeholder="비밀번호"
                required
              />
              <button
                className="loginButton"
                type="submit"
                onClick={this.goToMain}
              >
                {/* 버튼 disabled 잠시 해제해놓음 */}
                로그인
              </button>
            </form>
          </div>
          <a
            href="https://www.instagram.com/accounts/password/reset/"
            className="loginFindPassword"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
