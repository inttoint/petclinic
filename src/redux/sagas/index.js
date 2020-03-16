import { fork } from 'redux-saga/effects';
import {
  authorizeStatusWatcher,
  signInWatcher,
  signOutWatcher,
  signUpWatcher
} from './auth';
import { addUserDetailsWatcher, fetchUserDetailsWatcher } from './users';
import { fetchPetsByOwnerWatcher } from './pets';

export default function*() {
  yield fork(authorizeStatusWatcher);
  yield fork(signInWatcher);
  yield fork(signUpWatcher);
  yield fork(signOutWatcher);

  yield fork(addUserDetailsWatcher);
  yield fork(fetchUserDetailsWatcher);

  yield fork(fetchPetsByOwnerWatcher);
}
