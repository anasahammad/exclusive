import useCart from "@/hooks/useCart";
import ItemContent from "./ItemContent";


const CartClient = () => {

    const {cartProducts} = useCart()

    
    if(!cartProducts || cartProducts.length === 0){
        return <div className="w-full h-screen">
                <div className="flex flex-col justify-center items-center space-y-12">
                <div className="font-inter text-5xl font-medium">
                    Your Cart Is Empty
                </div>
                <div>
                <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Start Shopping</button>
                </div>
                </div>
        </div>
    }
    return (
        <div>
            <div style={{boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)'}} className="grid grid-cols-4 items-center gap-4  px-[40px] py-6 bg-white font-poppins">
                <div className=" justify-self-start">Product</div>
                <div className="justify-self-center">Price</div>
                <div className="justify-self-center">Quantity</div>
                <div className="justify-self-end">Subtotal</div>
            </div>

            <div>
            {
                cartProducts?.map(item=>{
                    return <ItemContent key={item.id} item={item}/>
                })
            }
            
            </div>
        </div>
    );
};

export default CartClient;