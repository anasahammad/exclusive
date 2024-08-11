import BestSellingSection from "@/components/Home/BestSellingSection";
import BrouseByCategorySec from "@/components/Home/BrouseByCategorySec";
import FlashSaleSec from "@/components/Home/FlashSaleSec";
import BannerSection from "@/components/Home/Hero/BannerSection";
import CategorySection from "@/components/Home/Hero/CategorySection";


const Home = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex gap-10 flex-col md:flex-row">
                <CategorySection/>
                <BannerSection/>
            </div>

            <FlashSaleSec/>
            <BrouseByCategorySec/>
            <BestSellingSection/>
        </div>
    );
};

export default Home;