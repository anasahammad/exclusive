interface SelectSizeProps {
    size: string;
    isSelected: boolean;
    onChange: (size: string) => void;
}

const SelectSize: React.FC<SelectSizeProps> = ({ size, isSelected, onChange }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto border-b-[1.2px] border-slate-200 items-center p-2">
            <div className="flex flex-row gap-2 items-center h-[60px]">
                <input
                    type="checkbox"
                    id={`size-${size}`}
                    className="cursor-pointer"
                    checked={isSelected}
                    onChange={() => onChange(size)}
                />
                <label htmlFor={`size-${size}`} className="font-medium cursor-pointer">
                    {size}
                </label>
            </div>
        </div>
    );
};

export default SelectSize;
