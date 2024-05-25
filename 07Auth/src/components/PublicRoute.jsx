import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((s) => s.auth);
  return <>{isLoggedIn ? <Navigate to="/" /> : children}</>;
};
