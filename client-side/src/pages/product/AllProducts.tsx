import ProductCard from "@/components/product/ProductCard";
import { ProductType } from "@/components/product/ProductDetails";
import useProducts from "@/hooks/useProducts";
import { categories } from "@/utils/categories";
import { Link } from "react-router-dom";


const AllProducts = () => {

    const {products} = useProducts()
    return (
        <div className="py-12">
            <div className="container mx-auto">
            <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold uppercase font-poppins">ALL Products</h2>
        <select className="border rounded p-2">
          <option>Sort by: Relevant</option>
          <option>Low to High Price</option>
          <option>High to Low Price</option>
          
        </select>
      </div>

      <div className="flex mt-4 font-poppins">
        <div className="w-1/5 p-2 ">
          <h3 className="font-semibold mb-2">FILTERS</h3>
          <div className="mb-4 border p-4">
            <h4 className="font-semibold mb-2">CATEGORIES</h4>
            <div className="flex flex-col">
                {categories.map(category=> {
                    return <>
                     <label>
                <input type="checkbox" className="mr-2" />
                {category.title}
              </label>
                    </>
                })}
             
              
            </div>
          </div>

          <div className="mb-4 border p-4">
            <h4 className="font-semibold mb-2">TYPE</h4>
            <div className="flex flex-col">
              <label>
                <input type="checkbox" className="mr-2" />
                Best Selling
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                New Products
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
               Old Products
              </label>
            </div>
          </div>
        </div>
        <div className="w-4/5 grid grid-cols-3 space-y-4 space-x-4 ">
          {products.map((product: ProductType) => (
            <ProductCard item={product}/>
          ))}
        </div>
        </div>
            </div>
        </div>
        </div>
    );
};

export default AllProducts;