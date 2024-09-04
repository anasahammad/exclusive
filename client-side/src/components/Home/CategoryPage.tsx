import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../product/ProductCard";


const CategoryPage = () => {
    const {category} = useParams()
 
  const {data: categoryProducts = []} = useQuery({
    queryKey: ["categoryProducts, category"],
    queryFn: async ()=>{
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/product-category/${category}`)
      return response.data;
    }
  })



  if(!categoryProducts || categoryProducts?.length === 0){
    return <div className="w-full h-screen flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center space-y-12">
            <div className="font-inter text-4xl font-medium">
                No Products Available in this {category} Category
            </div>
            <div>
            <Link to="/">
            <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Start Shopping</button></Link>
            </div>
            </div>
    </div>
}
    return (
        <div className="py-12">
           <div className="container mx-auto">
           <div className="flex justify-between items-center">
                    <div className="font-poppins text-xl ">{category} ({categoryProducts?.length})</div>
                    <Link to="/">
          <button className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium">Move to Home</button>
          </Link>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                    {categoryProducts?.map(item=>{
                        return <ProductCard  key={item._id} item={item}/>
                    })}
                </div>
           </div>
        </div>
    );
};

export default CategoryPage;