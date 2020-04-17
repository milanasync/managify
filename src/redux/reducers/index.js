import {combineReducers} from 'redux';

import appReducers from './app/appReducers';
import eventReducers from './events/eventReducers';
import membersReducers from './members/membersReducers';

export default combineReducers({
  appReducers,
  eventReducers,
  membersReducers,
});
