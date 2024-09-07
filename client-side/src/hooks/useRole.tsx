import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

type User = {
  _id: string;
  email: string;
  role: string;
  status: string;
};

const useRole = () => {
  const { user } = useAuth();

  const { data, isLoading } = useQuery<User>({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axios.get<User>(`${import.meta.env.VITE_BASE_URL}/users/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
    enabled: !!user?.email, // Only fetch if user.email is defined
  });

  // Extract role, default to empty string if data is not available
  const role = data?.role || "";

  return { role, isLoading };
};

export default useRole;
