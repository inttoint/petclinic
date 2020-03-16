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
  fetchUserDetails,
  signInUserFailure,
  signInUser,
  signInUserSuccess,
  signOutUser,
  signOutUserSuccess,
  signUpUserFailure,
  signUpUser,
  signUpUserSuccess
} from '../ac';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { isUserAuthorizedSelector } from '../selectors';

const fbAuth = firebase.auth();

const signInFlow = function*(action) {
  try {
    const { email, password } = action.payload;

    const {
      user: { uid }
    } = yield call(
      [fbAuth, fbAuth.signInWithEmailAndPassword],
      email,
      password
    );
    console.log(uid);
    yield put(replace(`/users/${uid}`));
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
      yield put(fetchUserDetails(user.uid));
    } else {
      if (yield select(isUserAuthorizedSelector)) {
        yield put(signOutUserSuccess());
        yield put(replace('/auth/sign-in'));
      }
    }
  }
};

export const signInWatcher = function*() {
  yield takeLatest(signInUser, signInFlow);
};

export const signUpWatcher = function*() {
  yield takeLatest(signUpUser, signUpFlow);
};

export const signOutWatcher = function*() {
  yield takeEvery(signOutUser, signOutFlow);
};

const createAuthChannel = () =>
  eventChannel(emitter => fbAuth.onAuthStateChanged(user => emitter({ user })));
