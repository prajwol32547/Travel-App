// Multer.middleware.js
import multer from "multer";
import path from "path";

/* The `const storage` variable is creating an instance of the `multer.diskStorage` class. This class
provides a way to define how files should be stored on the disk. */
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log(file);
		cb(null, "/home/prajwol/Travel-App/travelapp/Server/Middleware/tmp");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		const fileExtension = file.originalname.split(".").pop();
		cb(null, file.originalname + "-" + uniqueSuffix + "." + fileExtension);
	},
});

const upload = multer({ storage }).single("Images");
console.log(upload);

export { upload };
