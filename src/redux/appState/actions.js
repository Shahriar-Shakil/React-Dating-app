export const types = {
  USER_GENDER_SET: "USER_GENDER_SET",
  GET_GEO_LOCATION: "GET_USER_GEO_LOCATION",
  USER_SUGGESTED_LANG: "USER_SUGGESTED_LANG",
  SET_USER_RELIGION: "SET_USER_RELIGION",
  UPDATE_GEO_LOCATION: "UPDATE_GEO_LOCATION",
};

export const otherLangSelect = (payload) => ({
  type: types.USER_LANGUAGE.OTHER_LANG_SELECT,
  payload,
});
export const resetUserLang = (payload) => ({
  type: types.USER_LANGUAGE.RESET_USER_LANG,
});

export const userGeoLocation = (payload) => ({
  type: types.GET_GEO_LOCATION,
  payload,
});
export const userReligion = (payload) => ({
  type: types.SET_USER_RELIGION,
  payload,
});
export const userSuggestedLang = (payload) => ({
  type: types.USER_SUGGESTED_LANG,
  payload,
});
export const updateGeoLocation = (payload) => ({
  type: types.UPDATE_GEO_LOCATION,
  payload,
});
export const searchResultFound = (payload) => ({
  type: "SEARCH_RESULT_FOUND",
  payload,
});
