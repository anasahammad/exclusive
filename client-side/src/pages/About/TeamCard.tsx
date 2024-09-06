import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


interface TeamCardProps{
    role: string;
    name: string;
    imgSrc: string;
}
const TeamCard: React.FC<TeamCardProps> = ({role, name, imgSrc}) => {
    return (
        <div className="  rounded-sm  overflow-hidden">
      <div className="bg-[#F5F5F5] px-[67px] pt-[37px]">
      <img className="w-full h-72 object-cover " src={imgSrc} alt={`${name}`} />
      </div>
      <div className="py-6 px-4">
        <h3 className="text-3xl font-medium font-inter">{name}</h3>
        <p className="font-poppins">{role}</p>
        <div className="flex  mt-4 space-x-4">
          <a href="#">
            <FaTwitter className=" hover:text-blue-400" />
          </a>
          <a href="#">
            <FaInstagram className=" hover:text-pink-400" />
          </a>
          <a href="#">
            <FaLinkedin className=" hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
    );
};

export default TeamCard;