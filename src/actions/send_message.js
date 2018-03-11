import {
  MESSAGE_REQUEST,
} from "../actions/action_types";
import {sendMessage as sendMessageToServer} from "../services/socket"

export function sendMessage(messageWithoutUser) {
  return (dispatch, getState) => {
    const {user} = getState();
    const message = {
      ...messageWithoutUser,
      ...user
    };
    dispatch({type: MESSAGE_REQUEST, data: {message}});
    return sendMessageToServer(message);
  };
}