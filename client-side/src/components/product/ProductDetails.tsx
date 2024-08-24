import { useCallback, useState } from "react";
import ProductImage from "./ProductImage";
import {  Rating } from "@mui/material";
import { formatePrice } from "@/utils/formatePrice";
import SetColor from "./SetColor";
import SetSize from "./SetSize";
import SetQuantity from "./SetQuantity";
import { FaRegHeart, FaTruckFast } from "react-icons/fa6";
import { TbRefresh } from "react-icons/tb";

interface ProductDetailsProps{
    product: any;
}

export type CartProductType = {
    id: string,
    productName: string,
    description: string,
    category: string,
    quantity: number,
    price: number,
    size: string,
    images: string,
    SelectedColor: ColorsType,
    
}
export type ColorsType = {
  color: string,
  colorCode : string,
 
}
const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {

    const productRatings = product.reviews.reduce((acc:number, item:any) => item.rating + acc, 0) / product.reviews.length

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        productName: product.productName,
        description: product.description,
        category: product.category,
        quantity: 1,
        size: "M",
        price: product.price,
        images: product.images[0].productImage,
        SelectedColor : product.colors[0].color,
        
    })


    const handleColorSelect = useCallback((value: ColorsType)=>{
            setCartProduct((prev)=>{
                return {...prev, SelectedColor: value}
            })
    }, [cartProduct.SelectedColor])

   

    const handleSizeSelect = useCallback((value:string)=>{
        setCartProduct((prev)=>{
            return {...prev, size: value}
        })
    }, [])
 
  

    const handleDecreaseQty = useCallback(()=>{

        if(cartProduct.quantity === 1){
            return 
        }

        setCartProduct((prev)=>{
            return {...prev, quantity : prev.quantity--}
        })
    }, [cartProduct])

    const handleIncreaseQty = useCallback(()=>{

        if(cartProduct.quantity === 99){
            return 
        }

        setCartProduct((prev)=>{
            return {...prev, quantity : prev.quantity++}
        })
    }, [cartProduct])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-6">
            <ProductImage   product={product}/>
            

            <div className="flex flex-col gap-2">
                <h2 className="font-inter font-semibold text-2xl">{product.productName}</h2>

                <div className="flex items-center gap-2">
                <Rating value={productRatings} readOnly/>
                <div className="font-poppins text-black text-opacity-50">({product.reviews.length} Reviews)</div> | <span className={`  font-poppins text-opacity-60 ${product.inStock ? 'text-[#00FF66] ' : 'text-[#DB4444]'}`}>{product.inStock ? "In Stock": "Out of Stock"}</span>

                
            </div>

            <div className="font-inter text-2xl ">{formatePrice(product.price)}</div>

            <div className="font-poppins text-justify text-black">{product.description}</div>

            <hr className="my-2"/>

            
            <SetColor cartProduct={cartProduct} handleColorSelect={handleColorSelect} colors={product.colors}/>

            { product.sizes &&  <SetSize product={product} handleSizeSelect={handleSizeSelect} cartProduct={cartProduct}/>}
           

            <div className="flex flex-col md:flex-row md:items-center gap-6 my-6">
                <SetQuantity cartProduct={cartProduct} handleIncreaseQty={handleIncreaseQty} handleDecreaseQty={handleDecreaseQty}/>

                <div className="flex gap-4">
                    <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Buy Now</button>
                    <div className="border cursor-pointer  inline-flex items-center justify-center rounded-sm p-2 w-[40px] h-[40px]">
                <FaRegHeart/>
                </div>
                </div>

                
            </div>

            <div className="border rounded-sm">
            <div className="  px-4 py-6">
                <div className="flex gap-4 items-center ">
                    <div>
                    <FaTruckFast size={30} />
                    </div>
                    <div className="space-y-2">
                       <p className="font-poppins font-medium">Free Delivery</p>
                       <p className="font-poppins font-medium text-xs">Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="  rounded-sm px-4 py-6">
                <div className="flex gap-4 items-center ">
                    <div>
                    <TbRefresh  size={30} />
                    </div>
                    <div className="space-y-2">
                       <p className="font-poppins font-medium">Return Delivery</p>
                       <p className="font-poppins font-medium text-xs">Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
            </div>
            
            </div>
        </div>
    );
};

export default ProductDetails;