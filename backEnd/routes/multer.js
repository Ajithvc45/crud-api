const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const { file } = require("../controllers/multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(path.dirname(__dirname)), "/backEnd/upload"); // Define the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Define how the file should be named
  },
});

const upload = multer({ storage: storage });

router.post("/file", upload.single("image"), file);

module.exports = router;
