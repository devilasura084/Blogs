import { Navbar } from "@/components/Navbar";
import axios from "axios";
import { Loader } from "lucide-react";
import React, { SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const BlogDetails = ({isAuth,setIsAuth}:{isAuth:string|boolean,setIsAuth:React.Dispatch<SetStateAction<string|boolean>>}) => {
    const Navigate=useNavigate();
    const {blogId}=useParams();
    const [blog,setBlog]=useState<Blog|null>(null);
    const getBlog=async()=>{
        const response=await axios.get(`http://localhost:8080/api/blogs/${blogId}`);
        setBlog(response.data);
    }
    useEffect(()=>{
        if(!isAuth){
            Navigate('/');
        }
        getBlog();
    },[blogId])
    if(!blog){
        return <div className="flex">
            <Loader className=" animate-spin m-auto mt-56"/>
        </div>
    }
    return (
        <>
        <Navbar
        setIsAuth={setIsAuth}
        />
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4 p-6">
          <h1 className="text-2xl text-teal-600 font-bold mb-4">{blog.title}
          <p className="text-xs font-normal text-gray-400">{blog.authorEmail}</p>
          </h1>
          <p className="text-sm text-gray-500 mb-2">
            By {blog.authorName} on {new Date(blog.dateTime).toLocaleDateString()} at {new Date(blog.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
          <div className="text-lg text-gray-700">
            {blog.content}
          </div>
        </div>
        </>)
    
};
