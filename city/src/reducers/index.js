import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  auth: authReducer,
  events: eventReducer,
  form: reduxForm
});