import { auth } from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut,  User, UserCredential } from "firebase/auth";
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

   const logout = ()=>{
    return signOut(auth)
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
        user,
        loading,
        setLoading,
        loginUser,
        googleLogin,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;