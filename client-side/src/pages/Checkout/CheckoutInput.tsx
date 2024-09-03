import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckoutInputProps {
  label: string;
  isRequired?: boolean;
  type: string;
  id: string;
  register: UseFormRegister<FieldValues>;
}

const CheckoutInput: React.FC<CheckoutInputProps> = ({ label, isRequired = false, type, id, register }) => {
  return (
    <div className="font-poppins">
      <label htmlFor={id} className="block text-opacity-40">
        {label}
        {isRequired && <span className="text-[#DB4444]">*</span>}
      </label>
      <input
        {...register(id, { required: isRequired })}
        type={type}
        id={id}
        className="w-full h-[50px] mt-2 bg-[#F5F5F5] px-4"
      />
    </div>
  );
};

export default CheckoutInput;
