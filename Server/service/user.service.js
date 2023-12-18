import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Database } from "../Database/database.js";
import Logger from "../Controller/Logger.js";
import { generateToken } from "../Middleware/Auth.js";
const Accesskey = "SecretAccessKey";
const RefreshKey = "SecretRefreshKey";

export const userRegisterService = async (fname, lname, email, password) => {
	return new Promise((resolve, reject) => {
		const q1 = `SELECT * FROM usertab WHERE email="${email}"`;
		Database.query(q1, (err, res) => {
			if (err) {
				Logger.error("Data retrieve error");
				reject(400);
			} else if (res.length > 0) {
				Logger.error("User already exists");
				reject(409);
			} else {
				const q2 =
					"INSERT INTO usertab (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
				Database.query(q2, [fname, lname, email, password], (err) => {
					if (err) {
						Logger.error("Data insert error");
						reject(401);
					} else {
						Logger.info("Inserted successfully");
						resolve(200);
					}
				});
			}
		});
	});
};

export const userLoginService = async (email, password) => {
	return new Promise((resolve, reject) => {
		const q1 = `SELECT * FROM usertab WHERE email="${email}"`;
		Database.query(q1, async (err, res) => {
			if (err) {
				Logger.error("Fetching error");
				reject(400);
			} else {
				Logger.info(res[0].password);
				if (res[0].password === password) {
					const user = {
						email: email,
						firstName: res[0].firstname,
					};
					Logger.info(user.email);
					const Token = await generateToken(user);
					Logger.info(Token.accessToken);
					console.log(`Token.accessToken=${Token.accessToken}`);
					if (Token === undefined) {
						reject(403);
					}
					const q2 = `UPDATE usertab SET RefreshToken='${Token.refreshToken}' WHERE email='${user.email}'`;
					Database.query(q2, (err, res) => {
						if (err) {
							console.log("sendiing refreshtoekn erri=r");
						} else {
							resolve({
								status: "200",
								accessToken: Token.accessToken,
								refreshToken: Token.refreshToken,
								firstName: user.firstName,
							});
						}
					});
				} else {
					Logger.error("does not matches");

					return { status: 400 };
				}
			}
		});
	});
};
