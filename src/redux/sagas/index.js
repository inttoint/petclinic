import { fork } from 'redux-saga/effects';
import { authorizeStatusWatcher, signInFlow } from './auth';

export default function*() {
  yield fork(authorizeStatusWatcher);
  yield fork(signInFlow);
}
