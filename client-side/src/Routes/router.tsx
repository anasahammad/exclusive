import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "@/pages/Home";

import ProductDetailsPage from "@/pages/product/ProductDetailsPage";

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
        }
    ] 
    }, 
   ]); 