import { types } from "./user.actions.types";

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  providerData: null,
  userLanguage: "",
  userGender: "",
  user_mood: { isSelect: false, mood_type: "" },
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
    case types.AUTH_PROVIDER.ANONYMOUS:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user,
        providerData: action.user.providerData,
      };
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: null,
        providerData: null,
      };
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.USER_LANGUAGE.SET_LANG:
      return {
        ...state,
        userLanguage: action.payload,
      };
    case types.USER_MOOD:
      return {
        ...state,
        user_mood: {
          isSelect: action.payload.isSelect,
          mood_type: action.payload.mood_type,
        },
      };
    case types.USER_GENDER_SET:
      return {
        ...state,
        userGender: action.payload,
      };
    default:
      return state;
  }
}
