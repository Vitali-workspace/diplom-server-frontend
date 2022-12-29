import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children }) => {
  if (loggedIn === false) {
    return false;
  }

  return loggedIn ? children : <Redirect to='/' />
};

export default ProtectedRoute;