import LoadingSpinner from "@/components/shared/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import React from "react";
import { Navigate } from "react-router-dom";



interface AdminRouteProps{
    children: React.ReactNode
}
const AdminRoute: React.FC<AdminRouteProps> = ({children}) => {
    const {role, isLoading} = useRole()
    const {loading} = useAuth()

    // if(isLoading) return <LoadingSpinner/>
    if(isLoading || loading) return <LoadingSpinner/>
    if(role === 'admin') return children
    return  <Navigate to="/"></Navigate>
    
};

export default AdminRoute;