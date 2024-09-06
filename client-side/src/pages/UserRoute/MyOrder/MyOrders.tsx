import TopContent from "@/components/shared/TopContent";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OrderContent from "./OrderContent";


const MyOrders = () => {

    const {user} = useAuth()
    const {data: myOrders = [], isLoading} = useQuery({
        queryKey: ["my-orders"],
        queryFn: async ()=>{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/my-order/${user?.uid}`)

            return response.data
        }
    })


    if(isLoading){
        return <div>Loading.....</div>
    }
    
    console.log(myOrders)
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