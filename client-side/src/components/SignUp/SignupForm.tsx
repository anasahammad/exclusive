import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const SignupForm = () => {
    return (
        <div className="w-[34%]">
            
            <div className="flex flex-col">
            <h2 className="text-4xl font-inter font-medium mb-6">Create an account</h2>
            <p className="font-poppins">Enter your details below</p>

            <form action="" className="flex flex-col space-y-10 mt-8  ">
                <div>
                    <input name="name" type="text" placeholder="Name" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>
                </div>

                <div>
                    <input name="email" type="text" placeholder="Email or Phone Number" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>
                </div>

                <div>
                    <input name="password" type="password" placeholder="Password" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>
                </div>

                <button className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins ">Create Account</button>
            </form>

            <button  className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium mt-8 flex justify-center items-center gap-2">  <FcGoogle style={{ color: '#4285F4' }} /> <span>Sign up with Google</span></button>

            <div className="font-poppins text-center text-base mt-8">
                <p className="inline">Already have account?</p> <Link className="underline " to="/login">Log in</Link>
            </div>
            </div>
        </div>
    );
};

export default SignupForm;