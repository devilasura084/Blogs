import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';
import { auth } from '../firebase-config';
import { SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
interface logoutprops{
    className?:string
    setIsAuth:React.Dispatch<SetStateAction<string|boolean>>
}
const Logout = ({className,setIsAuth}:logoutprops) => {
    const Navigate=useNavigate();
    const cookie=new Cookies();
    const handleClick=async()=>{
    await signOut(auth)
    cookie.remove('auth-token');
    cookie.remove('username');
    cookie.remove('email');
    cookie.remove('image_url');
    setIsAuth(false);
    Navigate('/login');
    }
  return (
    <button className={cn('bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-all shadow-xl',className)} onClick={handleClick}>Logout</button>
  )
}

export default Logout