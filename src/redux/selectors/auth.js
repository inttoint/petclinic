import { moduleName } from '../reducers/auth';

export const isUserAuthorizedSelector = state => state[moduleName].isAuthorized;
export const authLoadingSelector = state => state[moduleName].isLoading;
export const getLoginCredentials = state => state[moduleName].loginCredentials;
