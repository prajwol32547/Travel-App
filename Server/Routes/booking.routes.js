import express from "express";
import { authenticateUser } from "../Middleware/Auth.js";
import { hotelBookingService } from "../service/Booking.service.js";
const router = express.Router();
router.post("/hotelbook", authenticateUser, async (req, res) => {
	hotelBookingService(req);
});
export default router;
