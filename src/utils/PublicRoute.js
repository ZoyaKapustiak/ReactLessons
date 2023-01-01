import { Outlet } from "react-router-dom";
import { selectAuth } from "../store/profile/selectors";
import { useSelector } from "react-redux";

export const PublicRoute = ({ component }) => {
  const isAuth = useSelector(selectAuth);

  // if (isAuth) {

  // }
  
  return component ? component : <Outlet />;

};