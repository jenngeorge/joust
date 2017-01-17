import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

//testing
import * as APIUtil from './util/user_api_util';
import {fetchCurrentUser} from './actions/session_actions';
import * as Actions from './actions/user_actions';

document.addEventListener("DOMContentLoaded", ()=> {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  //testing
  window.store = store;
  window.fetchUser = APIUtil.fetchUser;
  window.fetchUsers = APIUtil.fetchUsers;
  window.fetchUsersAction = Actions.fetchUsers;
  window.fetchUserAction = Actions.fetchUser;
});
