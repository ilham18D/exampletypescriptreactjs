import React from "react";
import {
  // Redirect,
  Route,
} from "react-router-dom";
interface PrivateRouteProps {
  path: string;
}
const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  children,
  path,
}) => {
  return <Route path={path}>{children}</Route>;
};
export default PrivateRoute;
