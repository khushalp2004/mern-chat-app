import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import useLogin from '../../hooks/useLogin.js';

function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const {loading,login}=useLogin();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(username,password);
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login |
                <span className='text-blue-500'> Chatify</span>
            </h1>

            <form action="" onSubmit={handleSubmit}>
                <div className='mt-4'>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className='mt-4'>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <Link to="/signup" className='text-sm text-white-600 hover:underline hover:text-blue-600 mt-2 inline-block m-3'>
                    Don't have an account?
                </Link>
                <div>
                <button className="btn btn-outline btn-block"
                disabled={loading}>
                    {loading?<span className='loading loading-spinner'></span>:"Login"}
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;
