import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import history from '../../history';

export default combineReducers({
  router: connectRouter(history),
  auth
});
