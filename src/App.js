import React, { useEffect, lazy, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Spin from "antd/es/spin";
import "./App.css";
// import PageLayout from "./layout/index";
import ROUTE from "./components/RouteUrls/index";

import NearByPage from "./pages/nearBy";

import LoginPageLayout from "./layout/loginContainer";

import SearchPage from "./pages/searchPage";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import UserInfo from "./pages/userpage";
import PaymentGeteway from "./pages/paymentGateway";
import ChatPage from "./pages/chatPage";

const PageLayout = lazy(() => import("./layout/index"));

export function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = true; //useSelector((state) => state.userData.loggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
// const PublicRoute
function App() {
  let history = useHistory();
  const isAuthenticated = useSelector((state) => state.userData.loggedIn);
  useEffect(() => {
    isAuthenticated ? history.push(ROUTE.USER) : history.push(ROUTE.LANG);
  }, [isAuthenticated]);
  return (
    <div className="Apps h-100">
      <Suspense
        fallback={
          <div className="spinner-container">
            <Spin size="large" />
          </div>
        }
      >
        <Switch>
          <Route path={"/login"} component={LoginPageLayout}></Route>

          <PrivateRoute>
            <PageLayout>
              <Route exact path={ROUTE.USER}>
                {/* <SearchPage></SearchPage> */}

                <UserInfo></UserInfo>
              </Route>
              <Route exact path={ROUTE.NEAR_BY}>
                <NearByPage></NearByPage>
              </Route>
              <Route path={ROUTE.PAYMENT}>
                <PaymentGeteway />
              </Route>
              <Route path={ROUTE.CHAT}>
                <ChatPage />
              </Route>
            </PageLayout>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
