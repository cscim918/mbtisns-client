import React, { useState } from 'react';

import LoginPresenter from './LoginPresenter';

import { useMutation, useQuery } from '@apollo/client';
import { GET_USER, SIGN_IN, SIGN_UP } from '../../queries/queries';

const LoginContainer = (props) => {
  console.log(props);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

  const onLogInButtonClick = () => {
    signIn({ variables: { email: email, password: password } }).then((res) => {
      const { data } = res;
      if (data && data.signIn && data.signIn.ok) {
        props.history.push('/logged-in');
        return;
      } else {
        alert(signIn.error);
      }
    });
  };
  const onSignUpButtonClick = () => {
    props.history.push('/sign-up');
    return;
  };

  return (
    <LoginPresenter
      setEmail={setEmail}
      setPassword={setPassword}
      onLogInButtonClick={onLogInButtonClick}
      onSignUpButtonClick={onSignUpButtonClick}
      // firstName={firstName}
      // lastName={lastName}
    ></LoginPresenter>
  );
};

export default LoginContainer;
