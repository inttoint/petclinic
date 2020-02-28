import { Record } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  signInUserFailure,
  signInUserRequest,
  signInUserSuccess,
  signOutUserSuccess
} from '../ac';

const UserRecord = Record({
  uid: null,
  email: null,
  firstName: null,
  lastName: null
});

const ReducerRecord = Record({
  user: null,
  isAuthorized: false,
  isLoading: false,
  isLoaded: false,
  error: null
});

export const moduleName = 'auth';

const actions = {
  [signInUserRequest]: state => state.set('isLoading', true).set('error', null),

  [signInUserSuccess]: (state, action) =>
    state
      .set('user', new UserRecord(action.payload))
      .set('isAuthorized', true)
      .set('isLoading', false),

  [signInUserFailure]: (state, action) =>
    state.set('isLoading', false).set('error', action.payload),

  [signOutUserSuccess]: () => new ReducerRecord()
};

export default handleActions(actions, new ReducerRecord());
