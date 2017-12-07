import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import {withRouter} from "react-router-dom";
import Login from './../pages/login';
import Welcome from './../pages/welcome';
import Home from './../pages/home';
import Signup from './../pages/signup';
import Logout from './../pages/logout';

import Topnav from './../components/topnav';

import authentication from './../services/authentication';
var eventManager = require('../services/event_manager');

function checkAuth(props) {
  const promise = authentication.isAuthenticated();
  promise.then(function(resp) {
    console.log(resp);
    eventManager.getEmitter().emit(eventManager.authChannel, true);
    //cb();
  }).catch(function(err) {
    eventManager.getEmitter().emit(eventManager.authChannel, false);
   /* replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });*/

    props.history.push({pathname: '/login'});
    //cb();
  });
}

class Layout extends Component{
  
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <Router>
        <div className="mid-block">
          <Topnav/>
          <div className="container-fluid">
            <Switch>
              <Route exact path='/'   render={(props) => {
                  checkAuth(props);
                  return <Home />;
              }} />
              <Route path='/welcome' component={Welcome} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/logout' component={Logout}  />
            </Switch>
          </div>
        </div>
      </Router>
      </div>
    )
  }
}

export default Layout;