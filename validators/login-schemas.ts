import { string, z } from "zod";

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

export const onboardingFormSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: "Minimum 2 characters required." })
		.max(20, { message: "Maximum 20 characters allowed." }),
	lastName: z
		.string()
		.min(2, { message: "Minimum 2 characters required." })
		.max(20, { message: "Maximum 20 characters allowed." }),
	age: z
		.number()
		.min(18, { message: "You should be at least 18 years of age." })
		.max(110, { message: "Choose a valid number" }),
	gender: z.string({
		required_error: "Please select a gender",
	}),
	phoneNumber: z.string(),
	blank: z.string(),
	userId: z.string(),
	secret: z.string(),
	keepSignedIn: z.boolean(),
});
