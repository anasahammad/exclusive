import CountTimer from "../CountTimer";
import ProductCard from "../ProductCard";
import TopContent from "../shared/TopContent";
import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import item4 from '../../assets/item4.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


const products = [
    {
        productName : 'HAVIT HV-G92 Gamepad',
        price: 120,
        prevPrice: 160,
        discount: -40,
        starRatings: 5,
        ratings: 88,
        productImage : item1


    },
    {
        productName : 'AK-900 Wired Keyboard',
        price: 960,
        prevPrice: 1160,
        discount: -35,
        starRatings: 4,
        ratings: 75,
        productImage : item2


    },
    {
        productName : 'IPS LCD Gaming Monitor',
        price: 370,
        prevPrice: 400,
        discount: -30,
        starRatings: 5,
        ratings: 99,
        productImage : item3


    },
    {
        productName : 'S-Series Comfort Chair',
        price: 375,
        prevPrice: 400,
        discount: -25,
        starRatings: 4.5,
        ratings: 99,
        productImage : item4


    },
]

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
const FlashSaleSec = () => {
    return (
        <div className="my-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Today's" heading="Flash Sales"/>
            <CountTimer endTime="2024-08-25T23:59:59"/>
            </div>

            <div className=" mt-8 ">
            <Slider {...settings}>
                {
                  products.map((item, index)=> (
                    
                    <ProductCard key={index} productName={item.productName} price={item.price}  prevPrice={item.prevPrice} discount={item.discount} starRatings={item.starRatings} ratings={item.ratings} 
                    productImage={item.productImage}/>
                  ))  
                }
            </Slider>
                
               <Link to="" className="flex justify-center items-center mt-8"> <Button className="bg-[#DB4444] w-[234px]">View All Products</Button></Link>
            </div>
        </div>
    );
};

export default FlashSaleSec;