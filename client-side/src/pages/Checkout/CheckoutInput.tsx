import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckoutInputProps{
    label: string,
    isRequired?: boolean,
    type: string,
    id: string,
    register: UseFormRegister<FieldValues>
}
const CheckoutInput: React.FC<CheckoutInputProps> = ({label, isRequired, type, id, register}) => {
    return (
       <div className="font-poppins">
         <label htmlFor={label} className="block text-opacity-40">{label}<span className="text-[#DB4444]">{isRequired ? <span>*</span>: ""}</span></label>
         <input {...register(id)} type={type} className="w-full h-[50px] mt-2 bg-[#F5F5F5] px-4"/>
       </div>
    );
};

export default CheckoutInput;