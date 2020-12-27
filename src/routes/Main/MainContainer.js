import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../../queries/queries';
import MainPresenter from './MainPresenter';

const MainContainer = (props) => {
  console.log(props);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const { data: getUserData, loading: getUserLoading, error: getUserError } = useQuery(GET_USER, {
    variables: { id: 1 },
  });

  const onLogOutButtonClick = () => {
    return props.history.goBack();
  };

  if (getUserLoading || getUserError) return <div>loading...</div>;

  if (getUserData.getUser.ok) {
    const { user: getUserProfile } = getUserData.getUser;
    if (!isUpdated) {
      setIsUpdated(true);
      setFirstName(getUserProfile.firstName);
      setLastName(getUserProfile.lastName);
    }
  }

  return (
    <MainPresenter
      onLogOutButtonClick={onLogOutButtonClick}
      firstName={firstName}
      lastName={lastName}
    ></MainPresenter>
  );
};

export default MainContainer;
