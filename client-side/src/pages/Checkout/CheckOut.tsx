import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
import {Elements} from "@stripe/react-stripe-js"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const CheckOut = () => {
    return (
        <div className="py-12">
            <Elements stripe={stripePromise}>

            <CheckoutPage/>
            </Elements>
        </div>
    );
};

export default CheckOut;