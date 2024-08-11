import { IconType } from "react-icons";

interface CategoryCardProps{
    title: string;
    icon: IconType;
}

const CategoryCard: React.FC<CategoryCardProps> = ({title, icon:Icon}) => {
    return (
        <div className="flex mt-12 mr-4 flex-col items-center justify-center gap-3 col-span-1 px-[55px] py-5 border border-[#0000004d] rounded-sm cursor-pointer">
            <Icon size={30}/>
            <div>{title}</div>
        </div>
    );
};

export default CategoryCard;