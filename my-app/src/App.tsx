import React from 'react';
import logo from './logo.svg';
import {
  Redirect, Route, RouteProps, RouterProps, Switch, useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import HomeAuth from './pages/HomeAuth';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/HomeAuth' component={HomeAuth} />
    </Switch>
  );
}

export default App;
