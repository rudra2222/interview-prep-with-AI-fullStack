import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import UserProvider from "./context/userContext";

const App = () => {
  // App.js or AuthProvider.js

  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/interview-prep/:sessionId"
              element={<InterviewPrep />}
            />
          </Routes>
        </BrowserRouter>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </UserProvider>
  );
};

export default App;
