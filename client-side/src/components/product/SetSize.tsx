import { CartProductType } from "./ProductDetails";

interface SetSizeProps{
    cartProduct: CartProductType;
    product : any;
    handleSizeSelect : (value: string)=>void
}

const SetSize: React.FC<SetSizeProps> = ({cartProduct,handleSizeSelect, product }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="font-inter text-xl">Size:</span> <div className="flex gap-2">
                {
                    product.sizes.map((item : string,index : any)=>{
                        return <div onClick={()=>handleSizeSelect(item)} key={index} className={`border border-[#00000080] text-sm font-medium font-poppins w-7 h-7 cursor-pointer flex justify-center items-center rounded-sm ${cartProduct.size === item ? "bg-[#DB4444] text-white" : ''}`}>
                            <div>{item}</div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SetSize;