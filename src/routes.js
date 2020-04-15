import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './auth';

import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout.js';
import Register from './pages/Register';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <PrivateRoute path='/admin' component={Dashboard} />
      <Route exact path='/logout' component={Logout} />
      <Route exact path='/cadastro' component={Register} />
    </Switch>  
  </Router>
);

export default Routes;