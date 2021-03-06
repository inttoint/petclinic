import { OrderedMap, Record } from 'immutable';
import { combineActions, handleActions } from 'redux-actions';
import {
  addUserDetails,
  addUserDetailsSuccess,
  addUserDetailsFailure,
  fetchUserDetails,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
  signOutUserSuccess
} from '../ac';

const UserRecord = Record({
  uid: null,
  firstName: null,
  lastName: null,
  middleName: null,
  phone: null,
  registrationDate: null
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  isLoading: false,
  isLoaded: false,
  error: null
});

export const moduleName = 'users';

const handlers = {
  [addUserDetails]: state =>
    state.set('isLoading', true).set('isLoaded', false),
  [addUserDetailsSuccess]: (state, { payload: { uid, user } }) =>
    state
      .updateIn(['entities', uid], record => record.concat(user))
      .set('isLoading', false),

  [fetchUserDetails]: state => state.set('isLoading', true),
  [fetchUserDetailsSuccess]: (state, { payload }) =>
    state
      .set('isLoading', false)
      .set('isLoaded', true)
      .mergeIn(['entities', payload.uid], new UserRecord(payload)),

  [combineActions(addUserDetailsFailure, fetchUserDetailsFailure)]: (
    state,
    { payload }
  ) =>
    state
      .set('error', payload)
      .set('isLoading', false)
      .set('isLoaded', true),

  [signOutUserSuccess]: () => new ReducerRecord()
};

export default handleActions(handlers, new ReducerRecord());
