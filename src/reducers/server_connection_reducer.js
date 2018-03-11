import {
  SERVER_CONNECTION_REQUESTED,
  CONNECTED_TO_SERVER,
  DISCONNECTED_FROM_SERVER,
  SERVER_ERROR
} from "../actions/action_types";

const defaultState = {
  initialized: false,
  connected: false,
  error: null
};

export default (state = defaultState, action) => {
  switch(action.type){
    case SERVER_CONNECTION_REQUESTED:
      return {
        ...state,
        initialized: true
      };
    case CONNECTED_TO_SERVER:
      return {
        ...state,
        initialized: true,
        connected: true
      };
    case DISCONNECTED_FROM_SERVER:
      return {
        ...state,
        initialized: false,
        connected: false
      };
    case SERVER_ERROR:
      return {
        ...state,
        error: action.data
      };
    default:
      return state;
  }
}

