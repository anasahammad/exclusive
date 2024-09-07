import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const {
    isLoading,
    isError,
    data: products = [],
    error,
    refetch
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`, {withCredentials: true});
      return res.data;
    },
  });

  return { products, isLoading, isError, error, refetch };
};

export default useProducts;
