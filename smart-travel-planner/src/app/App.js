import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import PlanTrip from "./pages/PlanTrip/PlanTrip";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import NavBar from "./components/Navbar";

import clsx from "clsx";
import { selectTheme } from "./redux/features/Theme";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

import { loadUserOnStart } from "./redux/features/Auth";

import "./App.scss";

function App() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserOnStart());
  }, [dispatch]);

  return (
    <div className={clsx({ app: true, "dark-theme": theme === "dark" })}>
      <NavBar theme={theme} />
      <Router>
        <Switch>
          <ProtectedRoute path="/plantrip" component={PlanTrip} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path={["/", "/home"]} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
