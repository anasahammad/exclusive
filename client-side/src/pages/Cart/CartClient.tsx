import useCart from "@/hooks/useCart";
import ItemContent from "./ItemContent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatePrice } from "@/utils/formatePrice";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";


const CartClient = () => {

    const {cartProducts, shipping, cartTotalAmount, subTotal} = useCart()
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state || "/";

    const handleCheckout = ()=>{
        if(!user){
            toast.error("You have to login first")
            navigate("/login")
            return
        } else{
            navigate("/checkout")
            return
        }
    }

    // console.log(cartProducts)
    if(!cartProducts || cartProducts.length === 0){
        return <div className="w-full h-screen">
                <div className="flex flex-col justify-center items-center space-y-12">
                <div className="font-inter text-5xl font-medium">
                    Your Cart Is Empty
                </div>
                <div>
                <Link to="/">
                <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Start Shopping</button></Link>
                </div>
                </div>
        </div>
    }
    return (
        <div>
            <div style={{boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)'}} className="grid grid-cols-2 md:grid-cols-4 items-center gap-4  px-[40px] py-6 bg-white font-poppins">
                <div className=" md:justify-self-start">Product</div>
                <div className="md:justify-self-center">Price</div>
                <div className="md:justify-self-center">Quantity</div>
                <div className="md:justify-self-end">Subtotal</div>
            </div>

            <div className="space-y-8 mt-4">
            {
                cartProducts?.map(item=>{
                    return <ItemContent key={item._id} item={item}/>
                })
            }
            
            </div>


            <div className="flex justify-between items-center mt-6">
          <Link to="/">
          <button className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium">Return To Shop</button>
          </Link>

            <button  className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium">Update Cart</button>
            </div>

            <div className="my-20 flex justify-between items-start">
                <div className="flex gap-4 items-center">
                    <input type="text" className="border-[1.5px] border-[#00000066] py-3 pl-6 pr-[164px] rounded-sm" placeholder="Coupon Code" />
                    <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins">Apply Coupon</button>
                </div>

                <div className="border-[1.5px] border-[#000] rounded-sm px-6 py-8 font-poppins w-[35%]">
                        <h4 className="font-medium text-xl">Cart Total</h4>

                        <div className="flex justify-between items-center my-4">
                            <div>Subtotal:</div>
                            <div>{formatePrice(cartTotalAmount)}</div>
                        </div>

                        <hr />
                        <div className="flex justify-between items-center my-4">
                            <div>Shipping:</div>
                            <div>{formatePrice(shipping)}</div>
                        </div>

                        <hr />

                        <div className="flex justify-between items-center my-4">
                            <div>Total:</div>
                            <div>{formatePrice(subTotal)}</div>
                        </div>

                        <div  className="flex justify-center items-center mt-4">
                        <button onClick={handleCheckout} className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins ">Procees to checkout</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CartClient;