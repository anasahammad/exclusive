import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
import {Elements} from "@stripe/react-stripe-js"
import Breadcrumb from "@/components/shared/Breadcrumb";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const CheckOut = () => {
    return (
        <div className="py-12">
             <div className="container mx-auto mb-6">
             <Breadcrumb/>
             </div>
            <Elements stripe={stripePromise}>

            <CheckoutPage/>
            </Elements>
        </div>
    );
};

export default CheckOut;