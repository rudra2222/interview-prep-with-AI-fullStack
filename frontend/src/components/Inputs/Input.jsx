import React, { useState } from "react";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPass, setShowPass] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <label className="text-base font-semibold text-orange-700 block">
        {label}
      </label>
      <div className="input-box flex items-center border border-orange-400 rounded-lg px-3 py-2 bg-orange-50 focus-within:ring-2 focus-within:ring-orange-400 relative mb-3">
        <input
          className="flex-1 outline-none bg-transparent text-orange-700 placeholder:text-orange-300"
          type={type === "password" ? (showPass ? "text" : "password") : type}
          value={value}
          onChange={(event) => onChange(event)}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-orange-600 hover:text-orange-800 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPass ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.122-6.126M6.343 6.343A9.953 9.953 0 012 9c0 5.523 4.477 10 10 10 1.657 0 3.217-.403 4.576-1.126M17.657 17.657A9.953 9.953 0 0022 15c0-5.523-4.477-10-10-10-1.657 0-3.217.403-4.576 1.126M9.88 9.88a3 3 0 104.24 4.24" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default Input;
