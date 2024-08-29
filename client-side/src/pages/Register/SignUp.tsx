import LoginImage from "@/components/SignUp/LoginImage";
import SignupForm from "@/components/SignUp/SignupForm";
import { useForm,  } from "react-hook-form";



const SignUp = () => {

   
   
    return (
        <div className="py-12">
            <div className="flex gap-3 flex-col md:flex-row justify-between pr-6">
                <LoginImage/>

                <SignupForm />
            </div>
        </div>
    );
};

export default SignUp;