import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


const Signup = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const from =location.state?.from?.pathname || '/';


    const { register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
        } = useForm();

        const onSubmit =async (data) =>{
            console.log(data);
            const userInfo={
                fullName:data.fullName,
                email: data.email,
                password: data.password
            }
            await axios.post('http://localhost:4000/api/v1/signup',userInfo)
            .then((res)=>{
                console.log(res.data);
                if(res.data){
                    toast.success('SignUp Successfully!');

                }
                localStorage.setItem("User",JSON.stringify(res.data.user));
                navigate(from,{replace:true});
                setTimeout(()=>{
                    window.location.reload();
                },1000);
            }).catch((error)=>{
                if(error.response){
                    console.log(error);
                    // alert("Error: ",error.response.data.message);
                    toast.error('Error',error.message.data);

                }
            })
    
        }

    return (
        <div className="flex h-screen items-center justify-center">
          
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute text-xl font-bold text-red-600 right-2 top-2">✕</Link>
                    
                    <h3 className="font-bold text-xl">SignUp</h3>
                    <div className="mt-4 space-y-2">
                        <span>Full Name:</span>
                        <br />
                        <input type="text" 
                        className="w-80 px-3 py-1 border rounded-md outline-none"
                         placeholder="Enter the Full Name"
                         {...register("fullName", { required: true })}
                          />
                           <br/>
                          {errors.fullName && <span className="text-sm text-red-500">This field is required</span>}
                        <br />
                        <span>Email:</span>
                        <br />
                        <input type="email" 
                        className="w-80 px-3 py-1 border rounded-md outline-none"
                         placeholder="Enter the Email"
                         {...register("email", { required: true })}
                          />
                           <br/>
                          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        <br />
                        <span>Password:</span>
                        <br />
                        <input type="password" 
                        className="w-80 px-3 py-1 border rounded-md outline-none" 
                        placeholder="Enter the Password"
                        {...register("password", { required: true })}
                         />
                         <br/>
                         {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                    <div className="flex justify-between mt-4 items-center">
                        <button className="bg-pink-500 btn font-bold px-4 text-white">SignUp</button>
                        <p>Have account? <span className="text-blue-700 font-semibold underline"><a onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a></span></p>
                    </div>
                    </form>
                </div>
           <Login/>
        </div>
    )
}

export default Signup;