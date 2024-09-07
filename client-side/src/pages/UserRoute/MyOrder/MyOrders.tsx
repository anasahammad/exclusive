import TopContent from "@/components/shared/TopContent";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OrderContent from "./OrderContent";
import { Link } from "react-router-dom";


const MyOrders = () => {

    const {user} = useAuth()
    const {data: myOrders = [], isLoading} = useQuery({
        queryKey: ["my-orders"],
        queryFn: async ()=>{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/my-order/${user?.uid}`, {withCredentials: true})

            return response.data
        }
    })


    if(isLoading){
        return <div>Loading.....</div>
    }
    
  
    if(!myOrders || myOrders?.length === 0){
        return <div className="w-full h-screen">
                <div className="flex flex-col justify-center items-center space-y-12">
                <div className="font-inter text-5xl font-medium">
                    Your Order list Is Empty
                </div>
                <div>
                <Link to="/">
                <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Start Shopping</button></Link>
                </div>
                </div>
        </div>
    }
    return (
        <div className="py-12">
            <div className="container mx-auto">
                <TopContent text="orders" heading="My All Orders"/>
                <div className="my-8">
                {
                    myOrders.map((item:any)=> {
                        return <OrderContent isLoading={isLoading} key={item._id} item={item}/>
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;