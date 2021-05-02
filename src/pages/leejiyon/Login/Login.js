import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const validation = this.state.id.includes('@') && this.state.pw.length > 4;
    return (
      <div className="Login">
        <main className="LoginBox">
          <h1 className="title">Westagram</h1>
          <div className="login">
            <input
              className="loginInputs loginId"
              name="id"
              value={this.state.id}
              onChange={this.onChangeInput}
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="loginInputs loginPw"
              name="pw"
              value={this.state.pw}
              onChange={this.onChangeInput}
              type="password"
              placeholder="비밀번호"
            />
          </div>

          <Link to="/mainjy">
            {validation ? (
              <button className="loginBtn blueBackgroundColor">로그인</button>
            ) : (
              <button className="loginBtn ">로그인</button>
            )}
          </Link>
          <a
            className="findPw"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </main>
      </div>
    );
  }
}

export default Login;
