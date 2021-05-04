import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export default class LoginOJ extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  validation = () => {
    const { id, pw } = this.state;

    return id.includes('@') && pw.length > 4;
  };

  render() {
    const { id, pw } = this.state;
    return (
      <div className="loginOJ">
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
            disabled={!this.validation()}
          >
            로그인
          </button>
        </Link>
        <span> 비밀번호를 잊으셨나요? </span>
      </div>
    );
  }
}
