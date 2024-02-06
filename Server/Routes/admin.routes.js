import express from "express";
import { upload } from "../Middleware/Multer.middleware.js";
import multer from "multer";

const router = express.Router();
router.post("/roomUpload", upload, (req, res) => {
	upload(req, res, function (err) {
		// Check for Multer errors
		if (err instanceof multer.MulterError) {
			console.error("Multer Error:", err);
			return res.status(400).send("Multer error occurred.");
		} else if (err) {
			console.error("Other Error:", err);
			return res.status(500).send("Unknown error occurred.");
		}

		// If no error, file should be available in req.file
		console.log("file", req.files);
		res.status(200).send("ok uploaded");
	});
});
export default router;
