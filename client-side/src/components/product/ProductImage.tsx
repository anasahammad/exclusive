interface ProductImageProps{
    product: any;
}

const ProductImage: React.FC<ProductImageProps> = ({product}) => {
    return (
        <div className="grid grid-cols-5 gap-2 space-x-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center gap-6 cursor-pointer  h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {
                    product.images.map((image)=>{
                        return <div key={image.color} className="relative aspect-square p-2 rounded border-teal-300 border-[1.5px] bg-[#F5F5F5]">
                            
                            <img src={image.productImage} className="object-contain" alt="" />
                        </div>
                    })
                }
            </div>
            <div className="col-span-4 bg-[#F5F5F5] relative aspect-square py-10 px-4">
                <img src={product.images[0].productImage}  alt=""  className="object-contain  w-full h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px]"/>
            </div>
        </div>
    );
};

export default ProductImage;