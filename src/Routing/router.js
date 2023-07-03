import { createBrowserRouter } from "react-router-dom";
import App from '../App.js';
import Navbar from '../components/Navbar/Navbar.js';
import { Outlet } from "react-router-dom";
import UserPosts from '../components/UserPosts/UserPosts.jsx';
import { AppRoutes } from './AppRoutes.js';
import MainPaige from '../pages/MainPage/MainPaige.jsx';
import LoginPage from '../pages/LoginPage/LoginPage.jsx';
import { PrivateRoute, PublicRoute } from '../HOC/PrivateRoute.js';
import UserComponent from '../components/UserComponent/UserComponent.js';
import RickMortyPage from '../pages/RickMortyPage/RickMortyPage.js';


const AppLayout = () => (
  <>
    <Navbar/>
    <Outlet/>
  </>
);

export const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <h1>Oooooops, wrong route</h1>,
    children:[
      {
        path: AppRoutes.MAIN,
        element: <MainPaige/>,
      },
      {
        path: AppRoutes.RICK,
        element: <RickMortyPage/>,
      },
      {
        path: AppRoutes.USERS,
        // element: <App/>,
        element: <PrivateRoute Component={App}/>,
        children:[
          {
            path: AppRoutes.USERID,
            element: <UserComponent/>,
          },
        ]
      },
      {
        path: AppRoutes.LOGIN,
        // element: <LoginPage/>,
        element: <PublicRoute Component={LoginPage}/>,
      },
      {
        path: AppRoutes.POSTS,
        element: <PrivateRoute Component={UserPosts}/>,
        children:[
          {
            path: AppRoutes.INFO,
            element: <h1>Info under route /posts/info</h1>,
          },
        ]
      },
    ]
  }

]);
