import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from 'container/Home';
export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route components="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
