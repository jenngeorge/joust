import * as APIUtil from '../util/challenge_api_util';
import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_CHALLENGE = "RECEIVE_CHALLENGE";
export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const REMOVE_CHALLENGE = "REMOVE_CHALLENGE";

export const createChallenge = challenge => dispatch => (
  APIUtil.createChallenge(challenge)
    .then(createdChallenge => dispatch(receiveChallenge(createdChallenge)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveChallenge = challenge => ({
  type: RECEIVE_CHALLENGE,
  challenge
});

export const fetchChallenge = challengeId => dispatch => (
  APIUtil.fetchChallenge(challengeId)
    .then(challenge => dispatch(receiveChallenge(challenge)),
      err => dispatch(receiveErrors(err.resposneJSON)))
);

export const fetchChallenges = () => dispatch => (
  APIUtil.fetchChallenges()
    .then(challenges => dispatch(receiveChallenges(challenges)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveChallenges = challenges => ({
  type: RECEIVE_CHALLENGES,
  challenges
});

export const removeChallenge = challengeId => ({
  type: REMOVE_CHALLENGE,
  challengeId
});

export const deleteChallenge = challengeId => dispatch => (
  APIUtil.deleteChallenge(challengeId)
    .then(() => dispatch(removeChallenge(challengeId))),
      err => dispatch(receiveErrors(err.responseJSON))
);
