import React from 'react';
import logo from './logo.svg';
import {
  Redirect, Route, RouteProps, RouterProps, Switch, useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import HomeAuth from './pages/HomeAuth';
import MycardPage from './pages/MycardPage';
import EnterNamePage from './pages/EnterNamePage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/enterName' component={EnterNamePage} />
      <Route exact path='/HomeAuth' component={HomeAuth} />
      <Route exact path='/HomeAuth/mycard' component={MycardPage} />
    </Switch>
  );
}

export default App;
