import CountTimer from "../CountTimer";
import ProductCard from "../product/ProductCard";
import TopContent from "../shared/TopContent";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
// import { products } from "@/utils/Products";
import useProducts from "@/hooks/useProducts";
import { ProductType } from "../product/ProductDetails";
import LoadingSpinner from "../shared/LoadingSpinner";


// const products = [
//     {
//         productName : 'HAVIT HV-G92 Gamepad',
//         price: 120,
//         prevPrice: 160,
//         discount: -40,
//         starRatings: 5,
//         ratings: 88,
//         images: [
//           {   
//               color: 'red',
//               productImage : item1,
//               colorCode: "#DB4444"
//           },
//           {   
//               color: 'white',
//               productImage : item1,
//               colorCode: "#DB4444"
//           },

//       ]


//     },
//     {
//         productName : 'AK-900 Wired Keyboard',
//         price: 960,
//         prevPrice: 1160,
//         discount: -35,
//         starRatings: 4,
//         ratings: 75,
//         images: [
//           {   
//               color: 'red',
//               productImage : item2,
//               colorCode: "#DB4444"
//           },
//           {   
//               color: 'white',
//               productImage : item2,
//               colorCode: "#DB4444"
//           },

//       ]


//     },
//     {
//         productName : 'IPS LCD Gaming Monitor',
//         price: 370,
//         prevPrice: 400,
//         discount: -30,
//         starRatings: 5,
//         ratings: 99,
//         images: [
//           {   
//               color: 'red',
//               productImage : item3,
//               colorCode: "#DB4444"
//           },
//           {   
//               color: 'white',
//               productImage : item3,
//               colorCode: "#DB4444"
//           },

//       ]


//     },
//     {
//         productName : 'S-Series Comfort Chair',
//         price: 375,
//         prevPrice: 400,
//         discount: -25,
//         starRatings: 4.5,
//         ratings: 99,
//         images: [
//           {   
//               color: 'red',
//               productImage : item4,
//               colorCode: "#DB4444"
//           },
//           {   
//               color: 'white',
//               productImage : item4,
//               colorCode: "#DB4444"
//           },

//       ]


//     },
// ]

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

  const {products,  isLoading, } = useProducts()
  console.log(products)
  if (isLoading) return <LoadingSpinner/>;
  // if (isError) return <div>Error: {error.message}</div>;
    return (
        <div className="my-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Today's" heading="Flash Sales"/>
            <CountTimer endTime="2024-10-25T23:59:59"/>
            </div>

            <div className=" mt-8 ">
            <Slider {...settings}>
                {
                  products?.slice(0, 8).map((item: ProductType, index: number)=> (
                    
                    <ProductCard key={index} item={item}/>
                  ))  
                }
            </Slider>
                
               <Link to="/all-products" className="flex justify-center items-center mt-8"> <Button className="bg-[#DB4444] w-[234px]">View All Products</Button></Link>
            </div>
        </div>
    );
};

export default FlashSaleSec;