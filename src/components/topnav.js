import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Topnav extends Component{
  render(){
    return (
        <nav className="navbar navbar-default navbar-fixed-top">

          <div className="container-fluid">
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">OnBoarding</a>
            </div>

            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><Link to={'/'}>Home</Link></li>
                <li><Link to={'/welcome'}>Welcome</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/signup'}>Sign Up</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li><Link to={'/logout'}>logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>

    )
  }
}

export default Topnav;