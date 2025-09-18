import React from "react";
import image from "../../public/interviewImage.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LuSparkles } from "react-icons/lu";
import Features from "../components/Cards/features";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuth, setOpenAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const { user } = useContext(UserContext);

  const handleAuth = () => {
    // setCurrentPage(page);
    if (!user) {
      setOpenAuth(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-[#fffcef]">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">
              Interview preparation with AI
            </div>

            <div>
              {user ? (
                <ProfileInfoCard />
              ) : (
                <button
                  className="bg-linear-to-r from-[#ff9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors  cursor-pointer"
                  onClick={() => setOpenAuth(true)}
                >
                  Login / Signup
                </button>
              )}
            </div>
          </header>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <LuSparkles /> AI powered
                </div>
              </div>

              <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
                Ace Interviews with
                <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#ff9924_0%,_#fcd760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 mr-0 mb:mr-20 mb-6">
                Get personalized interview questions and feedback. Practice and
                mock interviews with AI assistance. Enhance your skills and
                confidence for real-world interviews.
              </p>
              <button
                className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                onClick={handleAuth}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex item-center justify-center -mt-36">
            <img
              src={image}
              alt="Preparation image"
              className="w-[80vw] rounded-lg"
            />
          </section>
        </div>

        <div className="w-full min-h-full bg-[#fffcef]">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Feature That Make You Shine
              </h2>

              <div className="container mx-auto px-4 py-8">
                <Features col={3} st={0} end={3} />
                <Features col={2} st={3} end={5} />
                <Features col={3} st={5} end={8} />
                <Features col={2} st={8} end={10} />
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
          Made With ❤️...
        </div>
      </div>

      <Modal
        isOpen={openAuth}
        onClose={() => {
          setOpenAuth(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" ? (
            <Login setCurrentPage={setCurrentPage} />
          ) : (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>

      {/* <div>helo</div> */}
    </>
  );
};

export default LandingPage;
