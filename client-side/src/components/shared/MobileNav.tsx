import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";

interface LinkProps {
    path: string;
    title: string;
  }
const MobileNav = () => {
    const location = useLocation()
    const navLinks:LinkProps[]  = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/contact',
            title: 'Contact'
        },
        {
            path: '/about',
            title: 'About'
        },
        {
            path: '/login',
            title: 'Login'
        },
    ]
    return (
        <Sheet >
            <SheetTrigger>
                <CiMenuFries/>
            </SheetTrigger>

            <SheetContent className="flex flex-col ">
            <div className="flex gap-2 items-center mt-6">
                   <Input placeholder="What are you looking for?" className="  font-poppins  bg-[#F5F5F5]"/>
                   <span className=" cursor-pointer  text-2xl"><IoSearchOutline /></span>
                   </div>

                   <nav className="flex flex-col justify-center items-center gap-6">
                    {navLinks.map((link, index)=> (
                        <Link className={`${link.path === location.pathname && 'border-b-2 border-[#000]'}text-[#000] text-[16px] font-poppins` } to={link.path} key={index}>{link.title}</Link>)
                    )}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;