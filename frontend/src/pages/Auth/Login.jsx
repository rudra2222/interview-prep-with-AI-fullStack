import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const {updateUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email cannot be empty.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password || password.trim() === "" || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError(null);
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (e) {
      if (e.response && e.response.data.message) {
        setError(e.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[50vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Welcome Back</h3>

      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your email and password to login.
      </p>

      <form onSubmit={handleLogin} noValidate>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-black to-black hover:from-[#e88d55] hover:to-[#dd7c1b] text-white font-semibold py-2 mt-6 rounded-lg transition-colors cursor-pointer"
        >
          Login
        </button>
      </form>

      <p className="text-xs text-slate-700 mt-4">
        Don't have an account?{" "}
        <button
          className="text-orange-700 font-semibold cursor-pointer hover:underline"
          onClick={() => setCurrentPage("signup")}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
