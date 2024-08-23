import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";



const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;