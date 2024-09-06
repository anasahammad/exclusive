import { useState } from "react";

// import ReactImageMagnify from 'react-image-magnify';
interface ProductImageProps{
    // cartProduct : CartProductType;
    product: any;
    // handleImageSelect : (value:string) => void
}

const ProductImage: React.FC<ProductImageProps> = ({product  }) => {

    const [selectedImg, setSelectedImage] = useState<string>(product.images[0].productImage)

    const handleImageChange = (image: string)=>{
        setSelectedImage(image)
    }
    return (
        <div className="grid grid-cols-5 gap-2 space-x-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div  className="flex flex-col items-center justify-center gap-6 cursor-pointer  h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {
                    product.images.map((image: string, index:number)=>{
                        return <div onClick={()=> handleImageChange(image.productImage)} key={index} className={`relative aspect-square w-[90%] p-2 rounded border-[#DB4444] ${image.productImage === selectedImg ? 'border-[1.5px] border-[#DB4444]': 'border-none'} bg-[#F5F5F5]`}>
                            
                            <img src={image.productImage} className="object-contain " alt="" />
                        </div>
                    })
                }
            </div>
            <div className="col-span-4 bg-[#F5F5F5] relative aspect-square py-10 px-4">
                <img src={selectedImg}
                  alt=""  className="object-contain  w-full h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px] "/>

{/* <div className="w-full h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px] z-10">
<ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: selectedImg,
                            },
                            largeImage: {
                                src: selectedImg,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '150%',
                                height: '150%',
                            },
                            
                        }}
                    />
</div> */}
            </div>
        </div>
    );
};

export default ProductImage;