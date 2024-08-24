import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { FaEye,  FaRegHeart } from "react-icons/fa";
import Ratings from 'react-ratings-declarative';
import { Link } from "react-router-dom";

interface productCardProps {
    // productName: string;
    // price: number;
    // prevPrice?: number;
    // discount?: number;
    // starRatings: number;
    // ratings: number;
    // images: ImgType;
    // isNew?: boolean;
    item: any;
}

const ProductCard: React.FC<productCardProps> = ({ item}) => {
  const {productName,  price, prevPrice, discount,  starRatings,  ratings, images, isNew, id} = item;

  const {handleAddProductToCart, cartProducts} = useCart()
  const [isProductInCart, setIsProductInCart] = useState(false)

  // const productRatings = item.reviews?.reduce((acc:number, item:any) => item.rating + acc, 0) / item.reviews.length


  useEffect(()=>{
    setIsProductInCart(false)

    if(cartProducts){
      const existingIndex = cartProducts.findIndex(item=> item.id === id)

      if(existingIndex > -1){
        setIsProductInCart(true)
      }
    }
  }, [cartProducts])
  
    return (
        <div className="max-w-sm mx-auto  shadow-lg rounded-sm overflow-hidden group">
      <div className="relative bg-[#F5F5F5] h-[250px] w-[270px]">
        <div className="p-[49px]">
        <img
          className=" "
          src={images[0]?.productImage}
          alt="Product"
        />
        </div>
        {discount && (
          <span className="absolute top-2 left-2 bg-[#DB4444] font-poppins text-white text-xs px-2 py-1 rounded">
            {discount}%
          </span>
        )}
        {isNew && !discount && (
          <span className="absolute top-2 left-2 bg-[#0F6] font-poppins text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        <div className="absolute flex flex-col items-center top-2 right-2 space-y-2">
          <button className=" w-[34px] h-[34px] bg-white p-[5px] flex justify-center items-center rounded-full">
          <FaRegHeart className=""/>
          </button>
          <Link to={`/details/${id}`} className="w-[34px] h-[34px] bg-white p-[5px] flex justify-center items-center rounded-full  ">
            <FaEye />
            
          </Link>
        </div>

       
         
         {isProductInCart ?  <Link to="/cart">
          <button  className="mt-4 bottom-0 w-full absolute bg-black text-white text-center font-medium font-poppins py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-colors duration-300">
          Vew Cart
        </button>
         </Link> :  <button onClick={()=>handleAddProductToCart(item)} className="mt-4 bottom-0 w-full absolute bg-black text-white text-center font-medium font-poppins py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-colors duration-300">
          Add To Cart
        </button>}
      </div>
     
      <div className="p-4">
        <h2 className="text-lg font-medium font-poppins">{ productName}</h2>
        <div className="flex items-center space-x-2 my-2 font-medium font-poppins">
          <span className="text-[#DB4444]  text-xl">${price}</span>
          {prevPrice && <span className="text-gray-500 line-through">${prevPrice}</span>}
        </div>
        <div className="flex items-center">
         
           <Ratings
            rating={starRatings}
            widgetRatedColors="rgb(251, 191, 36)"
            widgetDimensions="20px"
            widgetSpacings="2px"
            readonly
          >
            {[...Array(5)].map((_, index) => (
              <Ratings.Widget key={index} />
            ))}
          </Ratings>
          <span className="ml-2 font-poppins font-semibold">({ratings})</span>
        </div>
       
      </div>
    </div>
    );
};

export default ProductCard;