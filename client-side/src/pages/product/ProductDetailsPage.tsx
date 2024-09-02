import ProductCard from "@/components/product/ProductCard";
import ProductDetails from "@/components/product/ProductDetails";
import TopContent from "@/components/shared/TopContent";
import useProducts from "@/hooks/useProducts";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";

import { useParams } from "react-router-dom";
import Slider from "react-slick";


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
const ProductDetailsPage = () => {
    const {id} = useParams()
    const {products, isLoading} = useProducts()
    const product = products.find(item=> item._id === id)

    if (isLoading) {
      return <div>Loading...</div>;
  }

  if (!product) {
      return <div>Product not found</div>;
  }
    return (
        <div className="container mx-auto">
            
             <ProductDetails isLoading={isLoading} product={product}/>

             <div className="my-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Related Item" />
          
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
    );
};

export default ProductDetailsPage;