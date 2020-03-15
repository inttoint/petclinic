import { createActions } from 'redux-actions';
import {
  ADD_USER_DETAILS,
  SUCCESS,
  FAILURE,
  FETCH_USER_DETAILS
} from '../constants';

export const {
  addUserDetails,
  addUserDetailsSuccess,
  addUserDetailsFailure,

  fetchUserDetails,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure
} = createActions(
  ADD_USER_DETAILS,
  ADD_USER_DETAILS + SUCCESS,
  ADD_USER_DETAILS + FAILURE,

  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS + SUCCESS,
  FETCH_USER_DETAILS + FAILURE
);
