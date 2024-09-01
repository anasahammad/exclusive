
import { ColorsType } from "../product/ProductDetails"; 
import { FieldValues, UseFormRegister } from "react-hook-form";

interface SelectColorProps {
    item: ColorsType;
    handleChecked : (color: string, checked: boolean )=> void;
    register: UseFormRegister<FieldValues>;
   
}

const SelectColor: React.FC<SelectColorProps> = ({ item, handleChecked, register }) => {

    

  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto border-b-[1.2px] border-slate-200 items-center p-2">
            <div className="flex flex-row gap-2 items-center h-[60px]">
                <input
                    type="checkbox"
                    id={`color-${item.color}`}
                    className="cursor-pointer"
                    value={item.color}
                    {...register("colors", {
                        onChange: (e)=> handleChecked(item.color, e.target.checked)
                    })}
                />
                <label htmlFor={`color-${item.color}`} className="font-medium cursor-pointer">
                    {item.color}
                </label>
            </div>
        </div>
    );
};

export default SelectColor;
