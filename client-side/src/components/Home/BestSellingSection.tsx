import TopContent from "../shared/TopContent";
import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import useProducts from "@/hooks/useProducts";



const BestSellingSection = () => {

  const {products} = useProducts()
  const bestSellingProducts = products.filter(product=> product.bestSelling)
    return (
        <div className="my-12 relative">
            <div className="flex flex-col md:flex-row justify-between">
                    <TopContent heading="Best Selling Products" text="This Month" />
<Link to="" className="flex justify-center items-center mt-8"> <Button className="bg-[#DB4444] w-[149px]">View All</Button></Link>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
            
                {
                  bestSellingProducts.map((item, index)=> (
                    
                    <ProductCard key={index} item={item}/>
                  ))  
                }
            
                
               
            </div>
        </div>
    );
};

export default BestSellingSection;

