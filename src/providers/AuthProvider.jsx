import React, { createContext, useState } from 'react'
import { userLogIn, userSignUp } from '../api';
import toast from 'react-hot-toast';
export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const logIn = ({email,password})=>{
        const data = userLogIn({email,password})
        // console.log("login user",data);
        if(data){
            setUser(data)
            return true;
        }else{
            
            toast.error("Email or password incorrect")
            return false;
        }
    }
    const signUp = ({email,password,fullName})=>{
        setLoading(true)
        console.log("user",email,password,fullName);
        const isSignUp = userSignUp({ email, password,fullName })

        if(isSignUp){
            return true;
        }
        else{
            setUser({email,name:fullName})
            toast.error("Email Already Exist")
            return false;
        }
    }
    const logOut = ()=>{

    }
  return (
    <AuthContext.Provider value={{
        user,
        logIn,
        signUp,
        logOut, 
        loading,
        setLoading,
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider