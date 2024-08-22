import TopContent from "../shared/TopContent";
import item2 from "../../assets/bag.png";
import item1 from "../../assets/switter.png";
import item3 from "../../assets/grammax.png";
import item4 from "../../assets/sam-mog.png";

import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const products = [
    {
        productName : 'The north coat',
        price: 260,
        prevPrice: 360,
        starRatings: 5,
        ratings: 65,
        images: [
            {   
                color: 'red',
                productImage : item1,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item1,
                colorCode: "#DB4444"
            },
  
        ]


    },
    {
        productName : 'Gucci duffle bag',
        price: 960,
        prevPrice: 1160,
        starRatings: 4.5,
        ratings: 65,
        images: [
            {   
                color: 'red',
                productImage : item2,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item2,
                colorCode: "#DB4444"
            },
  
        ]


    },
    {
        productName : 'RGB liquid CPU Cooler',
        price: 160,
        prevPrice: 170,
        starRatings: 4.5,
        ratings: 65,
        images: [
            {   
                color: 'red',
                productImage : item3,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item3,
                colorCode: "#DB4444"
            },
  
        ]


    },
    {
        productName : 'Small BookSelf',
        price: 375,
        starRatings: 4.5,
        ratings: 65,
        images: [
            {   
                color: 'red',
                productImage : item4,
                colorCode: "#DB4444"
            },
            {   
                color: 'white',
                productImage : item4,
                colorCode: "#DB4444"
            },
  
        ]


    },
]


const BestSellingSection = () => {
    return (
        <div className="my-12 relative">
            <div className="flex flex-col md:flex-row justify-between">
                    <TopContent heading="Best Selling Products" text="This Month" />
<Link to="" className="flex justify-center items-center mt-8"> <Button className="bg-[#DB4444] w-[149px]">View All</Button></Link>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
            
                {
                  products.map((item, index)=> (
                    
                    <ProductCard key={index} item={item}/>
                  ))  
                }
            
                
               
            </div>
        </div>
    );
};

export default BestSellingSection;

