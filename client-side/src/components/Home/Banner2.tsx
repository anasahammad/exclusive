import { Button } from "../ui/button";
import bg2 from "../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
const times = [
    {
        number: "23",
        title : "Hours"
    },
    {
        number: "05",
        title : "Days"
    },
    {
        number: "59",
        title : "Minutes"
    },
    {
        number: "35",
        title : "Seconds"
    },
]
const Banner2 = () => {
    return (
        <div className="bg-[#000] max-h-[400px] flex flex-col md:flex-row justify-between px-[56px] py-12 my-16">
            {/* left content*/}
            <div className="">
                <h6 className="text-[#0F6] font-poppins font-semibold">Categories</h6>
                <h1 className="text-3xl md:text-5xl mt-8 font-inter md:leading-[60px] font-semibold text-white">Enhance Your <br /> Music Experience</h1>

                <div className="flex gap-6 my-6">
                    {
                        times.map(time=>{
                            return <div className="bg-white flex flex-col justify-center items-center font-poppins rounded-full   w-[62px] h-[62px]" key={time.number}>
                                <h6 className="font-semibold">{time.number}</h6>
                                <p className="text-xs">{time.title}</p>
                            </div>
                        })
                    }
                </div>

                <div>
                    <Button className="bg-[#0F6]">Buy Now</Button>
                </div>
            </div>

            {/* right content */}
            <div
            
             className="flex justify-center items-center   rounded-full   py-[45px] px-4">
                     <img className="w-[568px] h-[330px] " src={bg2} alt="" />
            </div>
        </div>
    );
};

export default Banner2;