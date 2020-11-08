import {
  all,
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  types,
} from "./user.actions.types.js";

import firebase from "firebase";
import rsf from "../rsf";

const authProvider = new firebase.auth.GoogleAuthProvider();
const fbAuth = new firebase.auth.FacebookAuthProvider();
const twitterAuth = new firebase.auth.TwitterAuthProvider();
// const applicationVerifier = new firebase.auth.RecaptchaVerifier(
//   "recaptcha-container"
// );

//

function* loginSaga({ emailPass: { email, password } }) {
  try {
    const data = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password
    );
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
// login with goolge
function* loginWithGoogle() {
  try {
    const data = yield call(rsf.auth.signInWithPopup, authProvider);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
// login with fb
function* loginWithFacebook() {
  try {
    const data = yield call(rsf.auth.signInWithPopup, fbAuth);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
// anonymous account //
function* anonymousAccount() {
  try {
    const data = yield call(rsf.auth.signInAnonymously, authProvider);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
// twitter
function* twitterLogin() {
  try {
    const data = yield call(rsf.auth.signInWithPopup, twitterAuth);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
// phone number

function* mobilePhoneNumber({ payload }) {
  try {
    const confirmationResult = yield call(
      rsf.auth.signInWithPhoneNumber,
      payload.number,
      payload.appVerifier
    );
    const verificationCode = window.prompt("enter verification code");
    confirmationResult
      .confirm(verificationCode)
      .then(function (result) {
        // User signed in successfully.
        var user = result.user;
        put(loginSuccess(user));
        // ...
      })
      .catch(function (error) {
        put(loginFailure(error));

        // User couldn't sign in (bad verification code?)
        // ...
      });
    //  if()
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut);
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put(loginSuccess(user));
    } else yield put(logoutSuccess());
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
    takeEvery(types.AUTH_PROVIDER.GOOGLE_AUTH, loginWithGoogle),
    takeEvery(types.AUTH_PROVIDER.FACEBOOK_AUTH, loginWithFacebook),
    takeEvery(types.AUTH_PROVIDER.ANONYMOUS, anonymousAccount),
    takeEvery(types.AUTH_PROVIDER.TWITTER, twitterLogin),
    takeEvery(types.AUTH_PROVIDER.MOBILE, mobilePhoneNumber),
  ]);
}
