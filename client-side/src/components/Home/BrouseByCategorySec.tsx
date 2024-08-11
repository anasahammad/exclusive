import { categories } from "@/utils/categories";
import TopContent from "../shared/TopContent";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { SlickNextArrow, SlickPrevArrow } from "@/utils/CustomizeArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SlickNextArrow/>,
    prevArrow: <SlickPrevArrow/>,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
const BrouseByCategorySec = () => {
    return (
        <div className="my-12 relative">
                <div className="">
                    <TopContent heading="Browse By Category" text="Categories" />
                </div>

                <div className=" ">
                    <Slider {...settings}>
                        {
                            categories?.map((item, index)=>{
                                return <CategoryCard  key={index} title={item.title} icon={item.icon}/>
                            })
                        }
                        </Slider>
                </div>
        </div>
    );
};

export default BrouseByCategorySec;