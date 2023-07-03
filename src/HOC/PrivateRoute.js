import { AppRoutes } from '../Routing/AppRoutes.js';
import { Navigate } from "react-router-dom";

export  const PrivateRoute = ({Component}) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  return authUser?.id
    ? <Component/>
    : <Navigate to={AppRoutes.MAIN}/>
}

export  const PublicRoute = ({Component}) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  return authUser?.id
    ? <Navigate to={AppRoutes.USERS}/>
    : <Component/>
}
