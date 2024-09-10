import { Button } from "../ui/button";
import bg2 from "../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

const times = [
  {
    number: "23",
    title: "Hours",
  },
  {
    number: "05",
    title: "Days",
  },
  {
    number: "59",
    title: "Minutes",
  },
  {
    number: "35",
    title: "Seconds",
  },
];

const Banner2 = () => {
  return (
    <div className="bg-[#000] flex flex-col md:flex-row justify-between md:px-[56px] py-12 my-16">
      {/* Left content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
        <h6 className="text-[#0F6] font-poppins font-semibold">Categories</h6>
        <h1 className="text-3xl md:text-5xl mt-8 font-inter md:leading-[60px] font-semibold text-white">
          Enhance Your <br /> Music Experience
        </h1>

        <div className="flex gap-4 md:gap-6 my-6 justify-center md:justify-start">
          {times.map((time) => {
            return (
              <div
                className="bg-white flex flex-col justify-center items-center font-poppins rounded-full w-[48px] h-[48px] md:w-[62px] md:h-[62px]"
                key={time.number}
              >
                <h6 className="font-semibold text-base md:text-lg">
                  {time.number}
                </h6>
                <p className="text-xs">{time.title}</p>
              </div>
            );
          })}
        </div>

        <div>
          <Button className="bg-[#0F6] w-[150px] md:w-[180px] text-sm md:text-base">
            Buy Now
          </Button>
        </div>
      </div>

      {/* Right content */}
      <div className="flex justify-center items-center mt-8 md:mt-0 px-4 md:px-0">
        <img
          className="w-[320px] h-[200px] md:w-[568px] md:h-[330px] object-cover"
          src={bg2}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner2;
