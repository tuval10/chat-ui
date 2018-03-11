import {MESSAGE_REQUEST} from "../action_types";
import {sendMessage} from "../send_message";
import {
  user,
  message as messageSent,
  rawMessage,
  messageWithoutUser
} from '../../test_helpers/fixtures'
import {mockStore} from '../../test_helpers/mock_store';
import {mockSocket, destroySocket} from '../../test_helpers/mock_socket';
import {MESSAGE_EVENT} from '../../constants'

let store, socket;

describe('sendMessage action', () => {
  beforeEach(() => {
    store = mockStore({user: user});
    socket = mockSocket();
  });

  afterEach(() => {
    destroySocket();
  });

  // noinspection ES6ModulesDependencies
  it('creates MESSAGE_REQUEST action and add user info to message', async () => {
    let messageReceivedPromise = () => new Promise((resolve) => {
      socket.on(MESSAGE_EVENT, message => resolve(message));
      store.dispatch(sendMessage(messageWithoutUser));
    });

    const messageReceived = await messageReceivedPromise();
    const expectedActions = [{
      type: MESSAGE_REQUEST,
      data: {message: messageSent} //time is a moment object before sending
    }];
    expect(messageReceived).toEqual(rawMessage); //time is a string after sending
    expect(store.getActions()).toEqual(expectedActions);
  });
});