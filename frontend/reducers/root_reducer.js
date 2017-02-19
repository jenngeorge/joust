import {combineReducers} from 'redux';

import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import UserDetailReducer from './user_detail_reducer';
import ChallengesReducer from './challenges_reducer';
import ChallengeDetailReducer from './challenge_detail_reducer';
import GoalsReducer from './goals_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  users: UsersReducer,
  userDetail: UserDetailReducer,
  challenges: ChallengesReducer,
  goals: GoalsReducer,
  challengeDetail: ChallengeDetailReducer
});

export default RootReducer;
