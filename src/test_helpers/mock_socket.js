import SocketMock from "socket-io-mock";
import { destroySocket as _destroySocket } from "../services/socket";
let socket;
export function mockSocket() {
  socket = socket || new SocketMock();
  return socket;
}

export function destroySocket() {
  socket = null;
  _destroySocket();
}
