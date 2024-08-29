import LoginForm from "@/components/Login/LoginForm";
import LoginImage from "@/components/SignUp/LoginImage";


const Login = () => {
    return (
        <div className="py-12">
            <div className="flex gap-3 flex-col md:flex-row justify-between pr-6">
                <LoginImage/>

                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;