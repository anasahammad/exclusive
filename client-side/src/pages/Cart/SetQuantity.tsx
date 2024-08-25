
import { CartProductType } from "@/components/product/ProductDetails";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

interface SetQuantityProps{
    cartProduct: CartProductType;
    handleIncreaseQty : ()=>void;
    handleDecreaseQty : ()=>void;
}
const SetQuantity: React.FC<SetQuantityProps> = ({cartProduct, handleIncreaseQty, handleDecreaseQty}) => {
    return (
        <div className=" border-[1.5px] border-[#00000066] rounded-sm w-[72px] h-[44px] py-[6px] px-3 flex gap-2 justify-center items-center font-poppins">
            <div>{cartProduct.quantity.toString().padStart(2, "0")}</div>
            <div className="flex flex-col ">
            <GoChevronUp onClick={handleIncreaseQty} className="cursor-pointer"/>
            <GoChevronDown onClick={handleDecreaseQty} className="cursor-pointer"/>
            </div>
        </div>
    );
};

export default SetQuantity;