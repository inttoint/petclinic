import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducer from '../reducers';
import history from '../../history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const enhancer = applyMiddleware(routerMiddleware(history));

const store = createStore(reducer, composeWithDevTools(enhancer));

//dev only
window.store = store;

export default store;
