import { Record } from 'immutable';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { signInUserRequest, signInUserSuccess } from '../ac';

const UserRecord = Record({
  uid: null,
  email: null,
  firstName: null,
  lastName: null
});

const ReducerRecord = Record({
  user: null,
  isLoading: false,
  isLoaded: false,
  error: null
});

const actions = {
  [signInUserRequest]: state => state.set('isLoading', true),

  [signInUserSuccess]: (state, action) =>
    state.set('user', new UserRecord(action.payload))
};

export default handleActions(actions, new ReducerRecord());
