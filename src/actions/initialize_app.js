import {setUser} from "./user";
import {subscribeToMessages} from "./subscribe_to_messages"

export function initialize(userId, avatarIndex) {
  return (dispatch, getState) => {
    let {user, serverConnection: {connected, initialized}} = getState();
    if (!user) {
      dispatch(setUser(userId, avatarIndex));
    }
    if (!connected && !initialized)
      return dispatch(subscribeToMessages(userId));
  };
}