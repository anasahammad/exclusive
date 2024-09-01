import { Link, useLocation } from "react-router-dom";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";


const AdminNav = () => {
    const location = useLocation()
    const pathName = location.pathname;
    return (
        <div className="w-full shadow-md top-20 pt-4 border-b-[1px]">
            <div className="container mx-auto">
            <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
                    <Link to="/admin">
                      <AdminNavItem label="Summary" icon={MdDashboard} Selected={pathName === "/admin"} />
                    </Link>

                    <Link to="/admin/add-products">
                      <AdminNavItem label="Add Products" icon={MdLibraryAdd} Selected={pathName === "/admin/add-products"} />
                    </Link>
                    <Link to="/admin/manage-products">
                      <AdminNavItem label="Manage Products" icon={MdDns} Selected={pathName === "/admin/manage-products"} />
                    </Link>
                    <Link to="/admin/manage-orders">
                      <AdminNavItem label="Manage Orders" icon={MdFormatListBulleted} Selected={pathName === "/admin/manage-orders"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;