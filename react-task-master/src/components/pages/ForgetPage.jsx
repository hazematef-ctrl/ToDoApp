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
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 text-center">
      <h1 className="text-5xl md:text-[90px] font-bold tracking-widest p-2">
        My Tasks
      </h1>
      <form
        className="mt-8 bg-white/12 p-8 rounded-3xl w-full max-w-sm"
        onSubmit={handleReset}
      >
        <h2 className="text-2xl lg:text-[40px]">Forgot Password</h2>
        <p className="font-extralight mt-6 text-[1rem] opacity-50">
          Enter your email to reset your password
        </p>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 w-full h-10 px-4 rounded-lg mt-4 duration-300"
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
          className="w-full h-10 rounded-lg bg-black text-white mt-6 cursor-pointer"
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
