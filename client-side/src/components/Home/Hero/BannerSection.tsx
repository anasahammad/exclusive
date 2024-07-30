
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const BannerSection = () => {
    return (
        <div className="">
          <Slide1/>
          {/* <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Slide1/></SwiperSlide>
        <SwiperSlide><Slide2/></SwiperSlide>
        <SwiperSlide><Slide1/></SwiperSlide>
        
      </Swiper> */}

        </div>
    );
};

export default BannerSection;