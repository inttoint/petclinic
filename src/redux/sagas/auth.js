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
  signOutUserSuccess,
  signUpUserFailure,
  signUpUserRequest,
  signUpUserSuccess
} from '../ac';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { isUserAuthorizedSelector } from '../selectors';

const fbAuth = firebase.auth();

const signInFlow = function*(action) {
  try {
    const { email, password } = action.payload;

    yield call([fbAuth, fbAuth.signInWithEmailAndPassword], email, password);

    yield put(replace('/profile'));
  } catch (error) {
    yield put(signInUserFailure(error));
  }
};

const signUpFlow = function*(action) {
  try {
    const { firstName, lastName, email, password } = action.payload;

    yield call(
      [fbAuth, fbAuth.createUserWithEmailAndPassword],
      email,
      password
    );

    yield put(signUpUserSuccess({ firstName, lastName, email }));
  } catch (error) {
    yield put(signUpUserFailure(error));
  }
};

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
        yield put(replace('/auth/sign-in'));
      }
    }
  }
};

export const signInWatcher = function*() {
  yield takeLatest(signInUserRequest, signInFlow);
};

export const signUpWatcher = function*() {
  yield takeLatest(signUpUserRequest, signUpFlow);
};

export const signOutWatcher = function*() {
  yield takeEvery(signOutUserRequest, signOutFlow);
};

const createAuthChannel = () =>
  eventChannel(emitter => fbAuth.onAuthStateChanged(user => emitter({ user })));

// const profile = {
//   displayName: firstName
// };
// const a = yield call(
//   [fbAuth.currentUser, fbAuth.currentUser.updateProfile],
//   profile
// );
//
// console.log(fbAuth.currentUser);
