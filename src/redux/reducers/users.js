import { OrderedMap, Record } from 'immutable';
import { combineActions, handleActions } from 'redux-actions';
import {
  addUserDetailsRequest,
  addUserDetailsSuccess,
  addUserDetailsFailure,
  fetchUserDetailsRequest,
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

const actions = {
  [addUserDetailsRequest]: state =>
    state.set('isLoading', true).set('isLoaded', false),
  [addUserDetailsSuccess]: (state, { payload: { uid, user } }) =>
    state
      .updateIn(['entities', uid], record => record.concat(user))
      .set('isLoading', false),

  [fetchUserDetailsRequest]: state => state.set('isLoading', true),
  [fetchUserDetailsSuccess]: (state, { payload }) =>
    state
      .set('isLoading', false)
      .set('isLoaded', true)
      .mergeIn(['entities', payload.uid], new UserRecord(payload)),

  [combineActions(addUserDetailsFailure, fetchUserDetailsFailure)]: (
    state,
    { payload }
  ) => state.set('isLoading', false).set('error', payload),

  [signOutUserSuccess]: () => new ReducerRecord()
};

export default handleActions(actions, new ReducerRecord());
