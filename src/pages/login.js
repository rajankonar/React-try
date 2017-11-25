import React, { Component } from 'react';

class Login extends Component{
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
                <form role="form" action="" method="post" className="login-form">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="form-username">Username</label>
                        <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="form-password">Password</label>
                        <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password" />
                    </div>
                    <button type="submit" className="btn">Sign in!</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;