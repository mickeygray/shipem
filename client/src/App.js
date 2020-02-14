import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import CallState from './context/call/CallState';
import LeadState from './context/Lead/LeadState';
import './App.css';
import ShipEm from './components/pages/ShipEm';
import Stacks from './components/pages/Stacks';
import Popkis from './components/pages/Popkis';


const App = () => {
  return (
    <AuthState> 
       <CallState> 
       <LeadState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
          
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <PrivateRoute exact path='/shipem' component={ShipEm} />
                  <PrivateRoute exact path='/stacks' component={Stacks} />
                  <PrivateRoute exact path='/leads/:id' component={Popkis}  />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
             
            </Fragment>
          </Router>
         </AlertState>   
         </LeadState>
       </CallState>
      </AuthState>
  );
};

export default App;
