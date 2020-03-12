import { createActions } from 'redux-actions';
import {
  ADD_USER_DETAILS,
  REQUEST,
  SUCCESS,
  FAILURE,
  FETCH_USER_DETAILS
} from '../constants';

export const {
  addUserDetailsRequest,
  addUserDetailsSuccess,
  addUserDetailsFailure,

  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure
} = createActions(
  ADD_USER_DETAILS + REQUEST,
  ADD_USER_DETAILS + SUCCESS,
  ADD_USER_DETAILS + FAILURE,

  FETCH_USER_DETAILS + REQUEST,
  FETCH_USER_DETAILS + SUCCESS,
  FETCH_USER_DETAILS + FAILURE
);
