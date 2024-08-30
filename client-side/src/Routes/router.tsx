import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "@/pages/Home";

import ProductDetailsPage from "@/pages/product/ProductDetailsPage";
import Cart from "@/pages/Cart/Cart";
import WishList from "@/pages/wishlist/WishList";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/Register/SignUp";
import CheckoutPage from "@/pages/Checkout/CheckoutPage";

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Main/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "/details/:id",
            element: <ProductDetailsPage/>
        },
        {
            path: "/cart",
            element: <Cart/>
        },
        {
            path: "/wishlist",
            element: <WishList/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/sign-up",
            element: <SignUp/>
        },
        {
            path: "/checkout",
            element: <CheckoutPage/>
        }

    ] 
    }, 
   ]); 