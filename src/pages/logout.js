import React,{Component} from 'react'
import { Link,Redirect } from 'react-router-dom'
import authentication from '../services/authentication'

class Logout extends Component{
componentDidMount() {
    authentication.logout((loggedIn)=> {
      console.log(loggedIn);
      if (loggedIn)
        this.props.history.push({pathname: '/welcome'});
      else
        return this.setState({ error: true });
    });
  }
  render() {
    return (
      <section className="column is-offset-6 is-6">
        <Redirect to='/' />
        <p>You are now logged out. Click <Link to="/login">here</Link> to log back in.</p>
      </section>
    )
  }
}

export default Logout