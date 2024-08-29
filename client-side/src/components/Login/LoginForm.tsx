import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const LoginForm = () => {

    
    return (
        <div className="md:w-[34%] px-4">
            
            <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl font-inter font-medium mb-6">Log in to Exclusive</h2>
            <p className="font-poppins">Enter your details below</p>

            <form action="" className="flex flex-col space-y-10 mt-8  ">
                

                <div>
                    <input name="email" type="text" placeholder="Email or Phone Number" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>
                </div>

                <div>
                    <input name="password" type="password" placeholder="Password" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>
                </div>

                <div className="flex justify-between items-center">
                <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins ">Log In</button>

               <div className="text-[#DB4444] font-poppins">Forget Password?</div>


                </div>
            </form>

            <button  className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium mt-8 flex justify-center items-center gap-2">  <FcGoogle style={{ color: '#4285F4' }} /> <span>Login with Google</span></button>

            <div className="font-poppins text-center text-base mt-8">
                <p className="inline">Don't have any account?</p> <Link className="underline " to="/sign-up">Sign Up</Link>
            </div>
            </div>
        </div>
    );
};

export default LoginForm;