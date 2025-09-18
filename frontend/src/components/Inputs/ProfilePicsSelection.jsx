import React, { useState } from "react";

const ProfilePicsSelection = ({ image, setImage }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleRemove = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <label className="text-lg font-semibold text-orange-700 block">Upload Profile Picture</label>

      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="cursor-pointer absolute top-0 right-1 bg-black text-white rounded-3xl p-1 pt-0.5 pb-0.5 text-xs"
          >
            ✕
          </button>
        </div>
      ) : (
        <label className="cursor-pointer px-4 py-2 border border-orange-400 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-300">
          Choose Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default ProfilePicsSelection;
