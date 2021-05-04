import React from 'react';
import './Login.scss';
import './common.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/mainsm');
  };

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      buttonColor: false,
    };
  }
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
    const condtionOfButton = id.includes('@') && password.length >= 5;
    return (
      <>
        <div class="container">
          <header className="westaLogo">westagram</header>
          <input
            type="text"
            className="input_login"
            name="userID"
            id="userID"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            required
            onChange={this.handleIdPwInput}
          />
          <input
            type="password"
            className="input_login"
            name="userPW"
            id="userPW"
            placeholder="비밀번호"
            required
            onChange={this.handleIdPwInput}
          />
          <button
            className={buttonColor ? 'ButtonActive' : 'ButtonDeactive'}
            type="submit"
            onClick={this.goToMain}
            disabled={condtionOfButton ? false : true}
          >
            로그인
          </button>
          <span className="button_forgot">비밀번호를 잊으셨나요?</span>
        </div>
        ;
      </>
    );
  }
}

export default Login;
