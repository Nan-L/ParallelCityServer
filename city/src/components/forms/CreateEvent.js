import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { reduxForm } from 'redux-form';
import EventForm from './EventForm';
import EventFormReview from './EventFormReview';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {showFormReview: false};
  }

  renderContent() {
    if (this.state.showFormReview) {
      return <EventFormReview onCancel={() => this.setState({showFormReview: false})} />;
    }
    return <EventForm onEventSubmit={() => this.setState({showFormReview: true})} />;
  }

  render() {
    return (
      <div className="createEvent">
        <Typography variant="h4" align="center" gutterBottom={true} style={{fontStyle: "italic", color: "#e1e1f4"}}>
          Create Event
        </Typography>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: "eventForm"
})(CreateEvent);