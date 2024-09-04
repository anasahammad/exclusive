import TopContent from "@/components/shared/TopContent";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OrderContent from "./OrderContent";


const MyOrders = () => {

    const {user} = useAuth()
    const {data: myOrders = []} = useQuery({
        queryKey: ["my-orders"],
        queryFn: async ()=>{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/my-order/${user?.uid}`)

            return response.data
        }
    })

    console.log(myOrders)
    return (
        <div className="py-12">
            <div className="container mx-auto">
                <TopContent text="" heading="My Orders"/>
                <div >
                {
                    myOrders.map(item=> {
                        return <OrderContent key={item._id} item={item}/>
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;