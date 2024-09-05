import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Products/>
        }
      ]
    },
    {
        path: "/sign-up",
      element: <SignUp></SignUp>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);