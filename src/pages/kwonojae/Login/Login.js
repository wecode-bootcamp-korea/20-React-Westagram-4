import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginOJ extends React.Component {
  // hoc를 사용한 Router구현
  goToMain = () => {
    this.props.history.push('/mainoj');
    // console.log(this.props);
  };

  render() {
    return (
      <div className="login">
        <h1>westargram</h1>
        <input
          className="inputID"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="inputPW" type="password" placeholder="비밀번호" />
        <button className="loginBtn btnPassiveColor" onClick={this.goToMain}>
          로그인
        </button>
        {/* 링크를 사용한 구현 */}
        {/* <Link to="/main">
        <button className="loginBtn btnPassiveColor">로그인</button>
        </Link> */}
        <span> 비밀번호를 잊으셨나요? </span>
      </div>
    );
  }
}

export default LoginOJ;
// export default withRouter(Login);
