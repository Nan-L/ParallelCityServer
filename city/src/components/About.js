import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class About extends Component {
  render() {
    return (
      <div className="about">
        <Typography variant="h4" align="center" gutterBottom="true" style={{fontStyle: "italic", color: "#e1e1f4"}}>
          About
        </Typography>
      </div>
    )
  }
}

export default About;