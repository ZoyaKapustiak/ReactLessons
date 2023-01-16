import { Outlet, Navigate } from "react-router-dom";
import { selectAuth } from "../store/profile/selectors";
import { useSelector } from "react-redux";

export const PublicRoute = ({ component }) => {
  const isAuth = useSelector(selectAuth);
  console.log(isAuth)
  if (isAuth) {
    // return <Navigate to="/" replace/>;
  }
  return component ? component : <Outlet />;

};