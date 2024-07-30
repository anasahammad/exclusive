

const TopContent = ({text, heading}: {text: string, heading: string}) => {
    return (
        <div>
            <div className="flex items-center gap-4">
            <div className="w-[20px] h-[40px] bg-[#DB4444]">
                  
                  </div>
                  <p className="text-[#DB4444] font-poppins font-semibold ">{text}</p>
                    
            </div>
            <h1 className="font-inter text-4xl font-semibold mt-6">{heading}</h1>
        </div>
    );
};

export default TopContent;