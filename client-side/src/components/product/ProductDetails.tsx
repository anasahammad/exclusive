import { useCallback, useState } from "react";
import ProductImage from "./ProductImage";
import { Rating } from "@mui/material";
import { formatePrice } from "@/utils/formatePrice";
import SetColor from "./SetColor";
import SetSize from "./SetSize";
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
    selectedImg: ImgType
}
export type ImgType = {
  color: string,
  colorCode : string,
  productImage: string
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
        selectedImg: {...product.images[0]} 
    })


    const handleColorSelect = useCallback((value: ImgType)=>{
            setCartProduct((prev)=>{
                return {...prev, selectedImg: value}
            })
    }, [cartProduct.selectedImg])

    const handleSizeSelect = useCallback((value:string)=>{
        setCartProduct((prev)=>{
            return {...prev, size: value}
        })
    }, [])
    console.log(cartProduct)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} handleColorSelect={handleColorSelect} product={product}/>

            <div className="flex flex-col gap-2">
                <h2 className="font-inter font-semibold text-2xl">{product.productName}</h2>

                <div className="flex items-center gap-2">
                <Rating value={productRatings} readOnly/>
                <div className="font-poppins text-black text-opacity-50">({product.reviews.length} Reviews)</div> | <span className={` font-poppins text-opacity-60 ${product.inStock ? 'text-[#00FF66] ' : 'text-[#DB4444]'}`}>{product.inStock ? "In Stock": "Out of Stock"}</span>

                
            </div>

            <div className="font-inter text-2xl ">{formatePrice(product.price)}</div>

            <div className="font-poppins text-black">{product.description}</div>

            <hr className="my-2"/>

            {/* <div className="font-inter text-xl ">Colours:</div> */}
            <SetColor cartProduct={cartProduct} handleColorSelect={handleColorSelect} images={product.images}/>

            <SetSize product={product} handleSizeSelect={handleSizeSelect} cartProduct={cartProduct}/>
            </div>
        </div>
    );
};

export default ProductDetails;