const multer = require("multer");
const { createCloudinaryStorage } = require("../cloudinaryConfig.js");

const createUploadMiddleware = (folderName, fieldName) => {
  const storage = createCloudinaryStorage(folderName);
  const upload = multer({ storage });
  return upload.single(fieldName);
};

module.exports = createUploadMiddleware;
