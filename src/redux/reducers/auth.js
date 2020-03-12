import { Record } from 'immutable';
import { combineActions, handleActions } from 'redux-actions';
import {
  signInUserFailure,
  signInUserRequest,
  signInUserSuccess,
  signUpUserRequest,
  signUpUserSuccess,
  signUpUserFailure,
  signOutUserSuccess
} from '../ac';

const CredentialsRecord = Record({
  uid: null,
  email: null
});

const ReducerRecord = Record({
  loginCredentials: null,
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
      .set('loginCredentials', new CredentialsRecord(action.payload))
      .set('isAuthorized', true)
      .set('isLoading', false),

  [combineActions(signInUserFailure, signUpUserFailure)]: (state, action) =>
    state.set('isLoading', false).set('error', action.payload),

  [signUpUserRequest]: state => state.set('isLoading', true).set('error', null),

  [signUpUserSuccess]: state => state.set('isLoading', false),

  [signOutUserSuccess]: () => new ReducerRecord()
};

export default handleActions(actions, new ReducerRecord());
