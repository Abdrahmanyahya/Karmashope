import { createBrowserRouter } from "react-router";
import Home from "../Pages/home/Home";
import Cat from "../Pages/cat/Cat";
import MainLayout from "../layout/MainLayout";
import AuthnLayout from "../layout/AuthnLayout";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";





const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
    {
        path:'home',
        element:<Home></Home>
    },
    {
        path:"cat",
        element:<Cat></Cat>
    },



    ]
  },

  {
    path:"/authlayout",
    element:<AuthnLayout></AuthnLayout>,
    children:[


        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"reg",
            element:<Register></Register>
        }
    ]
  }
]);

export default router;