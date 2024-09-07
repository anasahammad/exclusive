import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="py-16 ">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center space-y-[40px] md:space-y-[80px] items-center">
                    <div className="font-inter text-[50px] md:text-[110px] font-medium">404 Not Found</div>

                    <div className="font-poppins">Your visited page not found. You may go home page.</div>

                    <Link to="/">
                <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm">Back to home page</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;