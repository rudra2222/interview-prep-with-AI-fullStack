import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePicsSelection from "../../components/Inputs/ProfilePicsSelection";
import { validateEmail } from "../../utils/helper";
import { UserContext } from "../../context/userContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import uploadImage from "../../utils/uploadimage";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {updateUser} = useContext(UserContext);
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    let profileImageUrl = " ";

    if(!name){
      setError("Name cannot be empty.");
      return;
    }
    if(!email) {
      setError("Email cannot be empty.");
      return;
    }
    if(!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if(!password || password.trim() === "" || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError(null);
    try{
      if(profilePic){
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }


      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER , {
        name,
        email,
        password,
        profileImageUrl
      });
      const {token} = response.data;
      
      if(token){
        localStorage.setItem("token" , token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    }catch(e){
      if(e.response && e.response.data.message) {
        setError(e.response.data.message);
      }else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
    
  };

  return (
    <>
      <div className="w-[90vw] md:w-[50vw] p-7 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-black">
          Create a new account
        </h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to create a new account.
        </p>

        <form onSubmit={handleSignUp} noValidate>
          <ProfilePicsSelection image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              placeholder="User Name"
              type="text"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="Your Email"
              type="email"
            />

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Your Password"
              type="password"
            />
          </div>

          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-black to-black hover:from-[#e88d55] hover:to-[#dd7c1b] text-white font-semibold py-2 mt-6 rounded-lg transition-colors cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-xs text-slate-700 mt-4">
          Already have an account?{" "}
          <button
            className="text-orange-700 font-semibold cursor-pointer hover:underline"
            onClick={() => setCurrentPage("login")}
          >
            Log in
          </button>
        </p>
      </div>
    </>
  );
};

export default SignUp;
