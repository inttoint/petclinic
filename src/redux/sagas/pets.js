import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchPetsByOwner, fetchPetsByOwnerSuccess } from '../ac';

import * as firebase from 'firebase/app';
import 'firebase/database';

const fetchPetsByOwnerFlow = function*({ payload: userUid }) {
  const usersRef = firebase.database().ref(`pets`);
  const data = yield call([usersRef, usersRef.once], 'value');
  const petList = yield call([data, data.val]);
  const filtered = Object.entries(petList).reduce((acc, [key, value]) => {
    return value.ownerUid === userUid ? { ...acc, [key]: value } : acc;
  }, {});

  yield put(fetchPetsByOwnerSuccess(filtered));
};

export const fetchPetsByOwnerWatcher = function*() {
  yield takeLatest(fetchPetsByOwner, fetchPetsByOwnerFlow);
};
