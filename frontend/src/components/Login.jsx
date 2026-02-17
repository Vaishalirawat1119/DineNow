import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const {url, setToken} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name : "",
    email : "",
    password : ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name] : value}))
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if(currState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    }
    else{
      alert(response.data.message);
    }
  }

  return (
    <div className='absolute z-1 w-full h-full font-[outfit] bg-[#00000090] grid'>
      <form onSubmit={onLogin}
        className='
          place-self-center
          w-[max(23vw,330px)]
          sm:w-100
          md:w-112.5
          text-black
          bg-white
          flex
          flex-col
          gap-6.25
          py-6.25
          px-7.5
          sm:px-10
          rounded-lg
          text-[14px]
          animation-[fadeIn_0.5s_ease-in-out_forwards]
        '
      >
        <div className='flex justify-between items-center text-black'>
          <h2 className='font-medium text-2xl sm:text-3xl'>{currState}</h2>
          <img
            className='w-4 cursor-pointer'
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className='flex flex-col gap-5'>
          {currState !== "Login" && (
            <input
              className='border-2 border-[gray] p-2.5 sm:p-3 rounded-sm'
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Username"
              required
            />
          )}

          <input
            className='border-2 border-[gray] p-2.5 sm:p-3 rounded-sm'
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email"
            required
          />

          <input
            className='border-2 border-[gray] p-2.5 sm:p-3 rounded-sm'
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type='submit'
          className='
            border-[none]
            p-2.5
            sm:p-3
            rounded-sm
            text-white
            text-[15px]
            sm:text-[16px]
            cursor-pointer
            bg-[#B87C4C]
          '
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className='flex items-start gap-2 -mt-3.75'>
          <input className='mt-1.25' type="checkbox" required/>
          <p className='text-[12px] sm:text-[14px] leading-5'>
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>

        {currState === "Login" ? (
          <p className='text-[13px] sm:text-[14px]'>
            Create a new account?{" "}
            <span
              className='text-[#B87C4C] font-medium cursor-pointer'
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className='text-[13px] sm:text-[14px]'>
            Already have an account?{" "}
            <span
              className='text-[#B87C4C] font-medium cursor-pointer'
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  )
}

export default Login