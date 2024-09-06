
import OurStorySection from './OurStorySection';
import StatisticsCards from './StatisticsCard';
import TeamCard from './TeamCard';
import tom from "../../assets/tom.png"
import ema from "../../assets/ema.png"
import smith from "../../assets/smith.png"
import FeatureItem from '@/components/Home/Featured/FeatureItem';
import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUndoAlt } from "react-icons/fa";
const About = () => {

    const teamMembers = [
        {
          name: 'Tom Cruise',
          role: 'Founder & Chairman',
          imgSrc: tom , 
        },
        {
          name: 'Emma Watson',
          role: 'Managing Director',
          imgSrc: ema,
        },
        {
          name: 'Will Smith',
          role: 'Product Designer',
          imgSrc: smith, 
        },
      ];
    return (
        <div className='py-12'>
           <OurStorySection/>

           <StatisticsCards/>
           <div className="flex flex-col md:flex-row justify-center gap-6 py-10">
      {teamMembers.map((member) => (
        <TeamCard key={member.name} name={member.name} role={member.role} imgSrc={member.imgSrc} />
      ))}
    </div>

    <div className="flex flex-col md:flex-row justify-between gap-8 py-8 md:px-36">
        <FeatureItem description="Free delivery for all orders over $140" title="FREE AND FAST DELIVERY" icon={FaTruckFast}/>
        <FeatureItem description="Friendly 24/7 customer support" title="24/7 CUSTOMER SERVICE" icon={BiSupport}/>
        <FeatureItem description="We reurn money within 30 days" title="MONEY BACK GUARANTEE" icon={FaUndoAlt}/>
</div>
        </div>
    );
};

export default About;