import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";




interface LinkProps {
    path: string;
    title: string;
  }

const Navbar = () => {
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
            path: '/signup',
            title: 'Sign Up'
        },
    ]
    return (
        <header className="py-4 ">
            <div className="container mx-auto flex justify-between items-center py-6 border-b-2 ">
                {/* logo */}
                <Link to="/">
                    <h1 className="text-[#000] font-inter text-2xl font-bold">MobileMart</h1>
                </Link>

                {/* desktop Navigation Menu */}

                
                <nav className="flex gap-6">
                    {navLinks.map((link, index)=> (
                        <Link className={`${link.path === location.pathname && 'border-b-2 border-[#000]'}text-[#000] text-[18px] font-poppins` } to={link.path} key={index}>{link.title}</Link>)
                    )}
                </nav>

                <div className="flex gap-4 items-center">
                   <div className="relative">
                   <Input placeholder="What are you looking for?" className=" w-[250px] font-poppins  bg-[#F5F5F5]"/>
                   <span className="absolute cursor-pointer top-2 right-4 text-2xl"><IoSearchOutline /></span>
                   </div>

                   <div className="flex gap-4  items-center text-2xl">
                   <FaRegHeart className="cursor-pointer"/>
                   <IoCartOutline className="cursor-pointer"/>
                   </div>
                </div>
                </div>
            
        </header>
    );
};

export default Navbar;