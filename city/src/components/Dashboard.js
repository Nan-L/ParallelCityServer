import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Typography variant="h4" align="center" gutterBottom={true} style={{fontStyle: "italic", color: "#e1e1f4"}}>
          Dashboard
        </Typography>
        <Button component={RouterLink} color="inherit" to="/events/create">Create New Event</Button>
      </div>
    )
  }
}

export default Dashboard;