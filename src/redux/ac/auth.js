import { createActions } from 'redux-actions';
import {
  REQUEST,
  SIGN_OUT_USER,
  SIGN_IN_USER,
  SUCCESS,
  FAILURE
} from '../constants';

export const {
  signInUserRequest,
  signInUserSuccess,
  signInUserFailure,
  signOutUserRequest
} = createActions(
  SIGN_IN_USER + REQUEST,
  SIGN_IN_USER + SUCCESS,
  SIGN_IN_USER + FAILURE,

  SIGN_OUT_USER + REQUEST
);
