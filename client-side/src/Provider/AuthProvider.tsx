import { auth } from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, User, UserCredential } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

interface AuthProviderProps{
    children: React.ReactNode;
}

export type AuthContextType = {
    createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  user: User | null;
  loading: boolean;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)
const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
const [user, setUser] = useState<User | null>(null)
const [loading, setLoading] = useState(true)

    const createUser = (email: string, password: string)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

   
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
           if(currentUser){
            setUser(currentUser)
            console.log(currentUser)
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;