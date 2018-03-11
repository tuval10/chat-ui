import messages from '../messages_reducer'
import {
  NEW_MESSAGE_RECEIVED,
} from "../../actions/action_types";
import * as moment from "moment"
import {rawMessage, message} from '../../test_helpers/fixtures'
const messageAction = {type: NEW_MESSAGE_RECEIVED, data: rawMessage};


describe('Messages Reducer', () => {
  // noinspection ES6ModulesDependencies
  it('has an empty array as default state', () => {
    expect(messages(undefined, {type: 'unexpected'}))
      .toEqual([]);
  });

  describe('handles NEW_MESSAGE_RECEIVED', () => {
    let result = messages(undefined, messageAction);
    it('push it to array', () => {
      let expected = [message];
      expect(result).toEqual(expected);
    });

    it('changes time string to moment.js object', () => {
      let {time: resultTime} = result[0];
      expect(moment.isMoment(resultTime)).toBeTruthy();
    });
  });
});