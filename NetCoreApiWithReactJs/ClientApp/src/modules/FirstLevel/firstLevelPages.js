import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SecondLevelPages from "./SecondLevel/secondLevelPages";

const FirstLevelPages = () => {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/first-level"
        to="/first-level/second-level"
      />

      {/* Seceond Level*/}
      <Route path="/first-level/second-level" component={SecondLevelPages} />
    </Switch>
  );
};

export default FirstLevelPages;
