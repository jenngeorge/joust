import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

import App from './app/app';
import Header from './header/header';
import Welcome from './welcome/welcome';
import Home from './app/home';
import UserDetailContainer from './users/user_detail_container';
import SessionFormContainer from './session/session_form_container';


const Root = ({store}) => {


  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <Route path="/signin" component={SessionFormContainer}/>
        <Route path="/signup" component={SessionFormContainer}/>
        <IndexRoute component={Welcome} />
        <Route path ="/home" component={Home} onEnter={_ensureSignedIn}>
          <Route path="/users/:userId" component={UserDetailContainer} />
        </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
