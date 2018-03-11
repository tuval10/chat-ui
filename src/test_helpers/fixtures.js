import * as moment from 'moment';
import {omit} from 'lodash';

export const rawMessage = {
  username: "stub_username",
  text: "stub message",
  id: "bc39b529-e181-46c2-a4ce-7c167f3f65f7",
  time: "2018-03-10T00:34:22.138Z",
  userId: "3e740822-b6d0-4496-afc0-664e5c63298f",
  avatar: "005-bullbasaur.png"
};

export const message = {
  ...rawMessage,
  time: moment.utc(rawMessage.time)
};

export const otherUserMessage = {
  username: "stub_username 2",
  text: "stub message",
  id: "bc39b529-e181-46c2-a4ce-7c167f3f65f8",
  time: moment.utc("2018-03-10T00:35:22.138Z"),
  userId: "3e740822-b6d0-4496-afc0-664e5c63298g",
  avatar: "004-jigglypuff.png"
};

export const messageWithoutUser = omit(message, ['userId', 'avatar']);

export const user = {
  userId: "3e740822-b6d0-4496-afc0-664e5c63298f",
  avatar: "005-bullbasaur.png"
};

export const stubError = "stub error";

export const serverConnectionState = {
  uninitialized: {
    initialized: false,
    connected: false,
    error: null
  },
  connectionInitialized: {
    initialized: true,
    connected: false,
    error: null
  },
  connected: {
    initialized: true,
    connected: true,
    error: null
  },
  error: {
    initialized: true,
    connected: false,
    error: stubError
  }
};