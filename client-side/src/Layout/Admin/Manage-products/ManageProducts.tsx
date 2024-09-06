import useProducts from "@/hooks/useProducts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageProductsTable from "./ManageProductsTable";
import TopContent from "@/components/shared/TopContent";


const ManageProducts = () => {
    
    const {products, isLoading, refetch} = useProducts()

   if(isLoading){
    return <div>Loading....</div>
   }
    return (
        <div className="py-12">
            <div className="container mx-auto">
            <div className="  mb-6">
           

            <TopContent heading="Manage Products" text="Manage" />
          </div>
                <ManageProductsTable refetch={refetch} products={products}/>
            </div>
        </div>
    );
};

export default ManageProducts;