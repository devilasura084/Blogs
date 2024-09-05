import React, { SetStateAction, useEffect, useState } from "react";
import Logout from "./Logout";
import Cookies from "universal-cookie";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({setIsAuth}:{setIsAuth:React.Dispatch<SetStateAction<string|boolean>>}) => {
  const cookies=new Cookies();
  const Navigate=useNavigate();
  const [image,setImage]=useState('');
  useEffect(()=>{
    const imageUrl = cookies.get('image_url');
    setImage(imageUrl);
  },[])
  return <div className="flex items-center justify-between px-5 py-3">
  <Home 
      className="w-12 h-12 cursor-pointer" 
      onClick={() => { Navigate('/') }} 
  />
  <div className="flex items-center gap-3">
          {image ? (
                    <img
                        className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        src={image}
                        alt="user_image"
                    />
                ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-600">No Image</span>
                    </div>
                )}
          <Logout 
          className="px-4 py-3 sm:px-6 md:px-10" 
          setIsAuth={setIsAuth} 
      />
  </div>
</div>
};
