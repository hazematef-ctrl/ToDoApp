import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) return;
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    navigate("/home");
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 text-center">
      <h1 className="text-5xl md:text-[90px] font-bold tracking-widest p-2">
        My Tasks
      </h1>
      <form
        className="mt-8 bg-white/12 p-8 rounded-3xl w-full max-w-sm"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl lg:text-[40px]">Register</h2>
        <p className="font-extralight mt-6 text-[1rem] opacity-50">
          Create your account to get started
        </p>
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-400 w-full h-10 px-4 rounded-lg mt-4 duration-300"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 w-full h-10 px-4 rounded-lg mt-4 duration-300"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 w-full h-10 px-4 rounded-lg mt-4 duration-300"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-400 w-full h-10 px-4 rounded-lg mt-4 duration-300"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {error && (
          <p className="mt-4 text-sm text-red-500 font-medium">{error}</p>
        )}
        <button
          type="submit"
          className="w-full h-10 rounded-lg bg-black text-white mt-6 cursor-pointer"
        >
          Register
        </button>
        <p className="mt-8 text-sm opacity-50 underline cursor-pointer">
          Already have an account?{" "}
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
