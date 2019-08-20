import {FETCH_USER_EVENTS} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER_EVENTS:
      if (action.payload.length === 0) {
        return false;
      }
      return action.payload;
    default:
      return state;
  }
}