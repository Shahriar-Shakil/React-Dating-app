import { types } from "./actions";
const initialState = {
  otherLanguage: "",
  userGeoDetails: { country_name: "" },
  userSuggestedLanguage: [],
  searchResultFound: false,
};

export default function appStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_GEO_LOCATION:
      return {
        ...state,
        userGeoDetails: { ...state.userGeoDetails, ...action.payload },
      };

    case types.USER_SUGGESTED_LANG:
      return {
        ...state,
        userSuggestedLanguage: action.payload,
      };
    case types.SET_USER_RELIGION:
      return {
        ...state,
        userGeoDetails: { ...state.userGeoDetails, religion: action.payload },
      };

    case types.UPDATE_GEO_LOCATION:
      return {
        ...state,
        userGeoDetails: {
          ...state.userGeoDetails,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    case "SEARCH_RESULT_FOUND":
      return {
        ...state,
        searchResultFound: action.payload,
      };

    default:
      return state;
  }
}
