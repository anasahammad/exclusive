import { CartContext } from "@/Provider/CartProvider";
import { useContext } from "react";


const useCart = () => {
    const context = useContext(CartContext)

    if(context === null){
        throw new Error("useCart must be used within a CartContext Provider")
    }
    return context;
};

export default useCart;