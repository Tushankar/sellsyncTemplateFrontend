import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const RouteGuard = () => {
  // const token = Cookies.get("authToken");

  return <Outlet />;
};

export default RouteGuard;