import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-in" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
