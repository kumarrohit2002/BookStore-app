import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const from =location.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    };

    const onSubmit =async (data) =>{
        // console.log(data);
        const userInfo={
            email: data.email,
            password: data.password,
        }
        await axios.post('http://localhost:4000/api/v1/login',userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Login Successfully!');
            }
            localStorage.setItem("User",JSON.stringify(res.data.user));
            setTimeout(()=>{
                navigate(from,{replace:true});
                window.location.reload();
            },1000);
            
        }).catch((error)=>{
            toast.error(`Login failed, Error:${error.message}`);
        })
        
        closeModal();


    }

    

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-circle btn-ghost absolute text-xl font-bold text-red-600 right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-xl">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email:</span>
                            <br />
                            <input 
                                type="email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                placeholder="Enter the Email"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            <br />
                            <span>Password:</span>
                            <br />
                            <input 
                                type="password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                placeholder="Enter the Password"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="flex justify-between mt-4 items-center">
                            <button className="bg-pink-500 btn font-bold px-4 text-white" type="submit">Login</button>
                            <p>Not registered? <span className="text-blue-700 font-semibold underline"><a href="/signup">Signup</a></span></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
