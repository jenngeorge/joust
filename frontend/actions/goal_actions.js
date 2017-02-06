import * as APIUtil from '../util/goal_api_util';
import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_GOAL = "RECEIVE_GOAL";
export const RECEIVE_GOALS = "RECEIVE_GOALS";
export const REMOVE_GOAL = "REMOVE_GOAL";

export const createGoal = goal => dispatch => (
  APIUtil.createGoal(goal)
    .then(createdGoal => dispatch(receiveGoal(createdGoal)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveGoal = goal => ({
  type: RECEIVE_GOAL,
  goal
});

export const fetchGoal = goalId => dispatch => (
  APIUtil.fetchGoal(goalId)
    .then(goal => dispatch(receiveGoal(goal)),
      err => dispatch(receiveErrors(err.resposneJSON)))
);

export const fetchGoals = () => dispatch => (
  APIUtil.fetchGoals()
    .then(goals => dispatch(receiveGoals(goals)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveGoals = goals => ({
  type: RECEIVE_GOALS,
  goals
});

export const removeGoal = goalId => ({
  type: REMOVE_GOAL,
  goalId
});

export const deleteGoal = goalId => dispatch => (
  APIUtil.deleteGoal(goalId)
    .then(() => dispatch(removeGoal(goalId))),
      err => dispatch(receiveErrors(err.responseJSON))
);
