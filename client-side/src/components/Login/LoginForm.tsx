import useAuth from "@/hooks/useAuth";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

type FormValues = {
  
    email: string;
    password: string;
  };
const LoginForm = () => {
    const { register, handleSubmit, watch,getValues, formState: {errors} } = useForm<FormValues>();
    const {loginUser, googleLogin, resetPassword, user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
      const from = location?.state || "/";

  
    const  onSubmit: SubmitHandler<FormValues> = async  (data)=>{
        const {email, password} = data;
        console.log(data)
        
        loginUser(email, password)
        .then(()=>{
            // console.log("Login Successful")
            toast.success("Login Successful")
            navigate(from)
        }).catch(error=>{
            console.log(error)
           toast.error(`${error.message.replace('Firebase: Error (auth/', ' ').replace(/\)/, '')}`)
        }) 
    }


    const handleGoogle = ()=>{
        googleLogin()
        .then(()=>{
            toast.success("Login Successful")
            navigate(from)
        }).catch(error=>{
            console.log(error)
            toast.error(`${error.message.replace('Firebase: Error (auth/', ' ').replace(/\)/, '')}`)
        })
       
      }

      const handleForgotPassword =async ()=>{
        const email = getValues("email");

        
        if(!email){
            
           toast.error("Please enter your email address to reset your password")
            return
        }

        try{
           await resetPassword(email);
               toast.error("Password reset email sent! check your email")
                return
        } catch (error: any) {
            if (error.code === 'auth/user-not-found') {
              toast.error("No user found with this email address. Please check your email and try again.");
            } else {
              console.log(error);
              toast.error("An error occurred while trying to reset the password. Please try again later.");
            }
          }
      }
    return (
        <div className="md:w-[34%] px-4">
            
            <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl font-inter font-medium mb-6">Log in to Exclusive</h2>
            <p className="font-poppins">Enter your details below</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-10 mt-8  ">
                

                <div>
                <input  type="email" {...register("email", {  required: "Email is required", pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid Email address"
                    }}
              )}    placeholder="Email" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>

                    {errors.email && <p className="text-[#DB4444]"> {errors.email.message}</p>}
                </div>

                <div>
                    <input {...register('password', {required: true})} name="password" type="password" placeholder="Password" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>
                    {errors.password && <p className="text-[#DB4444]">Password is required to log in</p>}
                </div>

                <div className="flex justify-between items-center">
                <button type="submit" className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins ">Log In</button>

               <div onClick={handleForgotPassword} className="text-[#DB4444] font-poppins cursor-pointer">Forget Password?</div>


                </div>
            </form>

            <button onClick={handleGoogle}  className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium mt-8 flex justify-center items-center gap-2">  <FcGoogle style={{ color: '#4285F4' }} /> <span>Login with Google</span></button>

            <div className="font-poppins text-center text-base mt-8">
                <p className="inline">Don't have any account?</p> <Link className="underline " to="/sign-up">Sign Up</Link>
            </div>
            </div>
        </div>
    );
};

export default LoginForm;