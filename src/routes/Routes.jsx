import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<ProtectedRoute><Products/></ProtectedRoute>
        },
        {
          path:"/products", 
          element:<ProtectedRoute><Products/></ProtectedRoute>
      },
        {
            path:"/order-details",
            element:<ProtectedRoute><OrderDetails/></ProtectedRoute>
        },
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