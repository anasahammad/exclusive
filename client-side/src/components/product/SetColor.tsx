import { CartProductType, ImgType } from "./ProductDetails";


interface SetColorProps{
    images: ImgType[];
    cartProduct: CartProductType;
    handleColorSelect : (value: ImgType) =>void
}
const SetColor: React.FC<SetColorProps> = ({images, cartProduct, handleColorSelect}) => {
    return (
        <div>
            <div className="flex items-center gap-4">
                <span className="font-inter text-xl">Colours:</span> <div className="flex gap-1">
                    {
                        images.map((image)=>{
                            return <div onClick={()=>handleColorSelect(image)} key={image.color} className={`w-7 h-7 rounded-full flex items-center border-slate-900 justify-center ${cartProduct.selectedImg.color === image.color ? 'border-2' : 'border-none'}`}>
                                    <div style={{background: image.color}}
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