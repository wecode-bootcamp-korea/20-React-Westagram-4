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

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validation = () => {
    const { id, pw } = this.state;
    const isValidId = id.includes('@');
    const isValidPw = pw.length > 4;
    return isValidId && isValidPw;
  };

  render() {
    const { id, pw } = this.state;

    return (
      <div className="loginoj">
        <h1>westargram</h1>
        <input
          className="inputID"
          name="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={id}
          onChange={this.handleInput}
        />
        <input
          className="inputPW"
          name="pw"
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={this.handleInput}
        />
        <Link to="/mainoj">
          <button
            className={`loginBtn ${
              this.validation() ? 'btnActiveColor' : 'btnPassiveColor'
            }`}
            disabled={!this.validation() ? 'disabled' : ''}
          >
            로그인
          </button>
        </Link>
        <span> 비밀번호를 잊으셨나요? </span>
      </div>
    );
  }
}

export default LoginOJ;
