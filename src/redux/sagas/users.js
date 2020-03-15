import { put, call, takeLatest, takeEvery, select } from 'redux-saga/effects';
import {
  addUserDetailsFailure,
  addUserDetails,
  addUserDetailsSuccess,
  fetchUserDetails,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure
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
    // yield put(fetchUserDetailsRequest(uid));
  } catch (error) {
    yield put(addUserDetailsFailure(error));
  }
};

const fetchUserDetailsFlow = function*({ payload: uid }) {
  try {
    const usersRef = firebase.database().ref(`users/${uid}`);
    const data = yield call([usersRef, usersRef.once], 'value');
    const userDetails = yield call([data, data.val]);

    yield put(fetchUserDetailsSuccess({ ...userDetails, uid }));
  } catch (error) {
    yield put(fetchUserDetailsFailure(error));
  }
};

export const addUserDetailsWatcher = function*() {
  yield takeLatest(addUserDetails, addUserDetailsFlow);
};

export const fetchUserDetailsWatcher = function*() {
  yield takeEvery(fetchUserDetails, fetchUserDetailsFlow);
};
