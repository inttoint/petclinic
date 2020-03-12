import { createActions } from 'redux-actions';
import { ADD_USER_DETAILS, REQUEST, SUCCESS, FAILURE } from '../constants';

export const {
  addUserDetailsRequest,
  addUserDetailsSuccess,
  addUserDetailsFailure
} = createActions(
  ADD_USER_DETAILS + REQUEST,
  ADD_USER_DETAILS + SUCCESS,
  ADD_USER_DETAILS + FAILURE
);
