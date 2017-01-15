import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

//testing
import * as APIUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", ()=> {
  // const store = configureStore();
  // window.store = store;
  window.login = APIUtil.login;
  window.signin = APIUtil.signin;
  window.logout = APIUtil.logout;

  const root = document.getElementById('root');
  // ReactDOM.render(<Root store={store}/>, root);
  ReactDOM.render(<div>Welcome to Joust</div>, root);
});
