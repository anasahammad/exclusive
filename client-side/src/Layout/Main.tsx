import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollTop from "@/components/shared/ScroolTop";
import { Outlet } from "react-router-dom";



const Main = () => {
    return (
        <div>

            <ScrollTop/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;