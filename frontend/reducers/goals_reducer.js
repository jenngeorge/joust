import {RECEIVE_GOAL,
        RECEIVE_GOALS,
        REMOVE_GOAL} from '../actions/goal_actions';
import {merge, omit} from 'lodash';

const GoalsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_GOAL:
      return merge({}, state, {[action.goal.id]: action.goal});
    case RECEIVE_GOALS:
      return action.goals;
    case REMOVE_GOAL:
      return omit(state, action.goalId);
    default:
      return state;
  }
};


export default GoalsReducer;
