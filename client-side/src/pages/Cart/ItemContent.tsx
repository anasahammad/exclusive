import { CartProductType } from "@/components/product/ProductDetails";
import { Link } from "react-router-dom";

import { formatePrice } from "@/utils/formatePrice";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import useCart from "@/hooks/useCart";
import SetQuantity from "./SetQuantity";

interface ItemContentProps{
    item: CartProductType;
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {

    const {handleRemoveFromCart, handleCartQtyDecrase, handleCartQtyIncrase} = useCart()
    return (
        <div style={{boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)'}} className="grid font-poppins grid-cols-4 gap-4 px-[42px] py-6 ">
            <div className=" border  justify-self-start flex gap-2 items-center">
                <div className="relative  w-[54px] aspect-square group">
                    <img src={item?.images[0].productImage} alt={item.productName} className="object-contain" />

                    <div  className="absolute -top-3 -left-2 opacity-0 group-hover:opacity-100 transition duration-300  ">
                    <IoClose onClick={()=>handleRemoveFromCart(item)} className="bg-[#DB4444] text-white rounded-full cursor-pointer" size={24}/>
                    </div>
                </div>

                <div className="inline-flex hover:underline  "><Link to={`/details/${item.id}`}>
                  {(item.productName.substring(12, 25))}
                </Link></div>
            </div>

            <div className="justify-self-center flex justify-center items-center border">{formatePrice(item.price)}</div>

            {/* <div className="justify-self-center flex justify-center items-center border">{formatePrice(item.price)}</div> */}

            <div className="justify-self-center">
            <SetQuantity cartProduct={item} handleDecreaseQty={()=>handleCartQtyDecrase(item)} handleIncreaseQty={()=>{handleCartQtyIncrase(item)}}/>
            </div>
            <div className="justify-self-end flex justify-center items-center border">{formatePrice(item.price * item.quantity)}</div>
        </div>
    );
};

export default ItemContent;