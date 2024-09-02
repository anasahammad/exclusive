import { auth } from "@/firebase/firebase.config";
import axios from "axios";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword,  signInWithPopup,  signOut,  User, UserCredential } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

interface AuthProviderProps{
    children: React.ReactNode;
}

export type AuthContextType = {
    createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword : (email: string)=> Promise<void>;
  emailVerification : ()=> Promise<void> | undefined;
  user: User | null;
  loading: boolean;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const googleProvider = new GoogleAuthProvider()
const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
const [user, setUser] = useState<User | null>(null)
const [loading, setLoading] = useState(true)

    const createUser = (email: string, password: string)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const loginUser = (email: string, password: string)=>{
        return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
   }

   const logout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_BASE_URL}/logout`, { withCredentials: true });
    } catch (error) {
      console.error("Error logging out from server:", error);
    } finally {
      await signOut(auth);
    }
  };
  

   const emailVerification = ()=>{
    if(auth.currentUser !== null){
        return sendEmailVerification(auth.currentUser)
    }
    return undefined
   }
   const resetPassword = (email: string)=>{
    return sendPasswordResetEmail(auth, email)
   }


   const getToken = async email=>{
    const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`, {email}, {withCredentials: true})
    return data;
   }

   const saveUser = async user=>{
        const currentuser = {
            email: user?.email,
            role: 'user',
            status: 'verified'
        }

        const {data} = await axios.put(`${import.meta.env.VITE_BASE_URL}/user`, currentuser)
        return data;
   }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            
           if(currentUser){
            setUser(currentUser)
            console.log(currentUser)
            getToken(currentUser.email)
            saveUser(currentUser)
            setLoading(false)
           } else{
            setUser(null)
           }
           setLoading(false)
        })

        return ()=>  unSubscribe()
    }, [])
    const authInfo = {
        createUser,
        user,
        loading,
        setLoading,
        loginUser,
        googleLogin,
        logout,
        resetPassword,
        emailVerification
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;