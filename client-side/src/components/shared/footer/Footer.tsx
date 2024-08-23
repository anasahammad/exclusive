
import { Input } from "@/components/ui/input";
import FooterList from "./FooterList";

import { VscSend } from "react-icons/vsc";
import { Link } from "react-router-dom";
import qrCode from  "../../../assets/Qr Code.png"
import googlePlay from  "../../../assets/GooglePlay.png"
import appleStore from  "../../../assets/AppStore.png"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#000] text-[#FAFAFA]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-12 pt-16 pb-8">
                    <FooterList>
                    <h3 className="text-2xl font-inter font-bold"> Exclusive</h3>
                    <h4 className="text-xl font-poppins font-medium">Subscribe</h4>

                    <p className="font-poppins">Get 10% off your first order</p>

                    <div className="relative hidden md:block">
                   <Input placeholder="Enter your email" className="  font-poppins bg-black placeholder:text-[#FAFAFA] placeholder:text-opacity-40"/>
                   <span className="absolute cursor-pointer top-2 right-4 text-2xl"><VscSend /></span>
                   </div>
                    </FooterList>

                    <FooterList>
                    <h4 className="text-xl font-poppins font-medium">Support</h4>

                    <p className="font-poppins">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className="font-poppins">exclusive@gmail.com</p>
                    <p className="font-poppins">+88015-88888-9999</p>
                    </FooterList>

                    <FooterList>
                    <h4 className="text-xl font-poppins font-medium">Account</h4>

                    <Link className="font-poppins" to="#">
                        My Account
                    </Link>
                    <Link className="font-poppins" to="#">
                    Login / Register
                    </Link>

                    <Link className="font-poppins" to="#">
                    Cart
                    </Link>

                    <Link className="font-poppins" to="#">
                    Wishlist
                    </Link>

                    <Link className="font-poppins" to="#">
                    Shop
                    </Link>

                    </FooterList>

                    <FooterList>
                    <h4 className="text-xl font-poppins font-medium">Quick Link</h4>

                    <Link className="font-poppins" to="#">
                    Privacy Policy
                    </Link>
                    <Link className="font-poppins" to="#">
                    Terms Of Use
                    </Link>

                    <Link className="font-poppins" to="#">
                    FAQ
                    </Link>

                    <Link className="font-poppins" to="#">
                    Contact
                    </Link>

                   

                    </FooterList>

                    <FooterList>
                    <h4 className="text-xl font-poppins font-medium">Download App</h4>

                    <p className="text-sm font-poppins">Save $3 with App New User Only</p>

                    <div className="flex items-center gap-1 ">
                            <div>
                            <img src={qrCode} alt="" />
                            </div>

                            <div className="flex  flex-col gap-1 ">
                                <img src={googlePlay} alt="" />
                                <img src={googlePlay} alt="" />
                            </div>
                    </div>

                    <div className="flex items-center justify-evenly md:justify-between">
                        <FaFacebookF size={20}/>
                        <SlSocialTwitter size={20}/>
                        <FaInstagram size={20}/>
                        <FaLinkedinIn size={20}/>
                    </div>
                    </FooterList>
                </div>
            </div>
        </div>
    );
};

export default Footer;