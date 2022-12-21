import { createStore, compose, combineReducers } from "redux";
import { profileReduser } from "./profile/reduser";
import { messagesReduser } from "./messages/reduser"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  profile: profileReduser,
  messages: messagesReduser
})
export const store = createStore(rootReducer, composeEnhancers())