import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Modal from 'react-modal';

import Root from './components/root';

//testing
import * as APIUtil from './util/user_api_util';
import * as SessionUtil from './util/session_api_util';
import {fetchCurrentUser, signout, signup, signin} from './actions/session_actions';
import * as Actions from './actions/user_actions';

import * as ChallengeActions from './actions/challenge_actions';
import * as GoalActions from './actions/goal_actions';

document.addEventListener("DOMContentLoaded", ()=> {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);

  //testing
  window.store = store;
  window.fetchUser = APIUtil.fetchUser;
  window.fetchUsers = APIUtil.fetchUsers;

  window.signin = signin;
  window.signup = signup;
  window.signout = signout;

  window.fetchUsersAction = Actions.fetchUsers;
  window.fetchUserAction = Actions.fetchUser;

  window.createChallenge = ChallengeActions.createChallenge;
  window.fetchChallenge = ChallengeActions.fetchChallenge;
  window.fetchChallenges = ChallengeActions.fetchChallenges;
  window.deleteChallenge = ChallengeActions.deleteChallenge;

  window.createGoal = GoalActions.createGoal;
  window.fetchGoal = GoalActions.fetchGoal;
  window.fetchGoals = GoalActions.fetchGoals;
  window.deleteGoal = GoalActions.deleteGoal;
});

// signup({user: {email: "testtest2@email.com", password: "password", password_confirmation: "password"}}).then(response => console.log(response))

// signin({user: {email: "testtest2@email.com", password: "password", remember_me: 1}}).then(response => console.log(response))
