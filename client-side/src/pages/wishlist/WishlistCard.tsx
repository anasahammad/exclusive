import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
interface WishlistProps{
    item: any;
}

const WishlistCard: React.FC<WishlistProps> = ({item}) => {
    const {images, productName, discount, isNew, price, prevPrice, _id } = item;
   
    const [isProductInCart, setIsProductInCart] = useState(false)
    const {cartProducts, handleRemoveFromWishlist} = useCart()
    useEffect(()=>{
        setIsProductInCart(false)
    
        if(cartProducts){
          const existingIndex = cartProducts.findIndex(cartItem=> cartItem._id === _id)
    
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
          <button onClick={()=>handleRemoveFromWishlist(item)} className=" w-[34px] h-[34px] bg-white p-[5px] flex justify-center items-center rounded-full">
          <RiDeleteBin6Line className=""/>
          </button>
         
        </div>

       
         
         {isProductInCart ?  <Link to="/cart">
          <button  className="mt-4 bottom-0 w-full absolute bg-black text-white text-center font-medium font-poppins py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-colors duration-300">
          Vew Cart
        </button>
         </Link> :  <button  className="mt-4 bottom-0 w-full absolute bg-black text-white text-center font-medium font-poppins py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-colors duration-300 flex  justify-center items-center gap-2">
         <AiOutlineShoppingCart size={24}/><span>Add To Cart</span>
        </button>}
      </div>
     
      <div className="p-4">
        <Link to={`/details/${_id}`} className="text-lg font-medium font-poppins">{ productName}</Link>
        <div className="flex items-center space-x-2 my-2 font-medium font-poppins">
          <span className="text-[#DB4444]  text-xl">${price}</span>
          {prevPrice && <span className="text-gray-500 line-through">${prevPrice}</span>}
        </div>
       
       
      </div>
    </div>
    );
};

export default WishlistCard;