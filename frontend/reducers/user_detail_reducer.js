import {
  RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const UserDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};


export default UserDetailReducer;
