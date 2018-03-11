import * as action from '../action_types';
describe('Action Types', () => {
  it("have server action types", () => {
    expect(action).toHaveProperty('SERVER_CONNECTION_REQUESTED', 'SERVER_CONNECTION_REQUESTED');
    expect(action).toHaveProperty('CONNECTED_TO_SERVER', 'CONNECTED_TO_SERVER');
    expect(action).toHaveProperty('DISCONNECTED_FROM_SERVER', 'DISCONNECTED_FROM_SERVER');
    expect(action).toHaveProperty('SERVER_ERROR', 'SERVER_ERROR');
  });

  it("have set user action", () => {
    expect(action).toHaveProperty('SET_USER', 'SET_USER');
    expect(action).toHaveProperty('CONNECTED_TO_SERVER', 'CONNECTED_TO_SERVER');
    expect(action).toHaveProperty('DISCONNECTED_FROM_SERVER', 'DISCONNECTED_FROM_SERVER');
    expect(action).toHaveProperty('SERVER_ERROR', 'SERVER_ERROR');
  });

  it("have message action types", () => {
    expect(action).toHaveProperty('MESSAGE_REQUEST', 'MESSAGE_REQUEST');
    expect(action).toHaveProperty('NEW_MESSAGE_RECEIVED', 'NEW_MESSAGE_RECEIVED');
  });
});