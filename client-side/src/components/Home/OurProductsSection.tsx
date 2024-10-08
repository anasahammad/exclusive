
import ProductCard from "../product/ProductCard";
import TopContent from "../shared/TopContent";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

import useProducts from "@/hooks/useProducts";
import { ProductType } from "../product/ProductDetails";




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

    const {products} = useProducts()
    const newProducts = products.filter((product: ProductType)=> product.isNew)
    return (
        <div className="my-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Our Products" heading="Explore Our Products"/>
          
            </div>

            <div className=" mt-8 ">
            <Slider {...settings}>
                {
                  newProducts.map((item: ProductType, index: number)=> (
                    
                    <ProductCard key={index} item={item}/>
                  ))  
                }
            </Slider>
                
            
               <Link to="/all-products" className="flex justify-center items-center mt-8"> <Button className="bg-[#DB4444] w-[234px]">View All Products</Button></Link>
            </div>
        </div>
    );
};

export default OurProductsSection;