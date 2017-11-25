import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './../pages/login';
import Welcome from './../pages/welcome';
import Home from './../pages/home';

import Topnav from './../components/topnav';

class Header extends Component{
  render(){
    return (
      <div>
        <Router>
      <div className="mid-block">
       <Topnav/>
       <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/welcome' component={Welcome} />
                <Route path='/login' component={Login} />
            </Switch>
      
          </div>
        </Router>
      </div>
    )
  }
}

export default Header;