import useCart from "@/hooks/useCart";
import CheckoutInput from "./CheckoutInput";
import PaymentInfo from "./PaymentInfo";
import stripeImage from "../../assets/stripe.png"
import { FieldValues, useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutPage = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [isStripePayment, setIsStripePayment] = useState(false)
  const {cartProducts, cartTotalAmount, shipping, subTotal} = useCart()
  const {user} = useAuth()
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm<FieldValues>({
    defaultValues: {
      name: user?.displayName,
      address: "",
      apartment : "",
      city: "",
      phone: "",
      email: user?.email,

    }
  })

 useEffect(()=>{
  if(cartProducts?.length === 0){
    navigate("/")
  }
 }, [cartProducts, navigate])
  
  const {mutateAsync} = useMutation({
    mutationFn: async(data: FieldValues)=>{
      const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/order`, data)
      return response.data;
    },
    onSuccess: ()=>{
      console.log("Order success")
      window.location.reload()
      localStorage.removeItem("exclusiveCart")
      navigate("/")
    }
  })


  const handlePayment = async ()=>{
    if(!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    }) 
    if(error){
      console.log(error)
      return
    }

    const {id: paymentMethodId} = paymentMethod;
    try {
      const paymentIntent = await axios.post(`${import.meta.env.VITE_BASE_URL}/create-payment-intent`, {
        amount: subTotal * 100,
        paymentMethod
      })

      await handleSubmitOrder(paymentIntent.data.id)
    } catch (error) {
      console.error(error)
    }
  }

const handleSubmitOrder = async (stripePaymentIntentId: string)=>{

  const data = {};
  const orderData = {
    billingDetails: data,
    status: "pending",
    products: cartProducts,
    amount: subTotal,
    createdAt: new Date().toISOString(),
    deliveryStatus: "pending",
    stripePaymentIntentId
    
  }

  try {
    await mutateAsync(orderData)

    return alert("Ordered Successful")
    
  } catch (error) {
    console.log(error)
  }

}

  const onSubmit = async(data: FieldValues)=>{
    console.log(data)
    if(data.paymentMethod === "stripe"){
      setIsStripePayment(true)

    } else{
     await handleSubmitOrder()
    }
   
    

  }
    return (
    
          <div className="container mx-auto">

            <h2 className="font-inter text-4xl font-medium">Billing Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col md:flex-row my-12 gap-32 items-center ">
                    {/* Billing information */}

               
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <CheckoutInput register={register} id="name" label="First Name" isRequired type="text"/>
                       
                        <CheckoutInput register={register} id="address" label="Street Address" isRequired type="text"/>
                        <CheckoutInput  register={register} id="apartment" label="Apartment, floor, etc. (optional)"  type="text"/>
                        <CheckoutInput  register={register} id="city" label="Town/City" isRequired type="text"/>
                        <CheckoutInput  register={register} id="phone" label="Phone Number" isRequired type="text"/>
                        <CheckoutInput  register={register} id="email" label="Email Address" isRequired type="email"/>

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
          {...register("paymentMethod")}
          name="paymentMethod"
          value="bank"
          className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded-full cursor-pointer"
        />
        <label htmlFor="bank" className="ml-2 text-lg cursor-pointer">
          Bank
        </label>
      </div>

      {/* Payment Icons */}
      {/* <div className="cursor-pointer">
        <img src={stripe} alt="stripe" className="h-12 w-16" />
        
      </div> */}

<div className="flex items-center mr-6 ">
        <input
          type="radio"
          id="stripe"
          {...register("paymentMethod")}
          name="paymentMethod"
          value="stripe"
          className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded-full cursor-pointer"
        />
        <label htmlFor="stripe" className="ml-2 text-lg cursor-pointer">
        <img src={stripeImage} alt="stripe" className="h-12 w-16" />
        </label>
      </div>
    </div>

    <div className="flex items-center mr-6 mt-6 font-poppins px-8 md:px-0">
        <input
          type="radio"
          id="cash"
          {...register("paymentMethod")}
          name="paymentMethod"
          value="cash"
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


        
               
            {isStripePayment && (
              <div className="mt-8">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
                <button
                  type="button"
                  onClick={handlePayment}
                  className="px-6 md:px-12 py-[12px] mt-8  bg-[#DB4444] text-white rounded-sm font-poppins "
                >
                  Confirm and Pay
                </button>
              </div>
            )}
            {!isStripePayment && (
              <button
                type="submit"
                className="px-6 md:px-12 py-[12px] mt-8  bg-[#DB4444] text-white rounded-sm font-poppins "
              >
                Place Order
              </button>
            )}
          </div>

                    </form>
           
          </div>
        
    );
};

export default CheckoutPage;