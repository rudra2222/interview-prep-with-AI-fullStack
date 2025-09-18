import React from "react";

const Feature = ({ title, description }) => {
  return (
    <div
      className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-200 transition border border-amber-100"
    >
      <h3 className="text-base font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Feature;
