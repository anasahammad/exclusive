import { CartProductType } from "@/components/product/ProductDetails";
import { createContext, useCallback, useEffect, useState } from "react";


type CartContextType = {
    cartProducts : CartProductType | null;
    handleAddProductToCart : (product: CartProductType)=> void
}
export const CartContext = createContext<CartContextType | null>(null)

interface CartProviderProps {
    children: React.ReactNode;
}
const CartProvider:  React.FC<CartProviderProps> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    const [cartTotalQty, setCartTotalQty] = useState(0)


    useEffect(()=>{
        const cartItems: any = localStorage.getItem("exclusiveCart")
        const cProducts : CartProductType[] | null = JSON.parse(cartItems)
        setCartProducts(cProducts)
    }, [])
    const handleAddProductToCart = useCallback((product: CartProductType)=>{

        setCartProducts((prev)=>{

            let updatedCart;
            if(prev){
                updatedCart = [...prev, product]
            } else{
                updatedCart = [product]
            }

            alert("Product Added to Cart")
            localStorage.setItem("exclusiveCart", JSON.stringify(updatedCart))

            return updatedCart;
        }) 
    }, [])
    const value = {
        cartProducts,
        handleAddProductToCart,
        cartTotalQty
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;