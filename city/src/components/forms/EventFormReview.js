import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import FIELDS from './formFields';
import {createEvent} from "../../actions/index";
import {withRouter} from "react-router-dom";

const EventFormReview = ({onCancel, formValues, createEvent, history}) => {
  const reviewFields = _.map(FIELDS, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>
          {formValues[field.name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>PLease review your form information</h5>
      {reviewFields}
      <Button onClick={onCancel}>Back</Button>
      <Button onClick={() => createEvent(formValues, history)}>Create</Button>
    </div>
  );
};

function mapStateToProps(state) {
  return {formValues: state.form.eventForm.values};
}

export default connect(mapStateToProps, {createEvent})(withRouter(EventFormReview));