import React, { useState } from 'react';
import SignUpPresenter from './SignUpPresenter';

import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../queries/queries';

const SignUpContainer = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [nickname, setNickname] = useState('');
  const [mbtiType, setMbtiType] = useState('');

  const [signUp, { loading, error }] = useMutation(SIGN_UP);

  const handleSubmit = () => {
    signUp({
      varialbes: {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        gender,
        profileImg,
        nickname,
        mbtiType,
      },
    });
  };

  const onGoBackButtonClick = () => {
    return props.history.push('/');
  };

  return (
    <SignUpPresenter
      handleSubmit={handleSubmit}
      onGoBackButtonClick={onGoBackButtonClick}
      email={email}
      setEmail={setEmail}
      setPassword={setPassword}
      password={password}
      setFirstName={setFirstName}
      firstName={firstName}
      setLastName={setLastName}
      lastName={lastName}
      setPhoneNumber={setPhoneNumber}
      phoneNumber={phoneNumber}
      setGender={setGender}
      gender={gender}
      setProfileImg={setProfileImg}
      profileImg={profileImg}
      setNickname={setNickname}
      nickname={nickname}
      setMbtiType={setMbtiType}
      mbtiType={mbtiType}
    ></SignUpPresenter>
  );
};

export default SignUpContainer;
