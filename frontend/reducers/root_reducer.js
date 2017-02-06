import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import UserDetailReducer from './user_detail_reducer';
import ChallengesReducer from './challenges_reducer';
import GoalsReducer from './goals_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  userDetail: UserDetailReducer,
  challenges: ChallengesReducer,
  goals: GoalsReducer
});

export default RootReducer;
