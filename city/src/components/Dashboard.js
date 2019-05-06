import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Typography variant="h4" align="center" gutterBottom="true" style={{fontStyle: "italic", color: "#e1e1f4"}}>
          Dashboard
        </Typography>
      </div>
    )
  }
}

export default Dashboard;