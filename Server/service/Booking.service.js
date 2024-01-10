import { loggers } from "winston";
import Logger from "../Controller/Logger.js";
import { Database } from "../Database/database.js";

export const hotelBookingService = (RoomDetails) => {
	const { roomId, fromDate, toDate, userEmail } = RoomDetails;
	const q1 = `SELECT * From room WHERE id=${roomId}`;
	Database.query(q1, (err, res) => {
		if (err) {
			Logger.error(err);
		} else {
			if (res.Availability == 1) {
				res.send(403, "Sorry the room is full");
			} else {
				const q2 = "INSERT INTO Bookings Values(?,?,?,?,?)";
				Database.query(
					q2,
					[null, userEmail, roomId, fromDate, toDate],
					(err, res) => {
						if (err) {
							Logger.error(err);
						} else {
							res.send(200);
						}
					}
				);
			}
		}
	});
};
