import { moduleName } from '../reducers/auth';

export const isUserAuthorizedSelector = state => state[moduleName].isAuthorized;
