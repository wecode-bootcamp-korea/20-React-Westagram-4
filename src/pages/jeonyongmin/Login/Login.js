import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './common.scss';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', password: '' };
  }

  goToMain = () => {
    this.props.history.push('./mainym');
  };

  handleIdInput = e => {
    this.setState({ id: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ password: e.target.value });
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
                onChange={this.handleIdInput}
              />
              <input
                className="loginInputPassword input"
                type="password"
                placeholder="비밀번호"
                required
                onChange={this.handlePasswordInput}
              />
              <button
                className="loginButton"
                type="submit"
                onClick={this.goToMain}
                // disabled
              >
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
