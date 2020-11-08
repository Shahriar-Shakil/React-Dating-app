import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppMoodChoise from "./../components/moodChoise/index";
import LanguageSeletor from "../components/LanguageSelector";
import LearnContainer from "./../components/LearnPanel/index";
import MeetPeople from "./../components/MeetPeople/index";
import ROUTE from "../components/RouteUrls";
import SignInPage from "./../pages/signinPage";

const LoginRoute = () => {
  let history = useHistory();

  const userMood = useSelector((state) => state.userData.user_mood);
  const userGender = useSelector((state) => state.userData.userGender);
  const userLanguage = useSelector((state) => state.userData.userLanguage);
  useEffect(() => {
    if (userGender !== "" && userLanguage !== "") {
      history.push(ROUTE.USERCHOISE);
    } else {
      history.push(ROUTE.LANG);
    }
  }, []);
  useEffect(() => {
    if (userMood.isSelect) {
      history.push(ROUTE.MEET);
    }
  }, [userMood]);
  return (
    <Switch>
      <Route path={`${ROUTE.LANG}`}>
        <LanguageSeletor />
      </Route>
      <Route path={`${ROUTE.USERCHOISE}`}>
        <AppMoodChoise />
      </Route>
      <Route path={`${ROUTE.SIGNIN}`}>
        <SignInPage />
      </Route>
      <Route path={`${ROUTE.MEET}`}>
        <MeetPeople />
      </Route>
      <Route path={`${ROUTE.LEARN}`}>
        <LearnContainer />
      </Route>
    </Switch>
  );
};

export default LoginRoute;
