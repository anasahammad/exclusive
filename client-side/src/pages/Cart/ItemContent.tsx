import { CartProductType } from "@/components/product/ProductDetails";


interface ItemContentProps{
    item: CartProductType;
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className=" justify-self-start flex gap-2">
                <div className="relative w-[54px] aspect-square">
                    <img src={item?.images[0].productImage} alt={item.productName} className="object-contain" />
                </div>
            </div>
        </div>
    );
};

export default ItemContent;