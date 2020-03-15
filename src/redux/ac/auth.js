import { createActions } from 'redux-actions';
import {
  SIGN_OUT_USER,
  SIGN_IN_USER,
  SUCCESS,
  FAILURE,
  SIGN_UP_USER
} from '../constants';

export const {
  signInUser,
  signInUserSuccess,
  signInUserFailure,

  signUpUser,
  signUpUserSuccess,
  signUpUserFailure,

  signOutUser,
  signOutUserSuccess
} = createActions(
  SIGN_IN_USER,
  SIGN_IN_USER + SUCCESS,
  SIGN_IN_USER + FAILURE,

  SIGN_UP_USER,
  SIGN_UP_USER + SUCCESS,
  SIGN_UP_USER + FAILURE,

  SIGN_OUT_USER,
  SIGN_OUT_USER + SUCCESS
);
