import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "@/pages/Home";

import ProductDetailsPage from "@/pages/product/ProductDetailsPage";
import Cart from "@/pages/Cart/Cart";
import WishList from "@/pages/wishlist/WishList";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/Register/SignUp";
import AdminPage from "@/Layout/Admin/AdminPage";
import Summary from "@/Layout/Admin/Summary/Summary";
import AddProducts from "@/Layout/Admin/Add-products/AddProducts";
import CheckOut from "@/pages/Checkout/CheckOut";
import MyOrders from "@/pages/UserRoute/MyOrder/MyOrders";
import CategoryPage from "@/components/Home/CategoryPage";
import AllProducts from "@/pages/product/AllProducts";
import BestSellingProduct from "@/components/product/BestSellingProduct";
import ManageProducts from "@/Layout/Admin/Manage-products/ManageProducts";
import ManageOrders from "@/Layout/Admin/ManageOrders/ManageOrders";
import OrderDetails from "@/Layout/Admin/ManageOrders/OrderDetails";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ErrorPage from "@/pages/ErrorPage";

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Main/>,
    errorElement: <ErrorPage/>,
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
            element: <PrivateRoute><CheckOut/></PrivateRoute>
        },
        {
            path: "/my-order",
            element: <PrivateRoute><MyOrders/></PrivateRoute>
        },
        {
            path: "/product-category/:category",
            element: <CategoryPage/>
        },
        {
            path: "/all-products",
            element: <AllProducts/>
        },
        {
            path: "/best-selling",
            element: <BestSellingProduct/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/admin",
            element: <AdminPage/>,
            children: [
                {
                   index: true,
                    element: <PrivateRoute><AdminRoute><Summary/></AdminRoute></PrivateRoute>
                },
                {
                    path: "/admin/add-products",
                    element: <PrivateRoute>
                        <AdminRoute><AddProducts/></AdminRoute>
                    </PrivateRoute>
                },
                {
                    path: "/admin/manage-products",
                    element: <PrivateRoute>
                        <AdminRoute><ManageProducts/></AdminRoute>
                    </PrivateRoute>
                },
                {
                    path: "/admin/manage-orders",
                    element: <PrivateRoute>
                        <AdminRoute><ManageOrders/></AdminRoute>
                    </PrivateRoute>
                },
                {
                    path: "/admin/order-details/:id",
                    element: <PrivateRoute>
                        <AdminRoute><OrderDetails/></AdminRoute>
                    </PrivateRoute>
                },
                
            ]
        }

    ]
    }, 
    

    
   ]); 