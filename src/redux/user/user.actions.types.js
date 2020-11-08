export const types = {
  LOGIN: {
    REQUEST: "LOGIN.REQUEST",
    SUCCESS: "LOGIN.SUCCESS",
    FAILURE: "LOGIN.FAILURE",
  },
  LOGOUT: {
    REQUEST: "LOGOUT.REQUEST",
    SUCCESS: "LOGOUT.SUCCESS",
    FAILURE: "LOGOUT.FAILURE",
  },
  AUTH_PROVIDER: {
    GOOGLE_AUTH: "GOOGLE_AUTH_REQUEST",
    FACEBOOK_AUTH: "FACEBOOK_AUTH_REQUEST",
    ANONYMOUS: "ANONYMOUS_ACCOUNT_CREATE_REQUEST",
    TWITTER: "TWITTER_ACCOUNT_CREATE_REQUEST",
    MOBILE: "SIGNIN_WITH_PHONE_NUMBER",
  },
  USER_LANGUAGE: {
    SET_LANG: "USER_LANGUAGE_SET",
  },
  USER_MOOD: "SET_USER_MOOD",
  USER_GENDER_SET: "USER_GENDER_SET",
};
export const setUserMood = (payload) => ({
  type: types.USER_MOOD,
  payload,
});
export const userGenderSet = (payload) => ({
  type: types.USER_GENDER_SET,
  payload,
});
export const userLangSet = (payload) => ({
  type: types.USER_LANGUAGE.SET_LANG,
  payload,
});
export const login = (emailPass) => ({
  type: types.LOGIN.REQUEST,
  emailPass,
});

export const loginSuccess = (user) => ({
  type: types.LOGIN.SUCCESS,
  user,
});

export const loginFailure = (error) => ({
  type: types.LOGIN.FAILURE,
  error,
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = (error) => ({
  type: types.LOGOUT.FAILURE,
  error,
});

export const loginWithGoogle = () => ({
  type: types.AUTH_PROVIDER.GOOGLE_AUTH,
});
export const loginWithFacebook = () => ({
  type: types.AUTH_PROVIDER.FACEBOOK_AUTH,
});
export const anonymousAccount = () => ({
  type: types.AUTH_PROVIDER.ANONYMOUS,
});
export const twitterAccount = () => ({
  type: types.AUTH_PROVIDER.TWITTER,
});
export const registerWithPhone = (payload) => ({
  type: types.AUTH_PROVIDER.MOBILE,
  payload,
});
