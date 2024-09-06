
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps{
    src?: string | null | undefined
}
const Avatar: React.FC<AvatarProps> = ({src}) => {

    if(src){
        return <img src={src} alt="Avatat" height={30} width={30} className="rounded-full"/>
    }
    return <FaUserCircle size={24}/>
    
};

export default Avatar;