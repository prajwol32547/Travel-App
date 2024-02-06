import express from "express";
import { validateRegister, validateLogin } from "../Middleware/validate.js";
import { verifyRefreshToken } from "../Middleware/Auth.middleware.js";

const router = express.Router();

router.post("/register", validateRegister, (req, res) => {
	res.redirect("/");
});

router.post("/login", validateLogin, (req, res) => {});
router.post("/refresh", verifyRefreshToken, (req, res) => {});

export default router;
