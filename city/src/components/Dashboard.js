import React, { Component } from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import _ from 'lodash';
import {fetchUserEvents} from "../actions";


class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUserEvents();
  }

  renderUserEvents() {
    switch (this.props.events) {
      case null:
        return <p>Loading Events...</p>;
      case false:
        return [
          // shouldn't return array?
          <p key="text">You don't have ant event yet.</p>,
          <Button key="create" component={RouterLink} color="inherit" to="/events/create">Create Your First Event</Button>
        ];
      default:
        console.log(this.props.events);
        return <p>Events:</p>;
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Typography variant="h4" align="center" gutterBottom={true} style={{fontStyle: "italic", color: "#e1e1f4"}}>
          Dashboard
        </Typography>
        {/*<Button component={RouterLink} color="inherit" to="/events/create">Create New Event</Button>*/}
        {this.renderUserEvents()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {events: state.events};
}

export default connect(mapStateToProps, {fetchUserEvents})(Dashboard);