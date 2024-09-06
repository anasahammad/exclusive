

import ManageOrderTable from "./ManageOrdersTable";
import useOrders from "@/hooks/useOrders";
import TopContent from "@/components/shared/TopContent";




const ManageOrders = () => {
    
    const {orders, isLoading} = useOrders()

   if(isLoading){
    return <div>Loading....</div>
   }
    return (
        <div className="py-12">
            <div className="container mx-auto">
            <div className="  mb-6">
           

           <TopContent heading="Manage Orders" text="Manage" />
         </div>
                <ManageOrderTable  orders={orders}/>
            </div>
        </div>
    );
};

export default ManageOrders;