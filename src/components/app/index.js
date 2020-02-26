import React from 'react';
import Header from './header';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
      <p>App component here</p>
    </div>
  );
}

export default App;
