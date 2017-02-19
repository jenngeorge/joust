import {
  RECEIVE_CHALLENGE} from '../actions/challenge_actions';
import merge from 'lodash/merge';

const ChallengeDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHALLENGE:
      return action.challenge;
    default:
      return state;
  }
};


export default ChallengeDetailReducer;
