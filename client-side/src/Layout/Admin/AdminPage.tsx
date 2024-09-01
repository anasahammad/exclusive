import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";


const AdminPage = () => {
    return (
        <div>
            <AdminNav/>
            <Outlet/>
        </div>
    );
};

export default AdminPage;