import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface categoryType{
    title: string,
    subcategories?: string[]
}
const categories: categoryType[] = [
    {
        title: "Woman's Fashion",
        subcategories: ["Clothing","Accessories","Shows"]
    },
    {
        title: "Man's Fashion",
        subcategories: ["Clothing", "Accessories"]
    },
    {
        title: "Electronics",
        
    },
    {
        title: "Home & Lifestyle",
        
    },
    {
        title: "Medicine",
        
    },
    {
        title: "Sports & Outdoor",
        
    },
    {
        title: "Baby's & Toys",
        
    },
    {
        title: "Groceries & Pets",
        
    },
    {
        title: "Health & Beauty",
        
        
    },

]
const CategorySection = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null)

   
    return (
        <div className="relative">

        <div className="w-[220px] border-r-2 pr-2">
             <ul className="space-y-4 font-poppins text-[#000]">
        {categories.map((item, index) => (
          <li className="flex items-center  justify-between" key={index}>
           <Link to="/"> {item.title}</Link>
            {item.subcategories && (
           
            <span  onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}>
                <FaChevronRight
               
                
                 className="cursor-pointer"/>
                  
                  {openIndex === index && item.subcategories && <div className=" h-auto top-0 -left-4  p-4 w-[200px] absolute bg-white shadow-md ">
                  <ul>
                 {item.subcategories.map((sub, subIndex) => (
                   <li key={subIndex}>
                    <Link to="/">{sub}</Link>
                   </li>
                 ))}
               </ul>
                  </div> }
                 
            </span>
            )}
          </li>
        ))}
      </ul>
        </div>
        </div>
    );
};

export default CategorySection;