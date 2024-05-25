import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((s) => s.auth);
  return <>{!isLoggedIn ? <Navigate to="/signin" /> : children}</>;
};
