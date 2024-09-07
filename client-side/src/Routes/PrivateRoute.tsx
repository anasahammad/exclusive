import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


interface PrivateRouteProps{
    children: React.ReactNode
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()


    // if(loading) return <LoadingSpinner/>
    if(loading) return <div>Loading...</div>
    if(user) return children;
    return <Navigate to='/login' state={location.pathname} replace={true} />
};

export default PrivateRoute;