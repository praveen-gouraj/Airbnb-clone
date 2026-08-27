const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wonderlust_DEV',
        allowed_formats: ["png", "jpg", "jpeg"],
    },
});

module.exports = {cloudinary, storage};
