import { redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children }) => {
  if (loggedIn === false) {
    return false;
  }

  return loggedIn ? children : redirect('/');
};

export default ProtectedRoute;
