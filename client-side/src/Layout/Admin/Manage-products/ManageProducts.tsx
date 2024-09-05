import useProducts from "@/hooks/useProducts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageProductsTable from "./ManageProductsTable";


const ManageProducts = () => {
    
    const {products, isLoading, refetch} = useProducts()

   if(isLoading){
    return <div>Loading....</div>
   }
    return (
        <div className="py-12">
            <div className="container mx-auto">
            <div className="text-center  mb-6">
            <h1 className="text-4xl font-inter font-semibold">Manage Products</h1>
          </div>
                <ManageProductsTable refetch={refetch} products={products}/>
            </div>
        </div>
    );
};

export default ManageProducts;