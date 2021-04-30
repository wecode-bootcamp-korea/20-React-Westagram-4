import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginOJ extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleIdInput = e => {
    this.setState({ id: e.target.value });
  };

  handlePwInput = e => {
    this.setState({ pw: e.target.value });
  };

  render() {
    const { id, pw } = this.state;
    console.log(id, pw);
    return (
      <div className="loginoj">
        <h1>westargram</h1>
        <input
          className="inputID"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={id}
          onChange={this.handleIdInput}
        />
        <input
          className="inputPW"
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={this.handlePwInput}
        />
        <Link to="/mainoj">
          <button className="loginBtn btnPassiveColor">로그인</button>
        </Link>
        <span> 비밀번호를 잊으셨나요? </span>
      </div>
    );
  }
}

export default LoginOJ;
