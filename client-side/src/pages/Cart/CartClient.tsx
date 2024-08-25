import useCart from "@/hooks/useCart";
import ItemContent from "./ItemContent";
import { Link } from "react-router-dom";


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

            <div className="space-y-8 mt-4">
            {
                cartProducts?.map(item=>{
                    return <ItemContent key={item.id} item={item}/>
                })
            }
            
            </div>


            <div className="flex justify-between items-center mt-6">
          <Link to="/">
          <button className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium">Return To Shop</button>
          </Link>

            <button className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium">Update Cart</button>
            </div>

            <div className="my-20 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <input type="text" className="border-[1.5px] border-[#00000066] py-3 pl-6 pr-[164px] rounded-sm" placeholder="Coupon Code" />
                    <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins">Apply Coupon</button>
                </div>

                <div className="border-[1.5px] rounded-sm px-6 py-8 font-poppins w-[420px]">
                        <h4 className="font-medium text-xl">Cart Total</h4>
                </div>
            </div>
        </div>
    );
};

export default CartClient;