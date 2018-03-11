import {
  NEW_MESSAGE_RECEIVED,
  SERVER_CONNECTION_REQUESTED,
  CONNECTED_TO_SERVER,
  DISCONNECTED_FROM_SERVER,
  SERVER_ERROR
} from "../action_types";
import {
  onConnect,
  onDisconnect,
  onError,
  onMessage,
  subscribeToMessages
} from "../subscribe_to_messages";
import {MESSAGE_EVENT} from "../../constants";
import {user, rawMessage, stubError} from '../../test_helpers/fixtures'
import {mockStore} from '../../test_helpers/mock_store';
import {mockSocket, destroySocket} from '../../test_helpers/mock_socket';
let store, socket;

describe('onConnect action', () => {
  it('returns CONNECTED_TO_SERVER action', () => {
    expect(onConnect()).toEqual({type: CONNECTED_TO_SERVER});
  });
});

describe('onDisconnect action', () => {
  it('returns DISCONNECTED_FROM_SERVER action', () => {
    expect(onDisconnect()).toEqual({type: DISCONNECTED_FROM_SERVER});
  });
});

describe('onError action', () => {
  it('returns SERVER_ERROR action with error as data', () => {
    expect(onError(stubError)).toEqual({
      type: SERVER_ERROR,
      data: stubError
    });
  });
});

describe('onMessage action', () => {
  it('returns NEW_MESSAGE_RECEIVED action with message as data', () => {
    expect(onMessage(rawMessage)).toEqual({
      type: NEW_MESSAGE_RECEIVED,
      data: rawMessage
    });
  });
});

describe('subscribeToMessages action', () => {
  beforeEach(() => {
    store = mockStore({user: user});
    socket = mockSocket();
  });

  afterEach(() => {
    destroySocket();
  });

  it('creates SERVER_CONNECTION_REQUESTED action before connecting to the server', () => {
    const expectedActions = [{type: SERVER_CONNECTION_REQUESTED}];
    store.dispatch(subscribeToMessages(user.userId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates CONNECTED_TO_SERVER action on connection', async () => {
    let connectToServerPromise = () => new Promise((resolve) => {
      store.dispatch(subscribeToMessages(user.userId, {
        onConnect: () => {
          resolve();
          return onConnect();
        }
      }));

      socket.socketClient.emit('connect', {});
    });

    await connectToServerPromise();
    const expectedActions = [
      {type: SERVER_CONNECTION_REQUESTED},
      {type: CONNECTED_TO_SERVER},
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates NEW_MESSAGE_RECEIVED action on new message', async () => {
    let messageReceivedPromise = () => new Promise(resolve => {
      store.dispatch(subscribeToMessages(user.userId, {
        onMessage: message => {
          resolve(message);
          return onMessage(message);
        }
      }));

      socket.socketClient.emit('connect', {});
      socket.socketClient.emit(MESSAGE_EVENT, rawMessage);
    });

    const receivedMessage = await messageReceivedPromise();
    expect(receivedMessage).toEqual(rawMessage);
    const expectedActions = [
      {type: SERVER_CONNECTION_REQUESTED},
      {type: CONNECTED_TO_SERVER},
      {type: NEW_MESSAGE_RECEIVED, data: rawMessage}
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates DISCONNECTED_FROM_SERVER action on new disconnecting', async () => {
    let disconnectPromise = () => new Promise(resolve => {
      store.dispatch(subscribeToMessages(user.userId, {
        onDisconnect: () => {
          resolve();
          return onDisconnect();
        }
      }));

      socket.socketClient.emit('connect', {});
      socket.socketClient.emit('disconnect', {});
    });

    await disconnectPromise();
    const expectedActions = [
      {type: SERVER_CONNECTION_REQUESTED},
      {type: CONNECTED_TO_SERVER},
      {type: DISCONNECTED_FROM_SERVER}
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates SERVER_ERROR action on error', async () => {
    let errorPromise = () => new Promise(resolve => {
      store.dispatch(subscribeToMessages(user.userId, {
        onError: error => {
          resolve(error);
          return onError(error);
        }
      }));
      socket.socketClient.emit('error', stubError);
    });

    const receivedError = await errorPromise();
    expect(receivedError).toEqual(stubError);
    const expectedActions = [
      {type: SERVER_CONNECTION_REQUESTED},
      {type: SERVER_ERROR, data: stubError}
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});