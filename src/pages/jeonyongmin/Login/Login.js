import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './common.scss';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      buttonColor: false,
    };
  }

  goToMain = e => {
    this.props.history.push('./mainym');
  };

  handleIdPwInput = e => {
    if (e.target.type === 'text') {
      this.setState({ id: e.target.value }, this.validation);
    } else if (e.target.type === 'password') {
      this.setState({ password: e.target.value }, this.validation);
    }
  };

  validation = () => {
    const { id, password } = this.state;
    const condition = id.includes('@') && password.length >= 5;
    this.setState({ buttonColor: condition });
  };

  render() {
    const { id, password, buttonColor } = this.state;
    const condtionOfButtonActivated = id.includes('@') && password.length >= 5;
    return (
      <main className="login">
        <div className="loginPage">
          <h1 className="loginTitle">Westagram</h1>
          <div className="loginContents">
            <form action="#" method="get" className="loginInformation">
              <input
                className="loginInputId input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                required
                onChange={this.handleIdPwInput}
              />
              <input
                className="loginInputPassword input"
                type="password"
                placeholder="비밀번호"
                required
                onChange={this.handleIdPwInput}
              />
              <button
                className={
                  buttonColor ? 'loginButtonActive' : 'loginButtonDeactive'
                }
                type="subtmit"
                onClick={this.goToMain}
                disabled={condtionOfButtonActivated ? false : true}
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
