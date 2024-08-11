
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slider from "react-slick";

const BannerSection = () => {
  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
    return (
       <div className="md:w-[77%]">

        {/* <Slide1/> */}
         <div className=" slider-container">
           <Slider {...settings}>
           <div>
           <Slide1/>
           </div>

           <div>

           <Slide2/>
           </div>
           </Slider>
         
         

        </div>
       </div>
    );
};

export default BannerSection;