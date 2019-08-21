import axios from 'axios';
import { FETCH_USER, LOGOUT, FETCH_USER_EVENTS } from "./types";


// redux-thunk middleware allows dispatching actions after request has been served
export const fetchUser = () => {
  return async function(dispatch) {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
  }
};

export const logout = () => {
  return async function(dispatch) {
    await axios.get('/api/logout');
    dispatch({type: LOGOUT});
  }
};

export const createEvent = (values, history) => {
  return async function(dispatch) {
    console.log(values);
    const data = new FormData();
    if (typeof values.eventImg !== 'string' && values.eventImg !== null) {
      data.append('eventImg', values['eventImg']);
    }
    data.append('eventTitle', values['eventTitle']);
    data.append('eventDesc', values['eventDesc']);
    const res = await axios.post('/api/events', data, {
      headers : {
        'Content-Type': 'multipart/form-data'
      }
    });
    history.push('/dashboard');
    dispatch({type: FETCH_USER, payload: res.data});
  }
};

export const fetchUserEvents = () => {
  return async function(dispatch) {
    const res = await axios.get('api/events');
    dispatch({type: FETCH_USER_EVENTS, payload: res.data});
  }
};