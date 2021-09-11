import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const SecondLevelPages = () => {
  return (
    <Switch>
      <Route
        exact
        path="/first-level/second-level/item"
        component={() => <h2>Item</h2>}
      />
      <Redirect to="/error" />
    </Switch>
  );
};

export default SecondLevelPages;
