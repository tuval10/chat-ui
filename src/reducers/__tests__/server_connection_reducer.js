import serverConnection from '../server_connection_reducer'
import {
  SERVER_CONNECTION_REQUESTED,
  CONNECTED_TO_SERVER,
  DISCONNECTED_FROM_SERVER,
  SERVER_ERROR
} from "../../actions/action_types";
import {serverConnectionState, stubError} from "../../test_helpers/fixtures";

describe('Server Connection Reducer', () => {
  // noinspection ES6ModulesDependencies
  it('has a default state', () => {
    expect(serverConnection(undefined, {type: 'unexpected'}))
      .toEqual(serverConnectionState['uninitialized']);
  });

  it('handles SERVER_CONNECTION_REQUESTED', () => {
    expect(serverConnection(undefined, {type: SERVER_CONNECTION_REQUESTED}))
      .toEqual(serverConnectionState['connectionInitialized']);
  });

  it('handles CONNECTED_TO_SERVER', () => {
    expect(serverConnection(undefined, {type: CONNECTED_TO_SERVER}))
      .toEqual(serverConnectionState['connected']);
  });

  it('handles DISCONNECTED_FROM_SERVER', () => {
    expect(serverConnection(serverConnectionState['connected'], {type: DISCONNECTED_FROM_SERVER}))
      .toEqual(serverConnectionState['uninitialized']);
  });

  it('handles SERVER_ERROR', () => {
    expect(serverConnection(serverConnectionState['connectionInitialized'], {
      type: SERVER_ERROR,
      data: stubError
    }))
      .toEqual(serverConnectionState['error']);
  });
});