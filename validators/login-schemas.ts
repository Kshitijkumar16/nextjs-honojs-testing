import { z } from "zod";

export const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
});

export const sendOTPSchema = z.object({
	phoneNumber: z.string(),
});

export const verifyOTPSchema = z.object({
	userId: z.string(),
	secret: z.string(),
	keepSignedIn: z.boolean(),
});
