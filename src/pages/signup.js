import React, { Component } from 'react';

class Signup extends Component{
  render(){
    return (
      <div className="signup-block">
       <div className="col-sm-4 col-md-push-4">
          <div className="form-box">
              <div className="form-top">
                  <div className="form-top-left">
                      <h3>Sign up now</h3>
                      <p>Fill in the form below to get instant access:</p>
                  </div>
                  <div className="form-top-right">
                      <i className="fa fa-pencil"></i>
                  </div>
              </div>
              <div className="form-bottom">
                  <form role="form" action="" method="post" className="registration-form">
                      <div className="form-group">
                          <label className="sr-only" htmlFor="form-first-name">First name</label>
                          <input type="text" name="form-first-name" placeholder="First name..." className="form-first-name form-control" id="form-first-name" />
                      </div>
                      <div className="form-group">
                          <label className="sr-only" htmlFor="form-last-name">Last name</label>
                          <input type="text" name="form-last-name" placeholder="Last name..." className="form-last-name form-control" id="form-last-name" />
                      </div>
                      <div className="form-group">
                          <label className="sr-only" htmlFor="form-email">Email</label>
                          <input type="text" name="form-email" placeholder="Email..." className="form-email form-control" id="form-email" />
                      </div>
                      <div className="form-group">
                          <label className="sr-only" htmlFor="form-about-yourself">About yourself</label>
                          <textarea name="form-about-yourself" placeholder="About yourself..." 
                                      className="form-about-yourself form-control" id="form-about-yourself"></textarea>
                      </div>
                      <button type="submit" className="btn">Sign me up!</button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;