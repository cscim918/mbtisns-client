import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../routes/Login';
import Main from '../routes/Main';
import SignUp from '../routes/SignUp';

const AppPresenter = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login}></Route>
        <Route path="/logged-in" component={Main}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppPresenter;
