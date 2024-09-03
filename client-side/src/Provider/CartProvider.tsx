import { CartProductType, ProductType } from "@/components/product/ProductDetails";
import { createContext, useCallback, useEffect, useState } from "react";


type CartContextType = {
    cartProducts : CartProductType[] | null;
    wishList : ProductType[] | null;
    shipping:  number;
    cartTotalQty : number;
    handleAddProductToCart : (product: CartProductType)=> void
    handleAddProductToWishlist : (product: ProductType)=> void
    handleRemoveFromCart : (product: CartProductType)=> void
    handleRemoveFromWishlist : (product: ProductType)=> void
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
    const [wishList, setWishlist] = useState<ProductType[] | null>(null)
    const [cartTotalQty, setCartTotalQty] = useState<number>(0)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [shipping, setShipping] = useState< number>(10)
    


    useEffect(()=>{
        const cartItems: any = localStorage.getItem("exclusiveCart")
        const cProducts : CartProductType[] | null = JSON.parse(cartItems)
        setCartProducts(cProducts)
    }, [])

    useEffect(()=>{
        const WishlistItems: any = localStorage.getItem("exclusiveWishlist")
        const WProducts : ProductType[] | null = JSON.parse(WishlistItems)
        setWishlist(WProducts)
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


    const handleAddProductToWishlist = useCallback((product: ProductType)=>{
        
        const isExist = wishList?.find(item=> item._id === product._id)
        if(isExist){
            return alert("The product is already added on the wishlist")
        }

        setWishlist((prev)=>{

            let updatedWishlist;
            if(prev){
                updatedWishlist = [...prev, product]
                
                
            } else{
                updatedWishlist = [product]
               
            }

            alert("Product Added to Wishlist")
            localStorage.setItem("exclusiveWishlist", JSON.stringify(updatedWishlist))
            return updatedWishlist;
        }) 
    }, [wishList])

    
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
                return item._id !== product._id
            })

            setCartProducts(filterProducts)
            alert("Product remove from cart")
            localStorage.setItem("exclusiveCart", JSON.stringify(filterProducts))
        }
    }, [cartProducts])

    const handleRemoveFromWishlist = useCallback((product: ProductType)=>{
        if(product){
            const filterProducts = wishList?.filter((item)=>{
                return item._id !== product._id
            })

            setWishlist(filterProducts)
            alert("Product remove from wishlist")
            localStorage.setItem("exclusiveWishlist", JSON.stringify(filterProducts))
        }
    }, [wishList])

    const handleCartQtyIncrase = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(product.quantity === 99){
            return alert("Oops! Maximum Reached")
        }

        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item)=>item._id === product._id)

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
            const existingIndex = cartProducts.findIndex((item)=>item._id === product._id)

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
        subTotal,
        handleAddProductToWishlist,
        wishList,
        handleRemoveFromWishlist
    }

   
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;