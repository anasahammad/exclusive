import { BsApple } from "react-icons/bs";
import heroPhone from "../../../assets/hero-phone.png"
import { FaArrowRight } from "react-icons/fa";

const Slide1 = () => {
    return (
        <div className="bg-[#000] flex flex-col md:flex-row justify-between text-white">
           {/* left content */}
           <div className="pt-[50px] pl-16 flex flex-col ">
          <div className="flex md:gap-6 items-center ">
           <BsApple className="text-5xl"/>
            <p className="font-poppins">iPhone 14 Series</p>
          </div>

            <h1 className="text-3xl md:text-5xl mt-8 font-inter md:leading-[60px] font-semibold">Up to 10% <br /> off  Voucher</h1>

            <div className="mt-6">
                <button className="flex items-center gap-2"><span className="border-b-2">Shop Now</span> <FaArrowRight /></button>
            </div>
           </div>

           {/* Right Content */}
           <div >
               <img className="w-full h-full" src={heroPhone} alt="" />
           </div>
        </div>
    );
};

export default Slide1;