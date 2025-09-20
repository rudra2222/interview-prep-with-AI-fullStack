const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "my_uploads",           
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const fileFilter = (req , file , cb)=>{
  const allowedTypes = ['image/jpeg' , 'image/png' , 'image/jpg'];
  if(allowedTypes.includes(file.mimetype)){
    cb(null , true);
  }else{
    cb(new Error('Only .jpeg , .jpg , .png formats are allowed') , false);
  }
};


const upload = multer({storage , fileFilter});

module.exports = upload;