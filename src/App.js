import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import Home from 'pages/home'

var hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/landing-page"  />
      <Route path="/profile-page"  />
      <Route path="/login-page"  />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
