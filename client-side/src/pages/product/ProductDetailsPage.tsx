import ProductCard from "@/components/product/ProductCard";
import ProductDetails from "@/components/product/ProductDetails";
import TopContent from "@/components/shared/TopContent";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";
import { products } from "@/utils/Products";
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
    const product = products.find(item=> item.id === id)
    return (
        <div className="container mx-auto">
            
             <ProductDetails product={product}/>

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