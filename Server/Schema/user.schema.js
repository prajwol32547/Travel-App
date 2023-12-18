import z, { object } from "zod";
export const registerSchema = z.object({
	firstname: z.string().min(3).max(10),
	lastname: z.string().min(3).max(3),
	email: z.string().email(),
	password: z
		.string()
		.min(8)
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),
});

export const loginSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8)
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),
});

export const changePassword = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8)
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),
	newPassword: z
		.string()
		.min(8)
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),
});

export const refreshTokenSchema = z.object({
	userId: z.string().max(30),
	refreshToken: z.string().min(50).max(50),
});
