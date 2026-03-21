import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleLogin() {
    console.log(email, password);
    navigate("/home");
  }
  return (

   
    <div className="min-h-screen w-full text-center mb-50 lg:h-150 lg:w-150 m-auto md:h-130 md:w-130 sm:h-100 sm:w-100 ">
      <h1 className="text-[50px] font-bold tracking-widest lg:text-[90px]">My Tasks</h1>
      <form
        className="mt-15 "
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h2 className="text-2xl lg:text-[40px]">Login</h2>
        <p className="mr-28.5 font-extralight mt-10 text-[1rem] opacity-50">
          Enter Your Login Information
        </p>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 w-80 h-10 px-4 rounded-lg mt-4 focus:w-90 duration-300"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 w-80 h-10 px-4 rounded-lg mt-4 focus:w-90 duration-300"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button onClick={()=>{
          navigate("/forget");
        }} type="button" className=" text-sm mt-2 block p-2.5 ml-auto mr-auto underline cursor-pointer lg:m-auto lg:p-2.5">
          <p>Forget Your Password</p>
        </button>
        <button type="submit" className="w-40 h-10 rounded-lg bg-black text-white mt-6 cursor-pointer ">
          Login
        </button>
        <p className="mt-8 text-sm opacity-50 underline cursor-pointer">
          Don't have an account?{" "}
          <span className="font-bold text-black" onClick={()=>{
            navigate("/register");
          }}>Register</span>
        </p>
      </form>
    </div>
 
  );
};
