import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class Events extends Component {
  render() {
    return (
      <div className="events">
        <Typography variant="h4" align="center" gutterBottom="true" style={{fontStyle: "italic", color: "#e1e1f4"}}>
          Events
        </Typography>
      </div>
    )
  }
}

export default Events;