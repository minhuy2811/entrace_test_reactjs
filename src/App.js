import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpPage from "./containers/SignUpPage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
function setToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
}

function App(props) {
  // Save obj email, passwork to localstorage
  const checkToken = JSON.parse(window.localStorage.getItem("token"));
  console.log("checkToken", checkToken);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage exact setToken={setToken} {...props} />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/signup">
          <SignUpPage {...props} />
        </Route>
        <Route path="/">
          <LoginPage setToken={setToken} {...props} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
