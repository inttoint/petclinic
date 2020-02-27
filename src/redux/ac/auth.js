import { createActions } from 'redux-actions';
import { REQUEST, SIGN_IN_USER, SUCCESS, FAILURE } from '../constants';

export const {
  signInUserRequest,
  signInUserSuccess,
  signInUserFailure
} = createActions(
  SIGN_IN_USER + REQUEST,
  SIGN_IN_USER + SUCCESS,
  SIGN_IN_USER + FAILURE
);
