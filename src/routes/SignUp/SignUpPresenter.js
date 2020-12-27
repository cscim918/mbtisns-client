import React from 'react';

const SignUpPresenter = (props) => {
  return (
    <div>
      <header>
        <p>MBTI SNS</p>
        <form onSubmit={(e) => props.handleSubmit()}>
          <input
            onChange={(e) => props.setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <br />
          <input
            onChange={(e) => props.setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <br />
          <input
            onChange={(e) => props.setFirstName(e.target.value)}
            type="firstName"
            placeholder="firstName"
          />
          <br />
          <input
            onChange={(e) => props.setLastName(e.target.value)}
            type="lastName"
            placeholder="lastName"
          />
          <br />
          <input
            onChange={(e) => props.setPhoneNumber(e.target.value)}
            type="phoneNumber"
            placeholder="phoneNumber"
          />
          <br />
          <input
            onChange={(e) => props.setGender(e.target.value)}
            type="gender"
            placeholder="gender"
          />
          <br />
          <input
            onChange={(e) => props.setProfileImg(e.target.value)}
            type="profileImg"
            placeholder="profileImg"
          />
          <br />
          <input
            onChange={(e) => props.setNickname(e.target.value)}
            type="nickname"
            placeholder="nickname"
          />
          <br />
          <input
            onChange={(e) => props.setMbtiType(e.target.value)}
            type="mbtiType"
            placeholder="mbtiType"
          />
          <br />
          <br />
          <button
            style={{ backgroundColor: 'deepskyblue', color: 'white', borderRadius: 5 }}
            type="submit"
          >
            회원가입
          </button>
          <button
            style={{ backgroundColor: 'deepskyblue', color: 'white', borderRadius: 5 }}
            onClick={() => props.onGoBackButtonClick()}
          >
            뒤로가기
          </button>
        </form>
      </header>
    </div>
  );
};

export default SignUpPresenter;
