import React, { lazy, Suspense, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Dashboard from "./components/Dashboard";

const TictactoeLazy = lazy(() => import("./components/TictactoeApp"));
const HangmanLazy = lazy(() => import("./components/HangmanApp"));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Suspense fallback={<span>Loading..</span>}>
        <Switch>
          <Route exact path="/tictactoe" component={TictactoeLazy} />
          <Route exact path="/hangman" component={HangmanLazy} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
};
