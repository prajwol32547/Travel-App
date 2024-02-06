import express from "express";
import upload from "../Middleware/Multer.middleware";
const router = express.Router();
router.post("/addRoom", upload, (req, res) => {
	console.log("body", req.body.images);
	console.log("body", req.body.type);
});
