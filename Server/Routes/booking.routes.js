import express from "express";
import { authenticateUser } from "../Middleware/Auth.middleware.js";
import { hotelBookingService } from "../service/Booking.service.js";
const router = express.Router();
router.post("/hotelbook", authenticateUser, async (req, res) => {
	console.log(req.body);
	hotelBookingService(req.body, res);
});
export default router;
