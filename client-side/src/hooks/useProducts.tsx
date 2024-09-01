import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const {
    isLoading,
    isError,
    data: products = [],
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
      return res.data;
    },
  });

  return { products, isLoading, isError, error };
};

export default useProducts;
