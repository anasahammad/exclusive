import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Link } from "react-router-dom";

interface OrderContentProps{
    item: any;
    isLoading: boolean
}
const OrderContent: React.FC<OrderContentProps> = ({item, isLoading}) => {
    
    if(isLoading){
        return <LoadingSpinner/>
    }
    return (
        <div style={{boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)'}} className="grid font-poppins md:grid-cols-4 gap-4 px-[42px] py-6 font-poppins items-center">
            <div className="col-span-2   md:justify-self-start ">
                {
                    item.products.map((product: any, index: number)=>{
                        return <div key={index} className="flex  items-center gap-6 ">
<div className="w-[60px] aspect-square group">
                    <img src={ product.image} alt="" />

                </div>
                
                <div className="space-y-1 mb-4">
                        <Link to={`/details/${product._id}`} className="hover:underline"><h5>{product.productName}</h5></Link>
                        <div className="flex gap-4 font-medium text-sm">
                            <p>${product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Size: {product.size}</p>
                        </div>

                        <div className="text-sm">
  Date: <span className="text-slate-700">{new Date(item.createdAt).toLocaleDateString('en-US', {
    weekday: 'short', 
    year: 'numeric',    
    month: 'short',    
    day: 'numeric',
    timeZone: 'Asia/Dhaka'      
  })}</span>
</div>

<div className="text-sm">Payment: <span className="text-slate-700 uppercase">{item.paymentMethod}</span></div>
                </div>
                        </div>
                    })
                }
                
            </div>
            <div className="justify-self-center flex items-center gap-2">
            <span className={`w-2.5 h-2.5  rounded-full ${item.status === "pending" ? "bg-orange-500": "bg-green-500"}`}></span>
                {item.status}</div>
            <button className="justify-self-end px-4 py-2 border rounded-sm">Track Order</button>
        </div>
    );
};

export default OrderContent;