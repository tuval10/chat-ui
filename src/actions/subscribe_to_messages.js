import {
  NEW_MESSAGE_RECEIVED,
  SERVER_CONNECTION_REQUESTED,
  CONNECTED_TO_SERVER,
  DISCONNECTED_FROM_SERVER,
  SERVER_ERROR
} from "../actions/action_types";
import { subscribeToMessages as _subscribeToMessages } from "../services/socket";

export function onConnect() {
  return { type: CONNECTED_TO_SERVER };
}

export function onDisconnect() {
  return { type: DISCONNECTED_FROM_SERVER };
}

export function onError(error) {
  return { type: SERVER_ERROR, data: error };
}

export function onMessage(message) {
  return { type: NEW_MESSAGE_RECEIVED, data: message };
}

export function subscribeToMessages(userId, callbacksObject) {
  callbacksObject = Object.assign(
    {
      onConnect,
      onDisconnect,
      onError,
      onMessage
    },
    callbacksObject
  );
  return dispatch => {
    dispatch({ type: SERVER_CONNECTION_REQUESTED });
    return _subscribeToMessages(userId, {
      onConnect: () => dispatch(callbacksObject.onConnect()),
      onDisconnect: () => dispatch(callbacksObject.onDisconnect()),
      onError: error => dispatch(callbacksObject.onError(error)),
      onMessage: message => {
        return dispatch(callbacksObject.onMessage(message));
      }
    });
  };
}
