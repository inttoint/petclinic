import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer, { moduleName as auth } from './auth';
import usersReducer, { moduleName as users } from './users';
import petsReducer, { moduleName as pets } from './pets';
import history from '../../history';

export default combineReducers({
  router: connectRouter(history),
  [auth]: authReducer,
  [users]: usersReducer,
  [pets]: petsReducer
});
