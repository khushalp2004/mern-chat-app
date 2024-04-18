import React from "react";
import GenderCheckbox from "./GenderCheckbox";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up |<span className="text-blue-500"> Chatify</span>
        </h1>

        <form action="">
          <div className="mt-4">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
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
            />
          </div>

          {/*Gender*/}
          <GenderCheckbox/>

          <a href="#" className='text-sm hover: underline hover:text-blue-600 mt-2 inline-block m-3'>
                    Already have an account?
                </a>

                <div>
                <button className="btn btn-outline btn-block">Sign Up</button>
                </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
