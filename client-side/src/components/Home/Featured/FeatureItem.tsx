import { IconType } from "react-icons";


interface FeatureItemProps{
    icon: IconType;
    title: string;
    description: string;
}
const FeatureItem: React.FC<FeatureItemProps> = ({ icon:  Icon , title, description }) => {
    return (
      <div className="flex flex-col items-center text-center font-poppins">
        <div className="rounded-full p-4 border-8 border-slate-300 bg-black text-white">
        
            <Icon className="w-10 h-10"/>
        </div>
        <h4 className="mt-4 font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    );
  };

  export default FeatureItem;