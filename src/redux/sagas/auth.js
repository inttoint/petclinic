import { put, take, call, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { replace } from 'connected-react-router';
import {
  signInUserFailure,
  signInUserRequest,
  signInUserSuccess,
  signOutUserRequest
} from '../ac';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const fbAuth = firebase.auth();

export const signInFlow = function*() {
  while (true) {
    try {
      const {
        payload: { email, password }
      } = yield take(signInUserRequest);

      const s = yield call(
        [fbAuth, fbAuth.signInWithEmailAndPassword],
        email,
        password
      );

      console.log(s);

      yield put(replace('/'));
    } catch (error) {
      yield put(signInUserFailure(error));
    }
  }
};

export const signUpFlow = function*() {};

export const logoutFlow = function*() {};

export const authorizeStatusWatcher = function*() {
  const channel = yield call(createAuthChannel);

  while (true) {
    const { user } = yield take(channel);

    if (user) {
      yield put(signInUserSuccess(user));
    } else {
      yield put(signOutUserRequest());
    }
  }
};

const createAuthChannel = () =>
  eventChannel(emitter => fbAuth.onAuthStateChanged(user => emitter({ user })));
