import {RECEIVE_CHALLENGE,
        RECEIVE_CHALLENGES,
        REMOVE_CHALLENGE} from '../actions/challenge_actions';
import { merge, omit} from 'lodash';

const ChallengesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHALLENGE:
      return merge({}, state, {[action.challenge.id]: action.challenge});
    case RECEIVE_CHALLENGES:
      return action.challenges;
    case REMOVE_CHALLENGE:
      // let newState = merge({}, state)
      return omit(state, action.challengeId);
    default:
      return state;
  }
};


export default ChallengesReducer;
