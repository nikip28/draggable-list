import React, { Suspense, lazy } from "react";
import { observer, inject } from "mobx-react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./globals/layout";

const Login = lazy(() => import("./modules/login"));
const Profile = lazy(() => import("./modules/profile"));

const Routes = props => (
  <main>
    {props.globals.isLoggedIn ? (
      <Router>
        <Layout>
          <Suspense fallback={<div>...Loading</div>}>
            <Switch>
              <Route path="/" render={() => <Profile {...props} />} />
              <Route path="/profile" render={() => <Profile {...props} />} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    ) : (
      <Router>
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route path="/" exact render={() => <Login {...props} />} />
            <Route path="/login" exact render={() => <Login {...props} />} />
            <Route render={() => <Login {...props} />} />
          </Switch>
        </Suspense>
      </Router>
    )}
  </main>
);

export default inject("globals")(observer(Routes));
