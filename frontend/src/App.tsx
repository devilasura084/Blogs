import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { useState } from "react";
import Cookies from "universal-cookie";
import { BlogDetails } from "./pages/BlogDetails";
function App() {
  const cookies=new Cookies();
  const [isAuth,setIsAuth]=useState<string|boolean>(cookies.get('auth-token'));
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        />}/>
        <Route path="/login" element={<Login
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        />}/>
        <Route path="/blogs/:blogId"
        element={<BlogDetails
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        />}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
