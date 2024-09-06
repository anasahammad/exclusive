import FeatureItem from "@/components/Home/Featured/FeatureItem";

import { FiShoppingBag, FiDollarSign, FiUsers, FiCreditCard } from "react-icons/fi"; // Importing icons

const StatisticsCards = () => {
 
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
      <FeatureItem customHeadingStyle="text-[36px] mb-2 font-inter" customBoxStyle="border rounded-sm px-[35px] py-[32px] hover:bg-[#DB4444] hover:text-white " description="Sallers active our site" title="10.5k" icon={FiShoppingBag}  />

      <FeatureItem  customHeadingStyle="text-[36px] mb-2 font-inter"  customBoxStyle="border rounded-sm px-[35px] py-[32px] font-inter  hover:bg-[#DB4444] hover:text-white " description="Monthly Product Sale" title="33k" icon={FiDollarSign}  />

      <FeatureItem  customHeadingStyle="text-[36px] mb-2 font-inter"  customBoxStyle="border rounded-sm px-[35px] py-[32px] font-inter  hover:bg-[#DB4444] hover:text-white " description="Customer active in our site" title="45.5k" icon={FiUsers}  />

      <FeatureItem  customHeadingStyle="text-[36px] mb-2 font-inter"  customBoxStyle="border rounded-sm px-[35px] py-[32px] font-inter  hover:bg-[#DB4444] hover:text-white " description="Annual gross sale in our site" title="25k" icon={FiCreditCard}  />
    </section>
  );
};

export default StatisticsCards;
