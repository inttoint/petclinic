import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './firebase';
import store from './redux/store';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
