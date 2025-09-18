import React from "react";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-5">
      <p className="text-[14px]">{content}</p>
      <div className="flex justify-end mt-6">

        <button 
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-black to-black hover:from-[#e88d55] hover:to-[#dd7c1b] text-white font-semibold py-2 mt-6 rounded-lg transition-colors cursor-pointer" 
          type="button" 
          onClick={onDelete}
        >Delete</button>

      </div>
    </div>
  );
};

export default DeleteAlertContent;
