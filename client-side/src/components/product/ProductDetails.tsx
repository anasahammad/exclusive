import { useCallback, useState } from "react";
import ProductImage from "./ProductImage";

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
    selectedImg: ImgType
}
export type ImgType = {
  color: string,
  colorCode : string,
  productImage: string
}
const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        productName: product.productName,
        description: product.description,
        category: product.category,
        quantity: 1,
        price: product.price,
        selectedImg: {...product.images[0]} 
    })


    const handleColorSelect = useCallback((value: ImgType)=>{
            setCartProduct((prev)=>{
                return {...prev, selectedImg: value}
            })
    }, [cartProduct.selectedImg])
    console.log(cartProduct)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} handleColorSelect={handleColorSelect} product={product}/>
        </div>
    );
};

export default ProductDetails;