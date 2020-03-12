import { put, call, takeLatest, select } from 'redux-saga/effects';
import {
  addUserDetailsFailure,
  addUserDetailsRequest,
  addUserDetailsSuccess
} from '../ac';
import { loginCredentialsSelector } from '../selectors';
import { filterFalsyValues } from '../utils';

import * as firebase from 'firebase/app';
import 'firebase/database';

const addUserDetailsFlow = function*(action) {
  const { uid } = yield select(loginCredentialsSelector);
  const user = filterFalsyValues(action.payload);

  try {
    const usersRef = firebase.database().ref(`/users/${uid}`);
    yield call([usersRef, usersRef.update], user);

    yield put(addUserDetailsSuccess({ uid, user }));
  } catch (error) {
    yield put(addUserDetailsFailure(error));
  }
};

export const addUserDetailsWatcher = function*() {
  yield takeLatest(addUserDetailsRequest, addUserDetailsFlow);
};
