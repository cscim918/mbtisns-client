import React from 'react';

const MainPresenter = (props) => {
  return (
    <div className="App">
      {`${props.lastName} ${props.firstName}`}
      <br />
      <button onClick={() => props.onLogOutButtonClick()}>로그아웃</button>
    </div>
  );
};

export default MainPresenter;
