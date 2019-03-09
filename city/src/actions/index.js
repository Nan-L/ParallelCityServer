import axios from 'axios';
import { FETCH_USER, LOGOUT } from "./types";

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