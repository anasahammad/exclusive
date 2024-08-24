import { CartProductType, ColorsType,  } from "./ProductDetails";


interface SetColorProps{
    colors: ColorsType[];
    cartProduct: CartProductType;
    handleColorSelect : (value: ColorsType) =>void
}
const SetColor: React.FC<SetColorProps> = ({colors, cartProduct, handleColorSelect}) => {
    return (
        <div>
            <div className="flex items-center gap-4 mt-2">
                <span className="font-inter text-xl">Colours:</span> <div className="flex gap-1">
                    {
                        colors.map((color)=>{
                            return <div onClick={()=>handleColorSelect(color)} key={color.colorCode} className={`w-7 h-7 rounded-full flex items-center border-slate-900 justify-center ${cartProduct.SelectedColor.color === color.color ? 'border-2' : 'border-none'}`}>
                                    <div style={{background: color.color}}
                                className="w-5 h-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                            ></div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SetColor;