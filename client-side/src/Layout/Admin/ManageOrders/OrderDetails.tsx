import useOrders from "@/hooks/useOrders";
import { MdEmail, MdPerson, MdPhone, MdShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import OrderStatusForm from "./OrderStatusForm";


const OrderDetails = () => {
    const {id} = useParams()
    const {orders, isLoading} = useOrders()
    
    if(isLoading){
        return <div>Loading...</div>
    }
    const order = orders.find(item=> item.orderId === id)

    const {orderId, billingDetails, status,  createdAt, deliveryStatus} = order;
   
   
    return (
        <div className="container mx-auto py-8">
           <div className="">
            {/* Order Details Header */}
            <h1 className="text-3xl font-bold mb-6">Order Details: <span className="text-slate-800">#OrderId-{orderId}
                </span></h1>
            
            {/* Order Details Cards */}
            <div className="grid grid-cols-4 gap-4">
                
                {/* Order Created At */}
                <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="text-green-600">
                        <MdShoppingCart size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Order Created at</p>
                        <p className="text-lg">{new Date(createdAt).toLocaleDateString()} at {new Date(createdAt).toLocaleTimeString()}</p>
                    </div>
                </div>
                
                {/* Customer Name */}
                <div className="bg-red-100 p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="text-red-600">
                        <MdPerson size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Name</p>
                        <p className="text-lg">{billingDetails.name}</p>
                    </div>
                </div>

                {/* Email */}
                <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="text-yellow-600">
                        <MdEmail size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Email</p>
                        <p className="text-lg">{billingDetails.email}</p>
                    </div>
                </div>

                {/* Contact No */}
                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="text-blue-600">
                        <MdPhone size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Contact No</p>
                        <p className="text-lg">{billingDetails.phone}</p>
                    </div>
                </div>
            </div>

          
        </div>

        <div className="my-6 shadow-md p-4">
            <h2 className="text-3xl font-semibold">Billing Address</h2>

            <div className="mt-4">
                <div className="font-medium mb-2">Name: <span>{billingDetails.name}</span> </div>
                <div className="font-medium mb-2">Address: <span>{billingDetails.address}</span> </div>

                <div className="font-medium mb-2">Apartment: <span>{billingDetails?.apartment}</span> </div>
                <div className="font-medium mb-2">Town/City: <span>{billingDetails?.city}</span> </div>
            </div>
        </div>

            <OrderSummary order={order} />

            <div>
                <OrderStatusForm orderId={orderId} deliveryStatus={deliveryStatus} status={status}/>
            </div>
        </div>
    );
};

export default OrderDetails;