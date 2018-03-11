import {
  NEW_MESSAGE_RECEIVED,
} from "../actions/action_types";
import * as moment from "moment"

export default (state = [], action) => {
  switch(action.type){
    case NEW_MESSAGE_RECEIVED:
      return [...state, {...action.data, time: moment.utc(action.data.time)}];
    default:
      return state;
  }
}

