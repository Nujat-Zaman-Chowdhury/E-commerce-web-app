import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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