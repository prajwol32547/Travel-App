import jwt from "jsonwebtoken";
import Logger from "../Controller/Logger.js";

const RefreshKey = process.env.REFRESH_KEY || "SecretRefreshKey";
const AccessKey = process.env.ACCESS_KEY || "SecretAccessKey";

export const generateToken = async (data) => {
	const userData = {
		email: data.email,
		firstName: data.firstName,
	};
	Logger.info(userData.email);
	console.log(userData.email);
	try {
		let expiration = 10;
		const accessToken = await jwt.sign(userData, AccessKey, {
			expiresIn: expiration,
		});
		const refreshToken = await generateRefreshToken(userData);
		console.log(refreshToken, accessToken);
		return { accessToken, refreshToken };
	} catch (err) {
		Logger.error(err);
		// return null;
	}
};

const generateRefreshToken = async (userData) => {
	try {
		const refreshToken = await jwt.sign(userData, RefreshKey);
		return refreshToken;
	} catch (err) {
		Logger.error(err);
		return null;
	}
};

export const authenticateUser = (req, res, next) => {
	const token = extractTokenFromHeader(req);

	if (!token) {
		return res.status(400).send("No token found");
	}

	jwt.verify(token, AccessKey, (err, userData) => {
		if (err) {
			return res.status(403).send("Error in verifying access token");
		} else {
			req.user = userData;
			next();
		}
	});
};

export const verifyRefreshToken = (req, res, next) => {
	const token = extractTokenFromHeader(req);

	if (!token) {
		return res.status(400).send("No token found");
	}

	jwt.verify(token, RefreshKey, (err, userData) => {
		if (err) {
			return res.status(400).send("Error in verifying refresh token");
		} else {
			req.user = userData;
			next();
		}
	});
};

const extractTokenFromHeader = (req) => {
	const authHeader = req.headers["authorization"];
	return authHeader && authHeader.split(" ")[1];
};
