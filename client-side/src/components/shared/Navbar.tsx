import { Link, useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart, FaRegStar, FaUserCircle } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FiUser } from "react-icons/fi";
import { RiAdminLine, RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import useCart from "@/hooks/useCart";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";




interface LinkProps {
    path: string;
    title: string;
  }

const Navbar = () => {
    const location = useLocation()
    const {cartTotalQty, wishList} = useCart()
    const {logout, user, } = useAuth()
    const {role} = useRole()
    // console.log(role)
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
            title: 'Log In'
        },
    ]

    
    return (
        <header className="py-4 ">
            <div className="container mx-auto ">
                <div className="md:hidden">
                <MobileNav />
                </div>
            <div className=" flex justify-between items-center py-6 border-b-2 ">
                {/* logo */}
                <Link to="/">
                    <h1 className="text-[#000] font-inter text-2xl font-bold">Exclusive</h1>
                </Link>

                {/* desktop Navigation Menu */}

                
               <div className="hidden md:block">
               <nav className="flex gap-6  ">
                    {navLinks.map((link, index)=> (
                        <Link className={`${link.path === location.pathname && 'border-b-2 border-[#000]'}text-[#000] text-[16px] font-poppins` } to={link.path} key={index}>{link.title}</Link>)
                    )}
                </nav>
               </div>

                <div className="flex gap-4 items-center">
                   <div className="relative hidden md:block">
                   <Input placeholder="What are you looking for?" className=" w-[250px] font-poppins  bg-[#F5F5F5]"/>
                   <span className="absolute cursor-pointer top-2 right-4 text-2xl"><IoSearchOutline /></span>
                   </div>

                  
                   <div className="flex gap-2 md:gap-4  items-center text-2xl">
                  <Link to="/wishlist" className="relative">
                  <FaRegHeart className="cursor-pointer"/>
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-[#DB4444] p-1 rounded-full flex items-center justify-center w-4 h-4">{wishList?.length? wishList.length : 0}</span>
                  </Link>
                   <Link to="/cart" className="relative">
  <IoCartOutline className="cursor-pointer text-3xl" />
  <span className="absolute top-0 right-0 text-xs text-white bg-[#DB4444] p-1 rounded-full flex items-center justify-center w-4 h-4">{cartTotalQty}</span>
</Link>
                 

                 
                 {user &&  <DropdownMenu >
                   <DropdownMenuTrigger
                   >  <FaUserCircle className="cursor-pointer hover:text-[#DB4444] active:text-[#DB4444]"/>
                   </DropdownMenuTrigger>
                   <DropdownMenuContent className="backdrop-blur-[75px]  pt-[18px] pr-3 pb-2 pl-5">  
                   <DropdownMenuItem className="flex gap-4 items-center" ><FiUser />
                    Manage My Account
                    </DropdownMenuItem> 
                    {role === "user"  ? <>
                        
                    <DropdownMenuItem  >
                   <Link to="/my-order" className="flex gap-4 items-center"> <RiShoppingBag3Line />
                   My Order</Link>
                    </DropdownMenuItem> 
                    <DropdownMenuItem className="flex gap-4 items-center" >
                    <MdOutlineCancel />
                    My Cancellation
                    </DropdownMenuItem> 
                    <DropdownMenuItem className="flex gap-4 items-center" >
                    <FaRegStar />
                    My Reviews
                    </DropdownMenuItem> 
                     
                    </> : <DropdownMenuItem className="flex gap-4 items-center" >
                    <RiAdminLine />
                     <Link to="/admin">Admin Dashboard</Link>
                    </DropdownMenuItem> }
                   
                    
                    <DropdownMenuItem onClick={logout} className="flex gap-4 items-center" >
                    <TbLogout2 />
                    Logout
                    </DropdownMenuItem> 
                    </DropdownMenuContent>
                  
                   </DropdownMenu>}
                   
                   </div>
                </div>
                </div>
            </div>
            
        </header>
    );
};

export default Navbar;