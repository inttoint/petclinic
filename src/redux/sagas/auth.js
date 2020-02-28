import {
  put,
  take,
  call,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { replace } from 'connected-react-router';
import {
  signInUserFailure,
  signInUserRequest,
  signInUserSuccess,
  signOutUserRequest,
  signOutUserSuccess
} from '../ac';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { isUserAuthorizedSelector } from '../selectors';

const fbAuth = firebase.auth();

const signInFlow = function*(action) {
  try {
    const {
      payload: { email, password }
    } = action;

    yield call([fbAuth, fbAuth.signInWithEmailAndPassword], email, password);

    yield put(replace('/'));
  } catch (error) {
    yield put(signInUserFailure(error));
  }
};

const signUpFlow = function*() {};

const signOutFlow = function*() {
  try {
    yield call([fbAuth, fbAuth.signOut]);
  } catch (_) {}
};

export const authorizeStatusWatcher = function*() {
  const channel = yield call(createAuthChannel);

  while (true) {
    const { user } = yield take(channel);

    if (user) {
      yield put(signInUserSuccess(user));
    } else {
      if (yield select(isUserAuthorizedSelector)) {
        yield put(signOutUserSuccess());
        yield put(replace('/sign-in'));
      }
    }
  }
};

export const signInWatcher = function*() {
  yield takeLatest(signInUserRequest, signInFlow);
};

export const signOutWatcher = function*() {
  yield takeEvery(signOutUserRequest, signOutFlow);
};

const createAuthChannel = () =>
  eventChannel(emitter => fbAuth.onAuthStateChanged(user => emitter({ user })));
