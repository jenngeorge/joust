import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import UserDetailReducer from './user_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  userDetail: UserDetailReducer
});

export default RootReducer;
