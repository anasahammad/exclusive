import ProductCard from "@/components/product/ProductCard";
import { ProductType } from "@/components/product/ProductDetails";
import { categories } from "@/utils/categories";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AllProducts = () => {
  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Single category
  
  const {
    data: products = []
  } = useQuery({
    queryKey: ["products", sort, selectedCategory],
    queryFn: async () => {
      const query = new URLSearchParams({
        sort,
        category: selectedCategory, // Single category selection
      });
      
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products?${query.toString()}`, {withCredentials: true});
      return res.data;
    },
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? "" : category));  
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="p-4">
          {/* Header Section: Category Filters and Sort Dropdown */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
            <h2 className="text-xl font-semibold uppercase font-poppins">ALL Products</h2>

            {/* Category Filters and Sort Dropdown */}
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-start lg:items-center">
              {/* Categories Filter Buttons */}
              <div className="flex  gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => handleCategoryChange(category.title)}
                    className={`border rounded p-2 ${
                      selectedCategory === category.title
                        ? "bg-[#DB4444] text-white" // Active state for 
                        : "bg-[#F5F5F5] "
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border rounded p-2 w-full lg:w-auto"
              >
                <option disabled value={""}>Sort by</option>
                <option value="low">Low to High Price</option>
                <option value="high">High to Low Price</option>
              </select>
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
