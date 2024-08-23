import ProductDetails from "@/components/product/ProductDetails";
import { products } from "@/utils/Products";
import { useParams } from "react-router-dom";



const ProductDetailsPage = () => {
    const {id} = useParams()
    const product = products.find(item=> item.id === id)
    return (
        <div className="container mx-auto">
            
             <ProductDetails product={product}/>
        </div>
    );
};

export default ProductDetailsPage;