const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

require("dotenv").config();

cloudinary.config({
  cloud_name: "dbxaogtvv",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createCloudinaryStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowed_formats: ["jpg", "jpeg", "png"],
    },
  });
};

module.exports = { cloudinary, createCloudinaryStorage };
