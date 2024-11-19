import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { error } from "console";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath: string) => {
  try {
    if (!localFilePath) {
      console.error("No file path provided");
      return error;
    }
    const absoluteFilePath = path.resolve(localFilePath);
    if (!fs.existsSync(absoluteFilePath)) {
      console.error("File not found:", absoluteFilePath);
      return error;
    }
    console.log("Uploading file:", absoluteFilePath);
    const response = await cloudinary.uploader.upload(absoluteFilePath, {
      resource_type: "auto",
    });
    console.log("Upload successful:", response);
    fs.unlinkSync(absoluteFilePath); // Remove local file
    return response.url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Clean up temporary file
    }
    return error;
  }
};

const getCloudinaryPublicId = (url: string) => {
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1]; // e.g., "image.jpg"
  console.log(parts, lastPart);
  return lastPart.split(".")[0]; // Remove extension to get public ID
};

const deleteFromCloudinary = async (publicId: string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Deleted from Cloudinary:", result);
    return result;
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    return null;
  }
};
export { uploadOnCloudinary, getCloudinaryPublicId, deleteFromCloudinary };
