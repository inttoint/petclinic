import { fork } from 'redux-saga/effects';
import { authorizeStatusWatcher, signInWatcher, signOutWatcher } from './auth';

export default function*() {
  yield fork(authorizeStatusWatcher);
  yield fork(signInWatcher);
  yield fork(signOutWatcher);
}
