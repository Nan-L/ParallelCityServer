import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Typography variant="h4" align="center" gutterBottom="true" style={{fontStyle: "italic", color: "#e1e1f4"}}>
          Login
        </Typography>
        <a href="/auth/google">Sign in with Google</a>
      </div>
    )
  }
}

export default Login;