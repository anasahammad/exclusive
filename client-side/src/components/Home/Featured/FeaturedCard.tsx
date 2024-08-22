import React from 'react';

interface FeaturedCardProps {
  image: string;
  title: string;
  text: string;
 
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ image, title, text,  }) => {
  return (
    <div className={`bg-black px-[30px] pt-[80px] pb-[20px] rounded-sm`}>
      <div className="aspect-square relative overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />

        <div className="text-[#FAFAFA] absolute bottom-8 left-4 right-4 space-y-2">
          <h4 className="font-inter text-2xl font-semibold">{title}</h4>
          <p className="font-poppins">{text}</p>
          <button className="border-b-2 border-[#FAFAFA] ">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
