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
                <ManageProductsTable refetch={refetch} products={products}/>
            </div>
        </div>
    );
};

export default ManageProducts;