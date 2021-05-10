import React from 'react';
import { withRouter } from 'react-router-dom';
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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onClickLoginBtn = () => {
    fetch('http:/10.58.7.181:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/mainjy');
          localStorage.setItem('access-token', result.ACCESS_TOKEN);
        }
      });
  };

  render() {
    const validation = this.state.id.includes('@') && this.state.pw.length > 4;
    return (
      <div className="LoginJY">
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
          <button
            className={`loginBtn ${validation ? 'blueBackgroundColor' : null}`}
            onClick={this.onClickLoginBtn}
          >
            로그인
          </button>
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

export default withRouter(Login);
