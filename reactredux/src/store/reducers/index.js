import { combineReducers } from 'redux';

import homePageReducer from './homePageReducer';
import userDetailsReduces from './userDetailsReduces';

export default combineReducers({
  homePageReducer,
  userDetailsReduces
});
