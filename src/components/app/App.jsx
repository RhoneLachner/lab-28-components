import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import NewsSearch from '../app/containers/NewsSearch';

export default function App() {
  return (
    <>
      <h1>Welcome to the Home Page!</h1>
      <div className="main">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component = { NewsSearch }
            />
          </Switch>
        </Router>
      </div>
    </>
  );
}
