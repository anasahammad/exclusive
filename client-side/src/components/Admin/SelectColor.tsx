import { ColorsType } from "../product/ProductDetails"; 


interface SelectColorProps {
    item: ColorsType;
    handleChecked: (colorItem: { color: string; colorCode: string }, checked: boolean) => void;
   
}

const SelectColor: React.FC<SelectColorProps> = ({ item, handleChecked }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto border-b-[1.2px] border-slate-200 items-center p-2">
            <div className="flex flex-row gap-2 items-center h-[60px]">
                <input
                    type="checkbox"
                    id={`color-${item.color}`}
                    className="cursor-pointer"
                    value={item.color}
                    onChange={(e) => handleChecked(item, e.target.checked)}
                />
                <label htmlFor={`color-${item.color}`} className="font-medium cursor-pointer">
                    {item.color}
                </label>
            </div>
        </div>
    );
};


export default SelectColor;
