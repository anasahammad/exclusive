import CountTimer from "../CountTimer";
import TopContent from "../shared/TopContent";


const FlashSaleSec = () => {
    return (
        <div className="my-12">
            <div className="flex flex-col md:flex-row items-center gap-16">
            <TopContent text="Today's" heading="Flash Sales"/>
            <CountTimer endTime="2024-08-25T23:59:59"/>
            </div>
        </div>
    );
};

export default FlashSaleSec;