import React from "react";
import {Link} from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp=()=> {
  const [inputs,setInputs]=useState({
    fullname:'',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading,signup}=useSignup();

  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender});
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up |<span className="text-blue-500"> Chatify</span>
        </h1>

        <form action="" onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullname}
              onChange={(e)=>setInputs({...inputs,fullname: e.target.value})}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e)=>setInputs({...inputs,username: e.target.value})}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">New Password</span>
            </label>
            <input
              type="text"
              placeholder="Create new password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password: e.target.value})}
            />
          </div>

          <div className="mt-2 mb-2">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword: e.target.value})}
            />
          </div>

          {/*Gender*/}
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block m-3'>
                    Already have an account?
                </Link>

                <div>
                <button className="btn btn-outline btn-block" disabled={loading}>
                  {loading?<span className="loading loading-spinner"></span>:"Sign Up"}
                </button>
                </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
