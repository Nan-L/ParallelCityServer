import React, { Component } from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import _ from 'lodash';
import {fetchUserEvents} from "../actions";
import EventDetail from "./EventDetail";


class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUserEvents();
  }

  renderEventArray() {
    return _.map(this.props.events, ({_id, title, desc, startDate, img}) => {
      return <EventDetail key={_id} title={title} desc={desc} startDate={startDate} img={img} />
    })
  }

  renderUserEvents() {
    switch (this.props.events) {
      case null:
        return <p>Loading Events...</p>;
      case false:
        return <React.Fragment>
          <p>You don't have ant event yet.</p>,
          <Button component={RouterLink} color="inherit" to="/events/create">Create Your First Event</Button>
        </React.Fragment>;
      default:
        console.log(this.props.events);
        return <React.Fragment>
          {this.renderEventArray()}
          <Button component={RouterLink} color="inherit" to="/events/create">Create New Event</Button>
        </React.Fragment>;
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