import { CartProductType } from "@/components/product/ProductDetails";
import { createContext, useCallback, useEffect, useState } from "react";


type CartContextType = {
    cartProducts : CartProductType[] | null;
    shipping:  number;
    handleAddProductToCart : (product: CartProductType)=> void
    handleRemoveFromCart : (product: CartProductType)=> void
    handleCartQtyIncrase: (product: CartProductType) => void
    handleCartQtyDecrase: (product: CartProductType) => void
    handleCartTotalAmount: ()=>void
}
export const CartContext = createContext<CartContextType | null>(null)

interface CartProviderProps {
    children: React.ReactNode;
}
const CartProvider:  React.FC<CartProviderProps> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null >(null)
    const [cartTotalQty, setCartTotalQty] = useState<number>(0)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [shipping, setShipping] = useState< number>(10)


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

    
       useEffect(()=>{
        const getTotals = ()=>{
            if(cartProducts){
                const {total, qty} = cartProducts.reduce((acc, item)=>{
                    const itemTotal = item.price * item.quantity 

                    acc.total += itemTotal;
                    acc.qty += item.quantity;

                    return acc;

                }, {
                    total: 0,
                    qty: 0
                })

                setCartTotalAmount(total)
                setCartTotalQty(qty)
                setSubTotal(total + shipping)
                
            }else {
                setCartTotalAmount(0);
                setCartTotalQty(0);
                setSubTotal(shipping);
            }
        }
        getTotals()
       }, [cartProducts, shipping])

        
   

   
    const handleRemoveFromCart = useCallback((product: CartProductType)=>{
        if(product){
            const filterProducts = cartProducts?.filter((item)=>{
                return item.id !== product.id
            })

            setCartProducts(filterProducts)
            alert("Product remove from cart")
            localStorage.setItem("exclusiveCart", JSON.stringify(filterProducts))
        }
    }, [cartProducts])

    const handleCartQtyIncrase = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(product.quantity === 99){
            return alert("Oops! Maximum Reached")
        }

        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item)=>item.id === product.id)

            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity;

                setCartProducts(updatedCart)
                localStorage.setItem("exclusiveCart", JSON.stringify(updatedCart))
            }
        }
    }, [cartProducts])

    const handleCartQtyDecrase = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(product.quantity === 1){
            return alert("Oops! Minimum Reached")
        }

        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item)=>item.id === product.id)

            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity;

                setCartProducts(updatedCart)
                localStorage.setItem("exclusiveCart", JSON.stringify(updatedCart))
            }
        }
    }, [cartProducts])
    const value = {
        cartProducts,
        handleAddProductToCart,
        cartTotalQty,
        handleRemoveFromCart,
        handleCartQtyIncrase,
        handleCartQtyDecrase,
        shipping,
        cartTotalAmount,
        subTotal
    }

   
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;