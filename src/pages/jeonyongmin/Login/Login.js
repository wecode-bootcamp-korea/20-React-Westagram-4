import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
  }

  goToMain = e => {
    this.props.history.push('./mainym');
  };

  handleIdPwInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { id, password } = this.state;
    const condtionOfButtonActivated = id.includes('@') && password.length >= 5;
    return (
      <main className="loginYM">
        <div className="loginPage">
          <h1 className="loginTitle">Westagram</h1>
          <div className="loginContents">
            <form action="#" method="get" className="loginInformation">
              <input
                className="loginInputId input"
                type="text"
                name="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                required
                onChange={this.handleIdPwInput}
              />
              <input
                className="loginInputPassword input"
                type="password"
                name="password"
                placeholder="비밀번호"
                required
                onChange={this.handleIdPwInput}
              />
              <button
                className={
                  condtionOfButtonActivated
                    ? 'loginButtonActive'
                    : 'loginButtonDeactive'
                }
                type="submit"
                onClick={this.goToMain}
                disabled={!condtionOfButtonActivated}
              >
                로그인
              </button>
            </form>
          </div>
          <Link
            to="https://www.instagram.com/accounts/password/reset/"
            className="loginFindPassword"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
