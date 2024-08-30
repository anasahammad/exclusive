import { CartProductType } from "@/components/product/ProductDetails";
import { formatePrice } from "@/utils/formatePrice";

interface PaymentInfoProps{
    cartProducts : CartProductType[] | null,
    cartTotalAmount : number,
    shipping: number,
    subTotal: number
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({cartProducts, cartTotalAmount, shipping, subTotal}) => {
    return (
        <div className="flex flex-col px-8 md:px-0 font-poppins">
            <div className="space-y-8">
                {cartProducts?.map(cartItem=>{
                    return <div className="flex   md:flex-row justify-between md:items-center" key={cartItem.id}>
                        <div className="flex items-center gap-4">
                            <img className="w-[54px] h-[54px]" src={cartItem.image} alt="" />
                            <span>{cartItem.productName.substring(0, 10)}</span>
                        </div>

                        <div>{formatePrice(cartItem.price)}</div>
                    </div>
                })}
            </div>

            <div className="flex justify-between items-center my-4">
                <div>Subtotal:</div>
                <div>{formatePrice(cartTotalAmount)}</div>
            </div>

            <hr className="my-2 h-1"/>

            <div className="flex justify-between items-center my-4">
                <div>Shipping:</div>
                <div>{formatePrice(shipping)}</div>
            </div>

            <hr className="my-2 h-1"/>

            <div className="flex justify-between items-center my-4">
                <div>Total</div>
                <div>{formatePrice(subTotal)}</div>
            </div>
        </div>
    );
};

export default PaymentInfo;