import React, { createContext, useEffect, useState } from 'react'
import { checkLogin, userLogIn, userLogOut, userSignUp } from '../api';
import toast from 'react-hot-toast';
export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);

    const logIn = ({email,password})=>{
        setLoading(true)
        const data = userLogIn({email,password})
        // console.log("login user",data);
        if(data){
            setUser(data)
            setLoading(false)
            return true;
        }else{
            
            toast.error("Email or password incorrect")
            return false;
        }
    }
    const signUp = async ({ email, password, fullName }) => {
        setLoading(true);
        try {
          const isSignUp = userSignUp({ email, password, fullName });
      
          if (isSignUp) {
            setUser({ email }); 
            toast.success("Sign up successful");
            return true;
          } else {
            toast.error("User already exists");
            return false;
          }
        } catch (err) {
          toast.error("Signup failed. Please try again.");
          console.error("Error during signup:", err);
          return false;
        } finally {
          setLoading(false);
        }
      }
      

    const logOut = ()=>{
        userLogOut();
        setUser(null)
    }

    useEffect(()=>{
        const user = checkLogin();
        if(user){
            setUser({email:user});
        }
        setLoading(false)
    },[])
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