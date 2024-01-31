import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

export const PrivateRoute = () => {
  const user = useSelector((state: RootState) => state.user.user)

  return !user.id ? <Navigate to="/entrar" replace={true} /> : <Outlet />
};