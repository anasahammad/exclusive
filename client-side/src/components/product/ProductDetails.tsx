import ProductImage from "./ProductImage";

interface ProductDetailsProps{
    product: any;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage product={product}/>
        </div>
    );
};

export default ProductDetails;