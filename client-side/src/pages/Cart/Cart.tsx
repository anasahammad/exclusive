
import Breadcrumb from "@/components/shared/Breadcrumb";
import CartClient from "./CartClient";


const Cart = () => {
    return (
        <div className="my-12 ">
            <div className="container mx-auto">
            <Breadcrumb/>
                <CartClient/>
            </div>
        </div>
    );
};

export default Cart;