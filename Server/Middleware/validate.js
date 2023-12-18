import Logger from "../Controller/Logger.js";
import {
	userRegisterService,
	userLoginService,
} from "../service/user.service.js";

export const validateRegister = async (req, res, next) => {
	let { firstName, lastName, email, password } = req.body;
	Logger.info(`"${firstName}, ${lastName}",${email},${password}"  `);

	if (firstName === "") {
		Logger.error("First name is empty");
		res.status(400).send("First name is required");
	} else {
		try {
			const status = await userRegisterService(
				firstName,
				lastName,
				email,
				password
			);
			if (status === 200) {
				Logger.info("User registration validated");
				res.status(200).send("Registration successful");
			} else if (status === 401) {
				Logger.error("Error in user registration");
				res.status(status).send("Error in user registration");
			} else if (status === 400) {
				Logger.error("Data retrieve error");
				res.status(status).send("Data retrieve error");
			} else if (status === 409) {
				Logger.error("User Already Exists");
				res.status(status).send("User Already Exists");
			}
			next();
		} catch (err) {
			Logger.error("Error in user registration");
			res.status(500).send("Internal server error");
		}
	}
};

export const validateLogin = async (req, res, next) => {
	const { email, password } = req.body;
	const emailRegex =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!emailRegex.test(email)) {
		res.send(500);
	}
	try {
		const LoginStatus = await userLoginService(email, password);
		if (LoginStatus.status === "200") {
			console.log(`LoginStatus.token==${LoginStatus.accessToken}`);
			res.cookie("jwtToken", LoginStatus.accessToken, {
				expires: new Date(Date.now() + 300),
				httpOnly: true,
			});
			const data = {
				message: LoginStatus.accessToken,
				firstName: LoginStatus.firstName,
			};
			res.status(200).json(data);
		} else if (LoginStatus.status === 400) {
			res.status(400).send("Login problem, please try again later");
		}
	} catch (err) {
		res.status(500).send("internal server error");
	}
};
