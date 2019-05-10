import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {Link as RouterLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import EventField from './EventField';
import FIELDS from './formFields';

class EventForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({label, name}) => {
      return <Field key={name} component={EventField} type="text" label={label} name={name} />
    })
  }

  render() {
    return (
      <div className="createEvent">
          <form onSubmit={this.props.handleSubmit(this.props.onEventSubmit)}>
            {this.renderFields()}
            <Button component={RouterLink} color="inherit" to="/dashboard">Cancel</Button>
            <Button type="submit">Next</Button>
          </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, ({name, label}) => {
    if (!values[name]) {
      errors[name] = "You must provide an " + label.toLowerCase() + "!";
    }
  });
  return errors;
}

export default reduxForm({
  validate: validate,
  form: "eventForm",
  destroyOnUnmount: false
})(EventForm);