import React, { Component } from 'react';
import authentication from './../services/authentication';
import {withRouter} from "react-router-dom";


class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  setValuesStates(event){
     this.setState({  [event.target.name]  : event.target.value } );
  }
  
  onSubmitLogin(event) {
    event.preventDefault();

    const user = this.state.username;
    const pass = this.state.password;
    //var loggedIn = true;
    authentication.login(user, pass, (loggedIn)=> {
      console.log(loggedIn);
      if (loggedIn)
        this.props.history.push({pathname: '/welcome'});
      else
        return this.setState({ error: true });
    });
  }
  
  
  render(){
    return (
      <div className="login-block">
        <div className="col-sm-4 col-md-push-4">
          <div className="form-box">
            <div className="form-top">
                <div className="form-top-left">
                    <h3>Login to our site</h3>
                    <p>Enter username and password to log on:</p>
                </div>
                <div className="form-top-right">
                    <i className="fa fa-lock"></i>
                </div>
            </div>
            <div className="form-bottom">
                <form action="post" className="login-form">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="form-username">Username</label>
                        <input type="text" name="username" placeholder="Username..." className="form-username form-control" id="form-username" onChange ={(event) => this.setValuesStates(event)} />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="form-password">Password</label>
                        <input type="password" name="password" placeholder="Password..." className="form-password form-control" id="form-password" onChange ={(event) => this.setValuesStates(event)}/>
                    </div>
                    <button type="submit" className="btn" onClick={(event) => this.onSubmitLogin(event)}>Sign in!</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;