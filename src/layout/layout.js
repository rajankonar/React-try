import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import Login from './../pages/login';
import Welcome from './../pages/welcome';
import Home from './../pages/home';
import Signup from './../pages/signup';

import Topnav from './../components/topnav';

class Layout extends Component{
  render(){
    return (
      <div>
        <Router>
      <div className="mid-block">
       <Topnav/>
      <div className="container-fluid">
       <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/welcome' component={Welcome} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
      
          </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Layout;