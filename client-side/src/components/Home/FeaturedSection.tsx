import TopContent from "../shared/TopContent";
import FeaturedCard from "./Featured/FeaturedCard";
import playStationImg from "../../assets/ps5-slim-goedkope-playstation_large 1.png"

import featuredWoman from "../../assets/featuredImage.png"
import speakerImg from "../../assets/speakers.png"
import perfumeImg from "../../assets/perfume.png"
import WomenCollectionCard from "./Featured/WomenCollectionCard";
import FeatureItem from "./Featured/FeatureItem";
import { FaTruckFast } from "react-icons/fa6";

import { BiSupport } from "react-icons/bi";
import { FaUndoAlt } from "react-icons/fa";

const FeaturedSection = () => {
    return (
        <div className="my-12">
                <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Featured" heading="New Arrival"/>
          
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 my-12">
  {/* Left Card: PlayStation 5 */}
  <div className="w-full md:w-1/2">
    <FeaturedCard
      title="PlayStation 5"
      text="Black and White version of the PS5 coming out on sale."
      image={playStationImg}
    />
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 flex flex-col gap-4">
    {/* Top Card: Women’s Collections */}
    <div className="w-full">
      <WomenCollectionCard
        title="Women’s Collections"
        text="Featured woman collections that give you another vibe."
        image={featuredWoman}
      />
    </div>

    {/* Bottom Row: Speakers and Perfume */}
    <div className="flex gap-4">
      <div className="w-1/2">
        <FeaturedCard
          title="Speakers"
          text="Amazon wireless speakers"
          image={speakerImg}
          
        />
      </div>
      <div className="w-1/2">
        <FeaturedCard
          title="Perfume"
          text="GUCCI INTENSE OUD EDP"
          image={perfumeImg}
          
        />
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row justify-between gap-8 py-8 md:px-36">
        <FeatureItem description="Free delivery for all orders over $140" title="FREE AND FAST DELIVERY" icon={FaTruckFast}/>
        <FeatureItem description="Friendly 24/7 customer support" title="24/7 CUSTOMER SERVICE" icon={BiSupport}/>
        <FeatureItem description="We reurn money within 30 days" title="MONEY BACK GUARANTEE" icon={FaUndoAlt}/>
</div>

        </div>
    );
};

export default FeaturedSection;