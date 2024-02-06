import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import Logger from "../Controller/Logger";

cloudinary.config({
	cloud_name: "dxdq1lnt9",
	api_key: process.env.Cloudinary_api,
	api_secret: process.env.Cloudinary_Secret,
});
export const uploader = async () => {
	if (!localFilePath) return null;
	try {
		const response = await cloudinary.uploader.upload(localFilePath, {
			resource_type: "auto",
		});
		console.log("uploaded file", response.url);
		return response;
	} catch (error) {
		Logger.error("file upload error", error);
		fs.unlinkSync(localFilePath);
	}
};
