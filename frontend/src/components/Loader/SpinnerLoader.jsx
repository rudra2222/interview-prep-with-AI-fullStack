import React from "react";

const SpinnerLoader = () => {
  return (
    <div role="status" className="flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-gray-400 border-b-white rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
