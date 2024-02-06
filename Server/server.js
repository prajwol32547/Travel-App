import express from "express";
import Logger from "./Controller/Logger.js";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./Routes/user.routes.js";
import bookingRoutes from "./Routes/booking.routes.js";
import adminRoutes from "./Routes/admin.routes.js"; // import the userRoutes

const app = express();
const port = 4000;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.header("Access-Control-Allow-Credentials", "true"); // Set to 'true' for requests with credentials

	// Handle preflight requests
	if (req.method === "OPTIONS") {
		res.status(200).end();
	} else {
		next();
	}
});

app.use(bodyParser.urlencoded({ extended: false, limit: 1000000 }));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/booking", bookingRoutes);
app.use("/admin", adminRoutes); // use the userRoutes

app.listen(port, () => {
	Logger.info("running at 4000");
	console.log(`"listening at ${port}"`);
});

app.get("/", (req, res) => {
	res.send("ok").status(200);
	console.log(process.env.Cloudinary_Secret);
});
