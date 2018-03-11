import {
  SERVER_CONNECTION_REQUESTED,
  SET_USER
} from "../action_types";
import {initialize} from "../initialize_app";
import {mockStore} from '../../test_helpers/mock_store';
import {user, serverConnectionState} from "../../test_helpers/fixtures";
let store;

// gets the initial state
// dispatch initialize action and returns the actions committed
const dispatchAndGetAction = async (initialState) => {
  store = mockStore(initialState);
  let {dispatch, getActions} = store;
  await dispatch(initialize(user.userId, 4));
  return getActions();
};

describe('initialize action', () => {
  describe('dispatch subscribeToMessages', () => {
    // noinspection ES6ModulesDependencies
    it('1 time when not connected to the server', async () => {
      expect(await dispatchAndGetAction({
        user,
        serverConnection: serverConnectionState['uninitialized']
      }))
        .toEqual([{type: SERVER_CONNECTION_REQUESTED}]);
    });

    it('0 time when connected to the server', async () => {
      expect(await dispatchAndGetAction({
        user,
        serverConnection: serverConnectionState['connected']
      }))
        .toEqual([]);
    });

    it('0 time when already initiated connection to the server', async () => {
      expect(await dispatchAndGetAction({
        user,
        serverConnection: serverConnectionState['connectionInitialized']
      }))
        .toEqual([]);
    });
  });

  describe('dispatch setUser', () => {
    it('1 time when no user is set', async () => {
      expect(await dispatchAndGetAction({
        user: undefined,
        serverConnection: serverConnectionState['connected']
      }))
        .toEqual([{type: SET_USER, data: user}]);
    });



    it('0 time when user is set', () => {
        // == dispatch subscribeToMessages 0 time when connected to the server
    });
  });
});