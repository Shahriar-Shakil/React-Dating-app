import { all, call, fork } from "redux-saga/effects";
import loginRootSaga from "./user/user.sagas";
import { watchGetConversationsAsync } from "./chats/sagas/conversations";
import { watchGetMessagesAsync } from "./chats/sagas/messages";
function* rootSaga() {
  yield all([
    call(loginRootSaga),
    watchGetConversationsAsync(),
    watchGetMessagesAsync(),
  ]);
}

export default rootSaga;
