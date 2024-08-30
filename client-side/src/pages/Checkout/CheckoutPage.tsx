import useCart from "@/hooks/useCart";
import CheckoutInput from "./CheckoutInput";
import PaymentInfo from "./PaymentInfo";
import stripe from "../../assets/stripe.png"

const CheckoutPage = () => {

  const {cartProducts, cartTotalAmount, shipping, subTotal} = useCart()
    return (
        <div className="py-12">
          <div className="container mx-auto">

            <h2 className="font-inter text-4xl font-medium">Billing Details</h2>
            <div className="flex flex-col md:flex-row my-12 gap-32 items-center ">
                    {/* Billing information */}
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <CheckoutInput label="First Name" isRequired type="text"/>
                        <CheckoutInput label="Company Name" type="text"/>
                        <CheckoutInput label="Street Address" isRequired type="text"/>
                        <CheckoutInput label="Apartment, floor, etc. (optional)"  type="text"/>
                        <CheckoutInput label="Town/City" isRequired type="text"/>
                        <CheckoutInput label="Phone Number" isRequired type="text"/>
                        <CheckoutInput label="Email Address" isRequired type="email"/>

                        <div className="font-poppins">
                            <input type="checkbox" className="w-4 h-4 checked:bg-[#DB4444] peer focus:outline-none " /> <span>Save this information for faster check-out next time</span>
                        </div>
                    </div>

                    {/* Payment information */}
                    <div className="md:w-1/2">
                     <PaymentInfo shipping={shipping} subTotal={subTotal} cartTotalAmount={cartTotalAmount} cartProducts={cartProducts}/>

                     <div className="flex items-center gap-6  rounded-lg font-poppins px-8 md:px-0">
      {/* Radio Button and Label */}
      <div className="flex items-center mr-6 ">
        <input
          type="radio"
          id="bank"
          name="paymentMethod"
          className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded-full cursor-pointer"
        />
        <label htmlFor="bank" className="ml-2 text-lg cursor-pointer">
          Bank
        </label>
      </div>

      {/* Payment Icons */}
      <div className="cursor-pointer">
        <img src={stripe} alt="stripe" className="h-12 w-16" />
        
      </div>
    </div>

    <div className="flex items-center mr-6 mt-6 font-poppins px-8 md:px-0">
        <input
          type="radio"
          id="cash"
          name="paymentMethod"
          className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded-full cursor-pointer"
        />
        <label htmlFor="cash" className="ml-2 text-lg cursor-pointer">
        Cash on delivery
        </label>
      </div>

      <div className="flex  gap-4 items-center mt-8 ">
                    <input type="text" className="border-[1.5px] border-[#00000066] py-3 pl-6 md:pr-[80px] rounded-sm" placeholder="Coupon Code" />
                    <button className="px-1 md:px-8 py-[12px]  bg-[#DB4444] text-white rounded-sm font-poppins">Apply Coupon</button>
                </div>

                <button  className="px-6 md:px-12 py-[12px] mt-8  bg-[#DB4444] text-white rounded-sm font-poppins ">Place Order</button>
                    </div>
            </div>
          </div>
        </div>
    );
};

export default CheckoutPage;