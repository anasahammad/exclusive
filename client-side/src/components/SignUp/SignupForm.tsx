import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { sendEmailVerification,  updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import toast from "react-hot-toast";


type FormValues = {
    name: string;
    email: string;
    phone: string;
    password: string;
  };
const SignupForm = () => {
    
    const {createUser, googleLogin} = useAuth()
    const navigate = useNavigate()
    
    const { register, handleSubmit, watch, formState: {errors} } = useForm<FormValues>();

    const  onSubmit: SubmitHandler<FormValues> = async  (data)=>{
        const {name, email, phone, password} = data;
        console.log(data)
         
        
         createUser(email, password)
         .then(result=>{
            console.log(result.user)
            toast.success("Account Created Successfully")

            sendEmailVerification(result.user)
            .then(()=>{
                toast.success("Check your email and verify your account")
                navigate("/")
            })

            updateProfile(result.user, {
                displayName: name,
                photoURL: ''
                
            })
            
           
             
         }).catch((error: FirebaseError)=>{
            console.log(error)
            toast.error(error.message)
            return
        })
         
           
    }

    return (
        <div className="md:w-[34%] px-4">
            
            <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl font-inter font-medium mb-6">Create an account</h2>
            <p className="font-poppins">Enter your details below</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-10 mt-8  ">
                <div> 
                    <input  {...register('name', {required: true})}  type="text" placeholder="Name" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>

                    {errors.name && <p className="text-red-600">Name is Required</p>}
                </div>

                <div>
                    <input type="email" {...register("email", {  required: "Email is required", pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid Email address"
                    }}
              )}    placeholder="Email" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>

                    {errors.email && <p className="text-[#DB4444]"> {errors.email.message}</p>}
                </div>

                <div>
                    <input type="text" {...register("phone", {  required: "Phone Number needed", validate: (value)=>{
                        if(value && value.length !== 11 ){
                            return "Phone number must be 11 digits"
                        }
                        return true
                    } }
              )}    placeholder="Phone Number" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>

                    {errors.phone && <p className="text-[#DB4444]"> {errors.phone.message}</p>}
                </div>

                <div>
                    <input {...register('password',  {required: "Password is required", minLength:{
                        value: 6,
                        message: "Password must be 6 characters"
                    },
                    validate: {
                        upperCase : (value)=>/[A-Z]/.test(value) || "Password must have at least one uppercase letter",
                        lowerCase: (value)=> /[a-z]/.test(value) || "Password must have at least one small letter",
                        
                    }
                    })} name="password" type="password" placeholder="Password" className="w-full  outline-none border-b-2 pb-2 border-black border-opacity-50"/>

                    {errors.password && <p className="text-[#DB4444]">{errors.password.message}</p>}
                </div>

                <button type="submit" className="px-6 md:px-12 py-[10px]  bg-[#DB4444] text-white rounded-sm font-poppins ">Create Account</button>
                
            </form>

            <button onClick={()=>{googleLogin().then(result=>{
                 console.log(result.user);
                 navigate("/")
            }
           
            ).catch(error=>{
                console.log(error)
            })
            
                }
            } className="px-6 md:px-12 py-[10px]  border-[1.5px] border-[#00000066] rounded-sm font-poppins font-medium mt-8 flex justify-center items-center gap-2">  <FcGoogle style={{ color: '#4285F4' }} /> <span>Sign up with Google</span></button>

            <div className="font-poppins text-center text-base mt-8">
                <p className="inline">Already have account?</p> <Link className="underline " to="/login">Log in</Link>
            </div>
            </div>
        </div>
    );
};

export default SignupForm;