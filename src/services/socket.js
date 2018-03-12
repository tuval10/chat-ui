import io from "socket.io-client";
import { MESSAGE_EVENT, SERVER_ADDRESS } from "../constants";
import { mockSocket } from "../test_helpers/mock_socket";

let socket,
  emit,
  initialized = false;
const isTesting = process.env.NODE_ENV === "test";

const initializeSocket = () => {
  if (isTesting) {
    socket = mockSocket();
    emit = socket.socketClient.emit.bind(socket);
  } else {
    socket = new io(SERVER_ADDRESS);
    emit = socket.emit.bind(socket);
  }
  initialized = true;
};

export const destroySocket = () => {
  socket = null;
  emit = null;
  initialized = false;
};

export const subscribeToMessages = (myUserId, callbackObject) => {
  let { onConnect, onDisconnect, onError, onMessage } = callbackObject;
  //connecting to Socket.IO chat server
  if (!initialized) initializeSocket();
  socket.on("connect", onConnect);
  socket.on("disconnect", onDisconnect);
  socket.on("error", onError);
  socket.on(MESSAGE_EVENT, onMessage);
};

//gets a message and sent it to the server
export const sendMessage = message => {
  if (!initialized) initializeSocket();
  emit(MESSAGE_EVENT, message);
};
