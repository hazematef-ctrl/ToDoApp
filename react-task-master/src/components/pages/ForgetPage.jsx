import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ForgetPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleReset(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen w-full text-center mb-50 lg:h-150 lg:w-150 m-auto md:h-130 md:w-130 sm:h-100 sm:w-100">
      <h1 className="text-[50px] font-bold tracking-widest lg:text-[90px] p-2">
        My Tasks
      </h1>
      <form
        className="mt-15 bg-white/12 p-10 rounded-3xl"
        onSubmit={handleReset}
      >
        <h2 className="text-2xl lg:text-[40px]">Forgot Password</h2>
        <p className="mr-28.5 font-extralight mt-10 text-[1rem] opacity-50 text-center w-full">
          Enter your email to reset your password
        </p>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 w-80 h-10 px-4 rounded-lg mt-4 focus:w-90 duration-300"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {submitted && (
          <p className="mt-4 text-sm text-green-600 font-medium">
            ✓ Reset link sent! Check your inbox.
          </p>
        )}
        <button
          type="submit"
          className="w-40 h-10 rounded-lg bg-black text-white mt-6 cursor-pointer block ml-auto mr-auto"
        >
          Send Reset Link
        </button>
        <p className="mt-8 text-sm opacity-50 underline cursor-pointer">
          Remembered your password?{" "}
          <span
            className="font-bold text-black"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};
