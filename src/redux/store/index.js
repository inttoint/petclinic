import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import reducer from '../reducers';
import history from '../../history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(routerMiddleware(history), sagaMiddleware);

const store = createStore(reducer, composeWithDevTools(enhancer));

sagaMiddleware.run(rootSaga);

//dev only
window.store = store;

export default store;
