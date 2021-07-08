import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Switch>
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("user")) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/404" />;
            //var modalToggle = document.getElementById("login").classList.add("show"); // relatedTarget
          }
        }}
      />
    </Switch>
  );
};

export default ProtectedRoute;
