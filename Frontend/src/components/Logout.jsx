import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();

    const handleLogout=()=>{
        try{
            setAuthUser({...authUser,user:null});
            localStorage.removeItem("User");
            toast.success("Logged out Successfully");
            setTimeout(()=>{
                window.location.reload();
            },1000);
        }catch(error){
            toast.error("Couldn't log out Error"+error.message);
        }
    }


  return (
    <div>
         <a 
         className="bg-red-500 text-white hover:bg-slate-700 p-2 rounded-md cursor-pointer font-semibold duration-300"
         onClick={handleLogout}
         >
            Logout
         </a>
    </div>
  )
}

export default Logout