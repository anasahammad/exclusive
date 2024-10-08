import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { FaEye,  FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartProductType } from "./ProductDetails";
import { Rating } from "@mui/material";

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
  const {productName,  price, prevPrice, discount,   images, isNew, _id, colors, description, category} = item;

  const {handleAddProductToCart, cartProducts, handleAddProductToWishlist, } = useCart()

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    _id: _id,
    productName: productName,
    description: description,
    category: category,
    quantity: 1,
    size: "M",
    price: price,
    shipping: "Free",
    image: images[0]?.productImage,
    SelectedColor: colors[0].color,
    
})
  const [isProductInCart, setIsProductInCart] = useState(false)
  

  useEffect(() => {
    setCartProduct(prev => ({
      ...prev,
      _id,
      productName,
      description,
      category,
      price,
      image: images[0]?.productImage,
      SelectedColor: colors[0].color
    }));
  }, [item]);
  
  const productRatings = item.reviews?.reduce((acc:number, item:any) => item.rating + acc, 0) / item.reviews.length


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
            -{discount}%
          </span>
        )}
        {isNew && !discount && (
          <span className="absolute top-2 left-2 bg-[#0F6] font-poppins text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        <div className="absolute flex flex-col items-center top-2 right-2 space-y-2">
          <button onClick={()=>handleAddProductToWishlist(item)} className=" w-[34px] h-[34px] bg-white p-[5px] flex justify-center items-center rounded-full">
          <FaRegHeart className=""/>
          </button>
          <Link to={`/details/${_id}`} className="w-[34px] h-[34px] bg-white p-[5px] flex justify-center items-center rounded-full  ">
            <FaEye />
            
          </Link>
        </div>

       
         
         {isProductInCart ?  <Link to="/cart">
          <button  className="mt-4 bottom-0 w-full absolute bg-black text-white text-center font-medium font-poppins py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-colors duration-300">
          Vew Cart
        </button>
         </Link> :  <button disabled={!item.inStock} onClick={()=>handleAddProductToCart(cartProduct)} className="mt-4 bottom-0 w-full absolute bg-black text-white text-center font-medium font-poppins py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-colors duration-300">
          Add To Cart
        </button>}
      </div>
     
      <div className="p-4">
        <Link to={`/details/${_id}`} className="text-lg font-medium font-poppins">{ productName}</Link>
        <div className="flex items-center space-x-2 my-2 font-medium font-poppins">
          <span className="text-[#DB4444]  text-xl">${price}</span>
          {prevPrice && <span className="text-gray-500 line-through">${prevPrice}</span>}
        </div>
        <div className="flex items-center">
         
        <Rating value={productRatings} readOnly/>
          <span className="ml-2 font-poppins font-semibold">({item?.reviews?.length})</span>
        </div>
       
      </div>
    </div>
    );
};

export default ProductCard;