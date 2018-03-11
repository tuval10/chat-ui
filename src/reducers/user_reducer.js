import {SET_USER} from "../actions/action_types"

export default (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data;
    default:
      return state;
  }
};