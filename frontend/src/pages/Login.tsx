import React, { SetStateAction, useEffect } from "react";
import {auth,provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
import { useNavigate } from "react-router-dom";
export const Login = ({isAuth,setIsAuth}:{isAuth:string|boolean,setIsAuth:React.Dispatch<SetStateAction<string|boolean>>}) => {
  const cookies=new Cookies();
  const Navigate=useNavigate();
  useEffect(()=>{
    if(isAuth)
      Navigate('/');
  })
    const SignInWithGoogle=async()=>{
        try {
            const response=await signInWithPopup(auth,provider);
            cookies.set('auth-token',response.user.refreshToken);
            cookies.set('username',response.user.displayName);
            cookies.set('email',response.user.email);
            cookies.set('image_url',response.user.photoURL);
            setIsAuth(true)
            Navigate('/');
        } catch (error) {
            console.error(error)
        }
    }
    return (
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100'>
      <div className='text-2xl md:text-3xl font-semibold mb-6 text-center'>
        Sign In with Google To Continue
      </div>
      <button 
        className='bg-teal-600 p-4 md:p-5 hover:bg-teal-500 transition-all text-white rounded-xl font-bold shadow-xl w-full max-w-sm'
        onClick={SignInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
    )
};
