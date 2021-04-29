import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <main className="LoginBox">
          <h1 className="title">Westagram</h1>
          <div className="login">
            <input
              class="loginInputs loginId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              class="loginInputs loginPw"
              type="password"
              placeholder="비밀번호"
            />
          </div>

          <Link to="/mainjy">
            <button className="loginBtn">로그인</button>
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
