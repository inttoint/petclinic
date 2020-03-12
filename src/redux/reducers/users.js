import { OrderedMap, Record } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  addUserDetailsRequest,
  addUserDetailsSuccess,
  addUserDetailsFailure
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
  [addUserDetailsRequest]: state => state.set('isLoading', true),
  [addUserDetailsSuccess]: (state, { payload: { uid, user } }) =>
    state
      .setIn(['entities', uid], new UserRecord({ ...user, uid }))
      .set('isLoading', false),
  [addUserDetailsFailure]: (state, { payload }) =>
    state.set('isLoading', false).set('error', payload)
};

export default handleActions(actions, new ReducerRecord());
