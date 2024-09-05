
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageOrderTable from "./ManageOrdersTable";
import useOrders from "@/hooks/useOrders";




const ManageOrders = () => {
    
    const {orders, isLoading, refetch} = useOrders()

   if(isLoading){
    return <div>Loading....</div>
   }
    return (
        <div className="py-12">
            <div className="container mx-auto">
            <div className="text-center  mb-6">
            <h1 className="text-4xl font-inter font-semibold">Manage Orders</h1>
          </div>
                <ManageOrderTable refetch={refetch} orders={orders}/>
            </div>
        </div>
    );
};

export default ManageOrders;