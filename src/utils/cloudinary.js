import { v2 as cloudinary} from 'cloudinary'


// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: import.meta.env.CLOUD_NAME,
  api_key: import.meta.env.CLOUD_API_KEY,
  api_secret: import.meta.env.CLOUD_API_SECRET,
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

export function cldUpload(image){

    const uploadedImage = cloudinary.uploader.upload(image).then(r => r)
    return uploadedImage

}