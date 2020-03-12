import { fork } from 'redux-saga/effects';
import {
  authorizeStatusWatcher,
  signInWatcher,
  signOutWatcher,
  signUpWatcher
} from './auth';
import { addUserDetailsWatcher } from './users';

export default function*() {
  yield fork(authorizeStatusWatcher);
  yield fork(signInWatcher);
  yield fork(signUpWatcher);
  yield fork(signOutWatcher);

  yield fork(addUserDetailsWatcher);
}
