
import { BlogCard } from "@/components/Blogcard";
import { Navbar } from "@/components/Navbar";
import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Home = ({isAuth,setIsAuth}:{isAuth:string|boolean,setIsAuth:React.Dispatch<SetStateAction<string|boolean>>}) => {
  const Navigate=useNavigate();
  const [blogData,setBlogData]=useState<Blog[]>([]);
  const getBlogData=async ()=>{
    try {
      const response=await axios.get('http://localhost:8080/api/blogs');
      setBlogData(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(!isAuth){
      Navigate('/login');
    }
    getBlogData();
  },[])
  return <div className="py-3 px-4">
    <Navbar
    setIsAuth={setIsAuth}
    />
    <h1 className="text-5xl font-bold font-mono">
      {blogData.map((blog)=>(
        <BlogCard
        key={blog.blogId}
        dateTime={blog.dateTime}
        authorEmail={blog.authorEmail}
        authorName={blog.authorName}
        content={blog.content}
        title={blog.title}
        blogId={blog.blogId}
        />
      ))}
    </h1>
    </div>;
};
