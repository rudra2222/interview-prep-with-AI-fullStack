const express = require("express");
const {registerUser , loginUser, getUserProfile} = require("../controllers/authController");
const {protect} = require("../middlewares/authMiddleware");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");


router.post("/register" , registerUser);
router.post("/login" , loginUser);
router.get("/profile" , protect,getUserProfile);


router.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({ imageUrl: req.file.path });
  } catch (error) {
    res.status(500).json({ error: "Upload failed", message: error.message });
  }
});

module.exports = router;