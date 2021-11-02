import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Aspirateur from "../../aspirateur/index";
import Sujet from "../../sujet/index";
import Doc from "../../doc/index";

const Routes = () => {
    return (
        <>
        <Switch>

          <Route exact path="/">
              <Aspirateur />
          </Route>
          <Route path="/sujet">
              <Sujet />
          </Route>
          <Route path="/doc">
              <Doc />
          </Route>
        </Switch>
        </>
    )
}

export default Routes