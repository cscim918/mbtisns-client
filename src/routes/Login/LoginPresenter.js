import React from 'react';

const LoginPresenter = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>MBTI SNS</p>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => props.setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => props.setPassword(e.target.value)}
        ></input>
        <button
          style={{ backgroundColor: 'deepskyblue', color: 'white', borderRadius: 5 }}
          onClick={() => props.onLogInButtonClick()}
        >
          로그인
        </button>
        <button
          style={{ backgroundColor: 'deepskyblue', color: 'white', borderRadius: 5 }}
          onClick={() => props.onSignUpButtonClick()}
        >
          회원가입
        </button>
      </header>
    </div>
  );
};

export default LoginPresenter;
