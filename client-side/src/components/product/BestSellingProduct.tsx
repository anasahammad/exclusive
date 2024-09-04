import useProducts from "@/hooks/useProducts";
import { ProductType } from "./ProductDetails";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";


const BestSellingProduct = () => {

    const {products} = useProducts()
  const bestSellingProducts = products.filter((product: ProductType)=> product.bestSelling)

    return (
        <div className="py-12">
            <div className="container mx-auto">
            <div className="flex justify-between items-center">
                    <div className="font-poppins text-xl ">Best Selling Products ({bestSellingProducts?.length})</div>
                    <Link to="/">
          <button className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium">Move to Home</button>
          </Link>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                    {bestSellingProducts?.map((item: ProductType)=>{
                        return <ProductCard  key={item._id} item={item}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default BestSellingProduct;