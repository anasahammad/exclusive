
import ProductCard from "../product/ProductCard";
import TopContent from "../shared/TopContent";
import item1 from '../../assets/Cart.png'
import item2 from '../../assets/GP11_PRD3 1.png'
import item3 from '../../assets/Cart (1).png'
import item4 from '../../assets/item4.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { products } from "@/utils/Products";


const products2 = [
    {
        productName : 'HAVIT HV-G92 Gamepad',
        price: 120,
        prevPrice: 160,
        isNew: true,
        starRatings: 5,
        ratings: 88,
        images: [
            {   
                color: 'white',
                productImage : item1,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item1,
                colorCode: "#DB4444"
            },

        ]
        


    },
    {
        productName : 'AK-900 Wired Keyboard',
        price: 960,
        prevPrice: 1160,
        isNew: true,
        starRatings: 4,
        ratings: 75,
        images: [
            {   
                color: 'red',
                productImage : item2,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item2,
                colorCode: "#DB4444"
            },
  
        ]


    },
    {
        productName : 'IPS LCD Gaming Monitor',
        price: 370,
        prevPrice: 400,
        
        starRatings: 5,
        ratings: 99,
        images: [
            {   
                color: 'red',
                productImage : item3,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item3,
                colorCode: "#DB4444"
            },
  
        ]


    },
    {
        productName : 'S-Series Comfort Chair',
        price: 375,
        prevPrice: 400,
        isNew: true,
        starRatings: 4.5,
        ratings: 99,
        images: [
            {   
                color: 'red',
                productImage : item4,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item4,
                colorCode: "#DB4444"
            },
  
        ]


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
const OurProductsSection = () => {

    const newProducts = products.filter(product=> product.isNew)
    return (
        <div className="my-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Our Products" heading="Explore Our Products"/>
          
            </div>

            <div className=" mt-8 ">
            <Slider {...settings}>
                {
                  newProducts.map((item, index)=> (
                    
                    <ProductCard key={index} item={item}/>
                  ))  
                }
            </Slider>
                
            
               <Link to="" className="flex justify-center items-center mt-8"> <Button className="bg-[#DB4444] w-[234px]">View All Products</Button></Link>
            </div>
        </div>
    );
};

export default OurProductsSection;