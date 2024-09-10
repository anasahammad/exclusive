import React, { useEffect, useState } from "react";
import useCart from "@/hooks/useCart";
import CheckoutInput from "./CheckoutInput";
import PaymentInfo from "./PaymentInfo";
import stripeImage from "../../assets/stripe.png";
import { FieldValues, useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";


const CheckoutPage: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isStripePayment, setIsStripePayment] = useState(false);
  const { cartProducts, cartTotalAmount, shipping, subTotal } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm<FieldValues>({
    defaultValues: {
      name: user?.displayName || "",
      address: "",
      apartment: "",
      city: "",
      phone: "",
      email: user?.email || "",
      paymentMethod: "cash", // Set default payment method
    },
  });
 
  console.log(isStripePayment)
  // Watch paymentMethod to conditionally render Stripe payment fields
  const paymentMethod = watch("paymentMethod");

  useEffect(() => {
    if (cartProducts?.length === 0) {
      navigate("/");
    }
  }, [cartProducts, navigate]);

  useEffect(() => {
    if (paymentMethod === "stripe") {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/create-payment-intent`, { subTotal }, { withCredentials: true })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.error("Error creating payment intent:", err);
          // toast.error("Failed to initialize payment. Please try again.");
        });
    }
  }, [subTotal, paymentMethod]);

  const { mutateAsync } = useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/order`, data, { withCredentials: true });
      return response.data;
    },
    onSuccess: () => {
      console.log("Order success");
      toast.success("Order Placed Successfully")
      setTimeout(() => {
        localStorage.removeItem("exclusiveCart");
        window.location.reload(); 
      }, 500); 
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Order failed:", error);
      toast.error("Failed to place order. Please try again.");
    },
  });

  const handlePayment = async () => {
    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    // Create payment method
    const { error: paymentMethodError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (paymentMethodError) {
      console.error(paymentMethodError.message);
      // toast.error(paymentMethodError?.message);
      return;
    }

    // Confirm card payment
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      },
    });

    if (confirmError) {
      console.error(confirmError.message);
      // toast.error(confirmError.message);
      return;
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("Payment succeeded:", paymentIntent.id);
      await handleSubmitOrder(paymentIntent.id);
    }
  };

  const handleSubmitOrder = async (stripePaymentIntentId: string) => {
    const orderData = {
      userId: user?.uid,
      billingDetails: {
        name: watch("name"),
        address: watch("address"),
        apartment: watch("apartment"),
        city: watch("city"),
        phone: watch("phone"),
        email: watch("email"),
      },
      status: "Pending",
      products: cartProducts,
      amount: subTotal,
      createdAt: new Date().toISOString(),
      deliveryStatus: "Pending",
      stripePaymentIntentId,
      paymentMethod: "stripe",
    };

    try {
      await mutateAsync(orderData);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Failed to submit order. Please try again.");
    }
  };

  const onSubmit = async (data: FieldValues) => {
    if (data.paymentMethod === "stripe") {
      setIsStripePayment(true);
      // Payment will be handled in handlePayment
    } else {
      // For other payment methods, submit the order directly
      const orderData = {
        userId: user?.uid,
        billingDetails: {
          name: data.name,
          address: data.address,
          apartment: data.apartment,
          city: data.city,
          phone: data.phone,
          email: data.email,
        },
        status: "Pending",
        products: cartProducts,
        amount: subTotal,
        createdAt: new Date().toISOString(),
        deliveryStatus: "Pending",
        stripePaymentIntentId: null, // No Stripe payment
        paymentMethod: data.paymentMethod,
      };

      try {
        await mutateAsync(orderData);
      } catch (error) {
        console.error("Error submitting order:", error);
        // toast.error("Failed to submit order. Please try again.");
      }
    }
  };

  return (
    <div className="container mx-auto">
      
      <h2 className="font-inter text-4xl font-medium">Billing Details</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row my-12 gap-32 items-start"
      >
        {/* Billing Information */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <CheckoutInput register={register} id="name" label="First Name" isRequired type="text" />
          <CheckoutInput register={register} id="address" label="Street Address" isRequired type="text" />
          <CheckoutInput register={register} id="apartment" label="Apartment, floor, etc. (optional)" type="text" />
          <CheckoutInput register={register} id="city" label="Town/City" isRequired type="text" />
          <CheckoutInput register={register} id="phone" label="Phone Number" isRequired type="text" />
          <CheckoutInput register={register} id="email" label="Email Address" isRequired type="email" />

          <div className="font-poppins flex items-center">
            <input type="checkbox" className="w-4 h-4 checked:bg-[#DB4444] peer focus:outline-none" />{" "}
            <span className="ml-2">Save this information for faster check-out next time</span>
          </div>
        </div>

        {/* Payment Information */}
        <div className="md:w-1/2">
          <PaymentInfo
            shipping={shipping}
            subTotal={subTotal}
            cartTotalAmount={cartTotalAmount}
            cartProducts={cartProducts}
          />

          <div className="flex items-center gap-6 rounded-lg font-poppins px-8 md:px-0 mt-4">
            {/* Bank Payment Option */}
            <div className="flex items-center mr-6">
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

            {/* Stripe Payment Option */}
            <div className="flex items-center mr-6">
              <input
                type="radio"
                id="stripe"
                {...register("paymentMethod")}
                name="paymentMethod"
                value="stripe"
                className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded-full cursor-pointer"
              />
              <label htmlFor="stripe" className="ml-2 text-lg cursor-pointer flex items-center">
                <img src={stripeImage} alt="Stripe" className="h-6 w-auto mr-2" />
                Stripe
              </label>
            </div>
          </div>

          {/* Cash on Delivery Option */}
          <div className="flex items-center mr-6 mt-4 font-poppins px-8 md:px-0">
            <input
              type="radio"
              id="cod"
              {...register("paymentMethod")}
              name="paymentMethod"
              value="cod"
              className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded-full cursor-pointer"
            />
            <label htmlFor="cash" className="ml-2 text-lg cursor-pointer">
              Cash on delivery
            </label>
          </div>

          {/* Coupon Code Section */}
          <div className="flex gap-4 items-center mt-8 px-8 md:px-0">
            <input
              type="text"
              className="border-[1.5px] border-[#00000066] py-3 pl-6 md:pr-[80px] rounded-sm flex-1"
              placeholder="Coupon Code"
            />
            <button
              type="button"
              className="px-4 md:px-8 py-[12px] bg-[#DB4444] text-white rounded-sm font-poppins"
              onClick={() => alert("Coupon functionality not implemented yet.")}
            >
              Apply Coupon
            </button>
          </div>

          {/* Conditional Rendering for Stripe Payment */}
          {paymentMethod === "stripe" && (
            <div className="mt-8 px-8 md:px-0">
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
                className="border p-4 rounded"
              />
              <button
                type="button"
                onClick={handlePayment}
                // disabled={!stripe || !clientSecret}
                className="px-6 md:px-12 py-[12px] mt-4 bg-[#DB4444] text-white rounded-sm font-poppins w-full"
              >
                Confirm and Pay
              </button>
            </div>
          )}

          {/* Place Order Button for Non-Stripe Payments */}
          {paymentMethod !== "stripe" && (
            <button
              type="submit"
              className="px-6 md:px-12 py-[12px] mt-8 bg-[#DB4444] text-white rounded-sm font-poppins w-full"
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
