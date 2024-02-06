import { loggers } from "winston";
import Logger from "../Controller/Logger.js";
import { Database } from "../Database/database.js";

export const hotelBookingService = (RoomDetails, res) => {
	const { id, fromDate, toDate, email } = RoomDetails;
	console.log(`Book ${id}`);
	const q1 = `SELECT * From Room WHERE id=${id}`;
	Database.query(q1, (err, result) => {
		if (err) {
			Logger.error(err);
		} else {
			if (result.length > 0 && result[0].Availability === 1) {
				res.status(403).send("Sorry the room is full");
			} else {
				const q2 = "INSERT INTO Bookings Values(?,?,?,?,?)";
				Database.query(
					q2,
					[null, email, id, fromDate, toDate],
					(err, result) => {
						if (err) {
							Logger.error(err);
						} else {
							res.status(200).send("Successful");
						}
					}
				);
			}
		}
	});
};
