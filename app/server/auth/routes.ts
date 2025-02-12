import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie } from "hono/cookie";
import { sessionMiddleware } from "@/lib/session-middleware";
import { AUTH_COOKIE } from "@/constants";
import {
	signUpformSchema,
	onboardingFormSchema,
	sendOTPSchema,
	verifyOTPSchema,
	loginFormSchema,
} from "@/validators/auth-schemas";
import { getCurrent } from "@/app/actions";

const app = new Hono()
	.get("/currentuser", sessionMiddleware, (c) => {
		const user = c.get("currentuser");
		return c.json({ data: user });
	})
	.post("login", zValidator("json", loginFormSchema), async (c) => {
		try {
			const { email, password, keepSignedIn } = c.req.valid("json");

			const { account } = await createAdminClient();

			// Create email session directly
			const session = await account.createEmailPasswordSession(email, password);
			console.log("Session created successfully");

			setCookie(c, AUTH_COOKIE, session.secret, {
				path: "/",
				secure: true,
				httpOnly: true,
				maxAge: keepSignedIn ? 60 * 60 * 24 * 365 : 60 * 60 * 24 * 30,
				sameSite: "strict",
			});

			return c.json({ success: "ok" });
		} catch (error: any) {
			console.error("Signup error details:", {
				message: error.message,
				code: error.code,
				type: error.type,
				stack: error.stack,
			});

			return c.json(
				{
					error: error.message || "Failed to create account",
					code: error.code,
					type: error.type,
				},
				500
			);
		}
	})
	.post("/signup", zValidator("json", signUpformSchema), async (c) => {
		try {
			const { email, password } = c.req.valid("json");
			console.log("Received signup request for:", { email });

			const { account } = await createAdminClient();
			console.log("Admin client created successfully");

			const user = await account.create(ID.unique(), email, password);
			console.log("User created successfully:", user.$id);

			// Create email session directly
			const session = await account.createEmailPasswordSession(email, password);
			console.log("Session created successfully");

			setCookie(c, AUTH_COOKIE, session.secret, {
				path: "/",
				secure: true,
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 30,
				sameSite: "strict",
			});

			return c.json({ success: "ok" });
		} catch (error: any) {
			console.error("Signup error details:", {
				message: error.message,
				code: error.code,
				type: error.type,
				stack: error.stack,
			});

			return c.json(
				{
					error: error.message || "Failed to create account",
					code: error.code,
					type: error.type,
				},
				500
			);
		}
	})
	.post("/logout", sessionMiddleware, async (c) => {
		const account = c.get("account");

		deleteCookie(c, AUTH_COOKIE);
		await account.deleteSession("current");
		return c.json({ success: true });
	})
	.post(
		"/sendotp",
		sessionMiddleware,
		zValidator("json", sendOTPSchema),
		async (c) => {
			const { phoneNumber, password } = c.req.valid("json");

			const account = c.get("account");

			console.log("Phone:" + phoneNumber + " Password:" + password);
			await account.updatePhone(phoneNumber, password);

			const res = await account.createPhoneVerification();

			console.log("Success: \n" + res);
			return c.json({ json: res.userId });
		}
	)
	.post(
		"/verifyotp",
		sessionMiddleware,
		zValidator("json", onboardingFormSchema),
		async (c) => {
			console.log("running api verifyotp");
			const { userId, secret } = c.req.valid("json");

			const account = c.get("account");

			console.log("/verifyotp => UserId: " + userId + "Secret: " + secret);

			try {
				const res = await account.updatePhoneVerification(userId, secret);

				console.log(res);
				console.log("running - verify otp done");

				return c.json({ success: "ok" });
			} catch (error: any) {
				console.error("Verify otp error details:", {
					message: error.message,
					code: error.code,
					type: error.type,
					stack: error.stack,
				});

				return c.json(
					{
						error: error.message || "Failed to verify phone number",
						code: error.code,
						type: error.type,
					},
					500
				);
			}
		}
	);

export default app;
