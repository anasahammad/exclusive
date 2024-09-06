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
    const {user} = useAuth()
  const { data: role = '', isLoading } = useQuery<User[]>({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${user?.email}`);
      return res.data.role;
    },
  });

  if (isLoading) return <div>Loading...</div>;



  return {role, isLoading};
};

export default useRole;
