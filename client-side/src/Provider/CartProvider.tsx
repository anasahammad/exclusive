import { CartProductType, ProductType } from "@/components/product/ProductDetails";
import { createContext, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartProducts: CartProductType[] | null;
    wishList: ProductType[] | null;
    shipping: number;
    cartTotalQty: number;
    handleAddProductToCart: (product: CartProductType) => void;
    handleAddProductToWishlist: (product: ProductType) => void;
    handleRemoveFromCart: (product: CartProductType) => void;
    handleRemoveFromWishlist: (product: ProductType) => void;
    handleCartQtyIncrase: (product: CartProductType) => void;
    handleCartQtyDecrase: (product: CartProductType) => void;
    subTotal: number;
    cartTotalAmount: number;
    isLoading: boolean;
};

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
    const [wishList, setWishlist] = useState<ProductType[] | null>(null);
    const [cartTotalQty, setCartTotalQty] = useState<number>(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [shipping, setShipping] = useState<number>(10);
    const [isLoading, setIsLoading] = useState(true); // Start loading state as true

    useEffect(() => {
        // Load cart products from localStorage
        const cartItems = localStorage.getItem("exclusiveCart");
        if (cartItems) {
            const cProducts: CartProductType[] = JSON.parse(cartItems);
            setCartProducts(cProducts);
        } else {
            setCartProducts([]); // Set empty array if no cart data
        }

        // Load wishlist from localStorage
        const wishlistItems = localStorage.getItem("exclusiveWishlist");
        if (wishlistItems) {
            const wProducts: ProductType[] = JSON.parse(wishlistItems);
            setWishlist(wProducts);
        } else {
            setWishlist([]); // Set empty array if no wishlist data
        }

        setIsLoading(false); // End loading state once data is loaded
    }, []);

    useEffect(() => {
        if (cartProducts && cartProducts.length > 5) {
            setShipping(20); // Double the shipping if cart has more than 5 items
        } else {
            setShipping(10); // Reset to normal shipping if less than or equal to 5 items
        }
    }, [cartProducts]);

    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts.reduce(
                    (acc, item) => {
                        const itemTotal = item.price * item.quantity;
                        acc.total += itemTotal;
                        acc.qty += item.quantity;
                        return acc;
                    },
                    {
                        total: 0,
                        qty: 0,
                    }
                );

                setCartTotalAmount(total); // Total without shipping
                setCartTotalQty(qty);
                setSubTotal(total); // Products' total without shipping
            } else {
                setCartTotalAmount(0);
                setCartTotalQty(0);
                setSubTotal(0); // No subtotal if no products
            }
        };
        getTotals();
    }, [cartProducts, shipping]);

    const handleAddProductToCart = useCallback(
        (product: CartProductType) => {
            setCartProducts((prev) => {
                let updatedCart;
                if (prev) {
                    updatedCart = [...prev, product];
                } else {
                    updatedCart = [product];
                }

                toast.success("Product Added to Cart");
                localStorage.setItem("exclusiveCart", JSON.stringify(updatedCart));
                return updatedCart;
            });
        },
        [cartProducts]
    );

    const handleAddProductToWishlist = useCallback(
        (product: ProductType) => {
            const isExist = wishList?.find((item) => item._id === product._id);
            if (isExist) {
                return toast.error("The product is already added to the wishlist");
            }

            setWishlist((prev) => {
                let updatedWishlist;
                if (prev) {
                    updatedWishlist = [...prev, product];
                } else {
                    updatedWishlist = [product];
                }

                toast.success("Product Added to Wishlist");
                localStorage.setItem("exclusiveWishlist", JSON.stringify(updatedWishlist));
                return updatedWishlist;
            });
        },
        [wishList]
    );

    const handleRemoveFromCart = useCallback(
        (product: CartProductType) => {
            if (product) {
                const filterProducts = cartProducts?.filter((item) => {
                    return item._id !== product._id;
                }) || [];

                setCartProducts(filterProducts);
                toast.success("Product removed from cart");
                localStorage.setItem("exclusiveCart", JSON.stringify(filterProducts));
            }
        },
        [cartProducts]
    );

    const handleRemoveFromWishlist = useCallback(
        (product: ProductType) => {
            if (product) {
                const filterProducts = wishList?.filter((item) => {
                    return item._id !== product._id;
                }) || [];

                setWishlist(filterProducts);
                toast.success("Product removed from wishlist");
                localStorage.setItem("exclusiveWishlist", JSON.stringify(filterProducts));
            }
        },
        [wishList]
    );

    const handleCartQtyIncrase = useCallback(
        (product: CartProductType) => {
            if (product.quantity === 99) {
                return toast.error("Oops! Maximum Reached");
            }

            const updatedCart = cartProducts?.map((item) =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            if (updatedCart) {
                setCartProducts(updatedCart);
                localStorage.setItem("exclusiveCart", JSON.stringify(updatedCart));
            }
        },
        [cartProducts]
    );

    const handleCartQtyDecrase = useCallback(
        (product: CartProductType) => {
            if (product.quantity === 1) {
                return toast.error("Oops! Minimum Reached");
            }

            const updatedCart = cartProducts?.map((item) =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

            if (updatedCart) {
                setCartProducts(updatedCart);
                localStorage.setItem("exclusiveCart", JSON.stringify(updatedCart));
            }
        },
        [cartProducts]
    );

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
        handleRemoveFromWishlist,
        isLoading, // Exposing isLoading state to consumers
    };

    if (isLoading) {
        // Show loading UI while fetching data
        return <div>Loading...</div>;
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
