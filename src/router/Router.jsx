import { createBrowserRouter } from "react-router";
import Home from "../Pages/home/Home";
import MainLayout from "../layout/MainLayout";
import AuthnLayout from "../layout/AuthnLayout";
import Register from "../Pages/register/Register";
import Contact from "../Pages/contact/Contact";
import Confirmintion from "../Pages/cat/Confirmintion";
import ProductChekout from "../Pages/cat/ProductChekout";
import ProductDeta from "../Pages/cat/ProductDeta";
import ShopCat from "../Pages/cat/ShopCat";
import ShopingCart from "../Pages/cat/ShopingCart";
import Blog from "../Pages/Blog/Blog";
import BlogDet from "../Pages/Blog/BlogDet";
import Element from "../Pages/PAGespage/Element";
import Traking from "../Pages/PAGespage/Traking";
import Login from "../Pages/PAGespage/Login";





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
      path:"cat/Confirmtion",
      element:<Confirmintion></Confirmintion>
    },
    {

      path:"cat/ProdCheckout",
      element:<ProductChekout></ProductChekout>
    },
    {

      path:"cat/ProdDet",
      element:<ProductDeta></ProductDeta>
    },
    {
path:"cat/shopcat",
element:<ShopCat></ShopCat>
    },

    {
path:"cat/shopecart",
element:<ShopingCart></ShopingCart>
    },


    {
    path:"Con",
    element:<Contact></Contact>

    },
    {
path:"Blog/Blogoage",
element:<Blog></Blog>
    },
    {
path:"Blog/BlogDet",
element:<BlogDet></BlogDet>
    },

{
path:"Pages/element",
element:<Element></Element>
},
{
path:"Pages/Traking",
element:<Traking></Traking>
},



    ]
  },

  {
    path:"/authlayout",
    element:<AuthnLayout></AuthnLayout>,
    children:[


       {
path:"Pages/Login",
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