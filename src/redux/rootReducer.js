import { combineReducers } from "redux";
import loginReducer from "./user/user.reducer";
import appStateReducer from "./appState/index.js";

import conversationState from "../redux/chats/reducers/conversations";
import messagesState from "../redux/chats/reducers/messages";

export default combineReducers({
  userData: loginReducer,
  appState: appStateReducer,
  conversationState,
  messagesState,
});
