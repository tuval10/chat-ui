import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import messages from "./reducers/messages_reducer";
import user from "./reducers/user_reducer";
import serverConnection from "./reducers/server_connection_reducer";
import { reducer as formReducer } from "redux-form";
import { loadState, saveState } from "./services/localStorage";
import { throttle, pick } from "lodash";

const middlewares = [thunk, logger];
const configureStore = () => {
  const reducer = combineReducers({
    form: formReducer,
    serverConnection,
    messages,
    user
  });

  const persistedState = loadState();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  store.subscribe(
    throttle(() => {
      let currentState = pick(store.getState(), ["form", "avatar"]);
      saveState(currentState);
    }, 1000)
  );

  return store;
};

export default configureStore;
