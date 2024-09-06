import { IconType } from "react-icons";


interface FeatureItemProps{
    icon: IconType;
    title: string;
    description: string;
    customBoxStyle?: string;
    customIconStyle?: string;
    customHeadingStyle?: string;
}
const FeatureItem: React.FC<FeatureItemProps> = ({ icon:  Icon , title, description, customBoxStyle, customIconStyle, customHeadingStyle }) => {
    return (
      <div className={`flex  flex-col items-center text-center font-poppins ${customBoxStyle}`}>
        <div className={`rounded-full p-4 border-8 border-slate-300 bg-black text-white ${customIconStyle}`}>
        
            <Icon className={`w-10 h-10 `}/>
        </div>
        <h4 className={`mt-4 font-semibold text-lg ${customHeadingStyle}`}>{title}</h4>
        <p className="text-sm ">{description}</p>
      </div>
    );
  };

  export default FeatureItem;