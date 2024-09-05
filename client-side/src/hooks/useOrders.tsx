import { useQuery } from "@tanstack/react-query";
import axios from "axios";




const useOrders = () => {
    const {data: orders = [], isLoading, refetch} = useQuery({
        queryKey: ["orders"],
        queryFn: async ()=>{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/orders`)
            return response.data;
        }
    })

    return {orders, refetch, isLoading}
};

export default useOrders;