import React from "react";
// import LinearProgress from "@material-ui/core/LinearProgress";
import {
  Switch,
  Route,
  // Route
} from "react-router-dom";
import Login from "./pages/login";
import { HomePage } from "./pages";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div>
      {
        <div>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/">
              <HomePage />
            </PrivateRoute>
          </Switch>
        </div>
      }
    </div>
  );
}

export default App;
