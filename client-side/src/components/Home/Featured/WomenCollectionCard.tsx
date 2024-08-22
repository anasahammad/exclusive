import React from 'react';

interface WomenCollectionCardProps {
  image: string;
  title: string;
  text: string;
  
}

const WomenCollectionCard: React.FC<WomenCollectionCardProps> = ({ title, image, text }) => {
  return (
    <div
      className={`bg-[#0D0D0D] px-[30px] 
        pt-[120px]
       pb-[30px] flex flex-col md:flex-row items-center justify-between relative rounded-sm`}
      style={{ backgroundImage: `url(${image})`, backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}
    >
      <div className="text-[#FAFAFA] space-y-2 md:max-w-[50%]">
        <h4 className="font-inter text-2xl font-semibold">{title}</h4>
        <p className="font-poppins">{text}</p>
        <button className="border-b-2 border-[#FAFAFA] border-op">Shop Now</button>
      </div>
     
    </div>
  );
};

export default WomenCollectionCard;
