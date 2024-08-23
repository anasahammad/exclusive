import { CartProductType } from "./ProductDetails";


interface SetQuantityProps{
    cartProduct: CartProductType;
    handleDecreaseQty : ()=>void;
    handleIncreaseQty : ()=>void;
}
const SetQuantity: React.FC<SetQuantityProps> = ({cartProduct, handleDecreaseQty, handleIncreaseQty}) => {
    const btnStyle = 'text-3xl active:bg-[#DB4444] active:text-white active:transition px-2 ';
    return (
        <div className="flex justify-between gap-4 border-2  rounded-sm w-[120px] items-center text-base">
                    <button className={`border-r-2 ${btnStyle}`} onClick={handleDecreaseQty}>-</button>
                    <div className="font-semibold font-poppins">{cartProduct.quantity}</div>
                    <button className={`border-l-2 ${btnStyle}`} onClick={handleIncreaseQty}>+</button>
                </div>
    );
};

export default SetQuantity;