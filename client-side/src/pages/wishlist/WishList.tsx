import useCart from "@/hooks/useCart";
import { Link } from "react-router-dom";
import WishlistCard from "./WishlistCard";

import TopContent from "@/components/shared/TopContent";
import Slider from "react-slick";
import { products } from "@/utils/Products";
import ProductCard from "@/components/product/ProductCard";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";


const WishList = () => {
    const {wishList} = useCart()
    console.log(wishList)


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow/>,
        prevArrow: <SlickPrevArrow/>,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
   
    if(!wishList || wishList?.length === 0){
        return <div className="w-full h-screen">
                <div className="flex flex-col justify-center items-center space-y-12">
                <div className="font-inter text-5xl font-medium">
                    Your Wishlist Is Empty
                </div>
                <div>
                <Link to="/">
                <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Start Shopping</button></Link>
                </div>
                </div>
        </div>
    }
    return (
        <div className="my-12 ">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="font-poppins text-xl ">Wishlist ({wishList?.length})</div>
                    <Link to="/">
          <button className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium">Move All to Bag</button>
          </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                    {wishList?.map(item=>{
                        return <WishlistCard  key={item._id} item={item}/>
                    })}
                </div>


                <div className="my-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Just For You" />
          
            </div>

            <div className=" mt-8 ">
            <Slider {...settings}>
                {
                  products.map((item, index)=> (
                    
                    <ProductCard key={index} item={item}/>
                  ))  
                }
            </Slider>
                
              
            </div>
        </div>
            </div>
        </div>
    );
};

export default WishList;