import { createActions } from 'redux-actions';
import {
  REQUEST,
  SIGN_OUT_USER,
  SIGN_IN_USER,
  SUCCESS,
  FAILURE,
  SIGN_UP_USER
} from '../constants';

export const {
  signInUserRequest,
  signInUserSuccess,
  signInUserFailure,

  signUpUserRequest,
  signUpUserSuccess,
  signUpUserFailure,

  signOutUserRequest,
  signOutUserSuccess
} = createActions(
  SIGN_IN_USER + REQUEST,
  SIGN_IN_USER + SUCCESS,
  SIGN_IN_USER + FAILURE,

  SIGN_UP_USER + REQUEST,
  SIGN_UP_USER + SUCCESS,
  SIGN_UP_USER + FAILURE,

  SIGN_OUT_USER + REQUEST,
  SIGN_OUT_USER + SUCCESS
);
