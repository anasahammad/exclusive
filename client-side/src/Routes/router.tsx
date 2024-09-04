import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "@/pages/Home";

import ProductDetailsPage from "@/pages/product/ProductDetailsPage";
import Cart from "@/pages/Cart/Cart";
import WishList from "@/pages/wishlist/WishList";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/Register/SignUp";
import CheckoutPage from "@/pages/Checkout/CheckoutPage";
import AdminPage from "@/Layout/Admin/AdminPage";
import Summary from "@/Layout/Admin/Summary/Summary";
import AddProducts from "@/Layout/Admin/Add-products/AddProducts";
import CheckOut from "@/pages/Checkout/CheckOut";
import MyOrders from "@/pages/UserRoute/MyOrder/MyOrders";
import CategoryPage from "@/components/Home/CategoryPage";

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
            element: <CheckOut/>
        },
        {
            path: "/my-order",
            element: <MyOrders/>
        },
        {
            path: "/product-category/:category",
            element: <CategoryPage/>
        }

    ]
    }, 
    {
        path: "/admin",
        element: <AdminPage/>,
        children: [
            {
               index: true,
                element: <Summary/>
            },
            {
                path: "/admin/add-products",
                element: <AddProducts/>
            }
        ]
    }

    
   ]); 