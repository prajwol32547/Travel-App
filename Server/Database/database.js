import mysql from "mysql";
import Logger from "../Controller/Logger.js";
import dotenv from "dotenv";
dotenv.config();
export const Database = mysql.createConnection({
	host: process.env.Local_Host,
	user: process.env.User_Name,
	password: "",
	multipleStatements: true,
	database: process.env.Database,
});
Database.connect((err) => {
	if (err) {
		console.log("Error connecting to db");
		Logger.error("Error connecting to database");
	} else {
		console.log("Connected to db");
		Logger.info("connected to db");
	}
});
