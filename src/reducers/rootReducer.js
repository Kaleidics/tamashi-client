import { combineReducers } from 'redux';

import reduceSignUp from './authReducers/reduceSignUp';
import reduceAuthStatus from './authReducers/reduceAuthStatus';
import reduceVerifyToken from './authReducers/reduceVerifyToken';

import reduceUniversalMessage from './notificationReducers/reduceUniversalMessage'

const rootReducer = combineReducers({
  reduceSignUp,
  reduceAuthStatus,
  reduceVerifyToken,
  //
  reduceUniversalMessage
});

export default rootReducer;